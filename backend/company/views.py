from django.shortcuts import get_object_or_404
from django.http import Http404
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter
from .models import Company, Category
from .filters import CompanyFilterBackend
from .serializers import (
    CompanySerializer,
    CategorySerializer,    
)


class CompaniesView(generics.ListCreateAPIView):
    # permission_classes = (IsAuthenticated,)
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    filter_backends = (SearchFilter, CompanyFilterBackend)
    filter_fields = ('category',)
    search_fields = ('name', 'city', 'street', 'phone_number')
    lookup_field = 'slug'

    def get_queryset(self):        
        company_id = self.request.query_params.get('company_id')
        location = self.request.query_params.get('location')
        
        if location:
            return self.get_by_loaction(location)

        companies = Company.objects.all()
        if company_id:
            company = get_object_or_404(Company, pk=company_id)
            companies = Company.objects.filter(
                category=company.category,
                city=company.city
            )
        return companies

    def get_by_loaction(self, location):
        lat, lon = location.split(',')
        try:
            return Company.objects.get_nearby_spots(lat, lon)
        except:
            return Response('Location is not correct', status=status.HTTP_400_BAD_REQUEST)


class CompanyView(APIView):
    def get(self, request, pk=None, slug=None, format=None):        
        if pk:
            company = get_object_or_404(Company, pk=pk)
            serializer = CompanySerializer(company, context={'request': request})
        elif slug:
            company = get_object_or_404(Company, slug=slug)
            serializer = CompanySerializer(company, context={'request': request})
        else:
            companies = Company.objects.all()
            serializer = CompanySerializer(companies, many=True, context={'request': request})
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        

class CategoriesView(APIView):
    def get(self, request, pk=None, parent_cetegory_id=None, format=None):
        if pk:
            category = get_object_or_404(Category, pk=pk)
            serializer = CategorySerializer(category, context={'request': request})
        elif parent_cetegory_id:
            categories = Category.objects.filter(parent_category=parent_cetegory_id)
            serializer = CategorySerializer(categories, many=True, context={'request': request})
        else:
            categories = Category.objects.all()
            serializer = CategorySerializer(categories, many=True, context={'request': request})
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



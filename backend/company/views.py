from django.shortcuts import get_object_or_404
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
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
    CompanyCitySerializer,    
)


class CompaniesView(generics.ListCreateAPIView):    
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    filter_backends = (SearchFilter, CompanyFilterBackend)
    filter_fields = ('category', 'city')
    search_fields = ('name', 'city', 'street', 'phone_number')
    lookup_field = 'slug'

class CompanyView(APIView):
    def get(self, request, pk=None, slug=None, format=None):        
        query = {}

        if pk:
            query = { 'pk': pk }
        elif slug:
            query = { 'slug': slug }        
            
        company = get_object_or_404(Company, **query)
        serializer = CompanySerializer(company, context={'request': request})        
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
class CompaniesCitiesView(generics.ListCreateAPIView):
    queryset = Company.objects.values('city').distinct()
    serializer_class = CompanyCitySerializer
    filter_backends = (SearchFilter,)
    search_fields = ('city',)

class CategoriesView(APIView):
    def get(self, request, pk=None, parent_cetegory_id=None, format=None):
        if pk:
            category = get_object_or_404(Category, pk=pk)
            serializer = CategorySerializer(category, context={'request': request})
        elif parent_cetegory_id:
            categories = Category.objects.filter(parent_category=parent_cetegory_id)
            serializer = CategorySerializer(categories, many=True, context={'request': request})
        else:
            parent_categories = Category.objects.filter(parent_category__isnull=True)            
            category_hierarchy = []
            for parent in parent_categories:                
                categories = Category.objects.filter(parent_category=parent)
                category_hierarchy.append({
                    'category': CategorySerializer(parent, context={'request': request}).data,
                    'children': CategorySerializer(categories, many=True, context={'request': request}).data
                })

        return Response(category_hierarchy)

    def post(self, request, format=None):
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



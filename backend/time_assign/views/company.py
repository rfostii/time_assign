from django.shortcuts import get_object_or_404
from django.http import Http404
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from time_assign.models import Company
from time_assign.serializers.company import CompanySerializer
from django_filters.rest_framework import DjangoFilterBackend
from time_assign.filters.SearchFilterLimit import SearchFilterLimit


class CompaniesView(generics.ListCreateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer    
    filter_backends = (SearchFilterLimit, DjangoFilterBackend)
    search_fields = ('name', 'city', 'street', 'phone_number')
    lookup_field = 'slug'

    def get_queryset(self):        
        category = self.request.query_params.get('category')
        
        companies = Company.objects.all()        
        if category:
            companies = Company.objects.filter(category__id=category)

        return companies


class CompanyView(APIView):
    def get(self, request, pk=None, slug=None, format=None):        
        if pk:
            company = Company.objects.get(pk=pk)
            serializer = CompanySerializer(company, context={'request': request})
        elif slug:
            company = Company.objects.get(slug=slug)
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
        






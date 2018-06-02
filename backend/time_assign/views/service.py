from django.shortcuts import render
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from time_assign.models import Service
from time_assign.serializers.service import ServiceSerializer


class ServiceView(APIView):
    def get(self, request, format=None):
        companies = Service.objects.all()
        serializer = ServiceSerializer(companies, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = ServiceSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


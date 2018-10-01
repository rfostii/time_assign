from django.shortcuts import render
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Service
from .serializers import ServiceSerializer


class ServiceView(APIView):
    def get(self, request, pk=None, format=None):
        if pk:
            service = Service.objects.get(pk=pk)
            serializer = ServiceSerializer(service, context={'request': request})
        else:
            services = Service.objects.all()
            serializer = ServiceSerializer(services, many=True, context={'request': request})
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = ServiceSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


from django.shortcuts import render
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from time_assign.models import User
from time_assign.serializers.user import UserSerializer


class UserView(APIView):
    def get(self, request, pk=None, format=None):
        if pk:
            client = User.objects.all()
            serializer = UserSerializer(client, context={'request': request})            
        else:
            clients = User.objects.all()
            serializer = UserSerializer(clients, many=True, context={'request': request})
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


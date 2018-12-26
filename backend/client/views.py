import datetime
from django.shortcuts import render, get_object_or_404
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Client
from .serializers import ClientSerializer
from rest_framework_jwt.views import ObtainJSONWebToken, jwt_response_payload_handler
from rest_framework_jwt.settings import api_settings


class ClientView(APIView):
    def get(self, request, pk=None, format=None):
        if pk:
            client = get_object_or_404(Client,pk=pk)
            serializer = ClientSerializer(client, context={'request': request})            
        else:
            clients = Client.objects.all()
            serializer = ClientSerializer(clients, many=True, context={'request': request})
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = ClientSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class TokenCreateView(ObtainJSONWebToken):
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)

        if serializer.is_valid():
            user = serializer.object.get('user') or request.user
            token = serializer.object.get('token')
            response_data = {
                'token': jwt_response_payload_handler(token, user, request),
                'user': ClientSerializer(user).data,
            }
            response = Response(response_data)
            if api_settings.JWT_AUTH_COOKIE:
                expiration = (datetime.utcnow() + api_settings.JWT_EXPIRATION_DELTA)
                response.set_cookie(
                    api_settings.JWT_AUTH_COOKIE,
                    token,
                    expires=expiration,
                    httponly=True
                )
            return response

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)        

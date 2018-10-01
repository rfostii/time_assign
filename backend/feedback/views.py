from django.shortcuts import render
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Feedback
from .serializers import FeedbackSerializer


class FeedbackView(APIView):
    def get(self, request, pk=None, format=None):
        if pk:
            feedback = Feedback.objects.get(pk=pk)
            serializer = FeedbackSerializer(feedback, context={'request': request})
        else:
            feedbacks = Feedback.objects.all()
            serializer = FeedbackSerializer(feedbacks, many=True, context={'request': request})
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = FeedbackSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

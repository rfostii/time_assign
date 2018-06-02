from rest_framework import serializers
from time_assign.models import Feedback
from .company import CompanySerializer


class FeedbackSerializer(serializers.ModelSerializer):
    company = CompanySerializer()
    
    class Meta:
        model = Feedback
        fields = ('id', 'client', 'employee', 'company', 'assessment')

    def create(self, validated_data):
        return Feedback.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)        
        instance.save()
        return instance
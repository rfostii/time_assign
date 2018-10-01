from rest_framework import serializers
from .models import Service
from company.serializers import CompanySerializer


class ServiceSerializer(serializers.ModelSerializer):
    company = CompanySerializer()
    
    class Meta:
        model = Service
        fields = ('id', 'company', 'image', 'name', 'description', 'price', 'currency', 'period')

    def create(self, validated_data):
        return Service.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)        
        instance.save()
        return instance
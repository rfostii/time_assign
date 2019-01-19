from rest_framework import serializers
from .models import Client
from company.serializers import CompanySerializer


class ClientSerializer(serializers.ModelSerializer):
    company = CompanySerializer()

    class Meta:
        model = Client
        fields = ('id', 'first_name', 'last_name', 'email', 'company', 'is_employee')

    def create(self, validated_data):
        return Client.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)        
        instance.save()
        return instance
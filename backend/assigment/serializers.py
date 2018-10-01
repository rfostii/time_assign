from rest_framework import serializers
from .models import Assigment
from company.serializers import CompanySerializer
from client.serializers import ClientSerializer
from service.serializers import ServiceSerializer


class AssigmentSerializer(serializers.ModelSerializer):
    company = CompanySerializer()
    client = ClientSerializer()
    employee = ClientSerializer()
    service = ServiceSerializer()
    
    class Meta:
        model = Assigment
        fields = ('id', 'company', 'client', 'employee', 'service', 'datetime', 'duration')

    def create(self, validated_data):
        return Assigment.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)        
        instance.save()
        return instance
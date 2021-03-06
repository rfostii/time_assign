from rest_framework import serializers
from time_assign.models import Assigment
from .company import CompanySerializer
from .client import ClientSerializer
from .service import ServiceSerializer


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
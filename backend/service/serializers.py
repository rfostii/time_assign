from rest_framework import serializers
from .models import Service


class EmployeeSerializer(serializers.Serializer):
    id = serializers.ReadOnlyField()  
    first_name = serializers.CharField(max_length=30)
    last_name = serializers.CharField(max_length=30)
    
class ServiceSerializer(serializers.ModelSerializer):
    employee = EmployeeSerializer();
   
    class Meta:
        model = Service
        fields = (
            'id', 'company', 'image', 'name', 'description',
             'price', 'currency', 'period', 'employee', 'duration'
        )

    def create(self, validated_data):
        return Service.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)        
        instance.save()
        return instance
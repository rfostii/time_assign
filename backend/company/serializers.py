from rest_framework import serializers
from .models import Category, Company
from service.serializers import ServiceSerializer


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name', 'logo',)

    def create(self, validated_data):
        return Category.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.title = validated_data.get('name', instance.name)        
        instance.save()
        return instance

class CompanySerializer(serializers.ModelSerializer):
    category = CategorySerializer()
    procedures = ServiceSerializer(many=True)

    class Meta:
        model = Company
        fields = (
            'id', 'name', 'category', 'procedures', 'logo', 'city', 
            'street', 'house_number', 'phone_number', 'slug',
            'description',
        )        

    def create(self, validated_data):
        return Company.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)        
        instance.save()
        return instance
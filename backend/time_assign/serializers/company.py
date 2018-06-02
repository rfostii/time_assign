from rest_framework import serializers
from time_assign.models import Company
from .category import CategorySerializer


class CompanySerializer(serializers.ModelSerializer):
    category = CategorySerializer()

    class Meta:
        model = Company
        fields = ('id', 'name', 'category', 'logo', 'city', 'street', 'house_number', 'phone_number')

    def create(self, validated_data):
        return Company.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)        
        instance.save()
        return instance
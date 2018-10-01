from rest_framework import serializers
from .models import Category, Company


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ('id', 'name')

    def create(self, validated_data):
        return Category.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.title = validated_data.get('name', instance.name)        
        instance.save()
        return instance


class CompanySerializer(serializers.HyperlinkedModelSerializer):
    category = CategorySerializer()

    url = serializers.HyperlinkedIdentityField(
        view_name='api:company_slug',
        lookup_field='slug'
    )

    class Meta:
        model = Company
        fields = (
            'id', 'name', 'category', 'logo', 'city', 
            'street', 'house_number', 'phone_number', 'slug', 'url', 
            'description',
        )
        lookup_field = 'slug'
        extra_kwargs = {
            'url': {'lookup_field': 'slug'}
        }

    def create(self, validated_data):
        return Company.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)        
        instance.save()
        return instance
from rest_framework import serializers
from time_assign.models import Category


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
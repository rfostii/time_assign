from rest_framework import serializers
from time_assign.models import User
from .service import ServiceSerializer


class UserSerializer(serializers.ModelSerializer):
    service = ServiceSerializer()

    class Meta:
        model = User
        fields = ('id', 'service', 'user')

    def create(self, validated_data):
        return User.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)        
        instance.save()
        return instance
from rest_framework import serializers
from time_assign.models import Client
from .service import ServiceSerializer


class ClientSerializer(serializers.ModelSerializer):
    service = ServiceSerializer()

    class Meta:
        model = Client
        fields = ('id', 'service', 'user')

    def create(self, validated_data):
        return Client.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)        
        instance.save()
        return instance
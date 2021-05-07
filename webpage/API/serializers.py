from rest_framework import serializers

from ..models import *


class TopicsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Topic
        fields = "__all__"

class MessageSerializer(serializers.ModelSerializer):

    class Meta:
        model = Message
        fields = "__all__"

    def createMessage(self, validated_data):
        return Message.objects.create(**validated_data)

class MessagesSerializer(serializers.ModelSerializer):

    class Meta:
        model = Message
        fields = "__all__"

class TopicsDetailSerializer(serializers.ModelSerializer):
    messages = serializers.SerializerMethodField()
    
    class Meta:
        model = Topic
        fields = "__all__"

    @staticmethod
    def get_messages(obj):
        return MessagesSerializer(Message.objects.filter(q=obj), many=True).data

class LessonsSerializer(serializers.ModelSerializer):

    class Meta:
        model = MasterClass
        fields = "__all__"

class LotsSerializer(serializers.ModelSerializer):

    class Meta:
        model = lot
        fields = "__all__"

class LotSerializer(serializers.ModelSerializer):

    class Meta:
        model = lot
        fields = "__all__"

    def createLot(self, validated_data):
        return lot.objects.create(**validated_data)
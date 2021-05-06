from rest_framework import serializers

from ..models import MasterClass


class LessonsSerializer(serializers.ModelSerializer):

    class Meta:
        model = MasterClass
        fields = "__all__"

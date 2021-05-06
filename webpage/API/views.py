from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.generics import RetrieveUpdateAPIView
from rest_framework.permissions import AllowAny

from .serializers import *
from ..models import *

class TestAPIView(APIView):

    def get(self, request, *args, **kwargs):
        data = [{'id': 1, 'name': 'John'}, {'id': 2, "name": "Mike"}]
        return Response(data)

class GetLessons(RetrieveUpdateAPIView):
    permission_classes = (AllowAny,)
    serializer_class = LessonsSerializer

    def retrieve(self, request, *args, **kwargs):
        serializer = self.serializer_class(MasterClass.objects.all(), many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)
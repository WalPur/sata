from rest_framework import status
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.generics import RetrieveUpdateAPIView
from rest_framework.permissions import AllowAny, IsAuthenticated

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

class GetTopics(viewsets.ModelViewSet):

    queryset = Topic.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = TopicsSerializer

    action_to_serializer = {
        'retrieve': TopicsDetailSerializer,
        'list': TopicsDetailSerializer,
    }

    def get_serializer_class(self, *args, **kwargs):
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class
        )

class MessageAPIView(APIView):

    permission_classes = (AllowAny,)
    serializer_class = MessageSerializer

    def post(self, request, *args, **kwargs):
        message = request.data.get('message', {})

        serializer = self.serializer_class(data=message)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)

class LotAPIView(APIView):

    permission_classes = (AllowAny,)
    serializer_class = LotSerializer

    def post(self, request, *args, **kwargs):
        lot = request.data.get('lot', {})

        serializer = self.serializer_class(data=lot)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)

class GetLots(RetrieveUpdateAPIView):
    permission_classes = (AllowAny,)
    serializer_class = LotsSerializer

    def retrieve(self, request, *args, **kwargs):
        serializer = self.serializer_class(lot.objects.all(), many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)
from django.urls import path

from rest_framework import routers
from .views import *

router = routers.SimpleRouter()
router.register('topics', GetTopics, basename='topics')

urlpatterns = [
    path('message/', MessageAPIView.as_view()),
    path('lot/', LotAPIView.as_view()),
    path('getlot/', GetLots.as_view()),
    path('lessons/', GetLessons.as_view(), name='text')
]

urlpatterns += router.urls
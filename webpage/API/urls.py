from django.urls import path

from .views import *

urlpatterns = [
    path('test-api/', TestAPIView.as_view(), name='text')
]

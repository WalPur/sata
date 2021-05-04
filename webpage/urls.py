from django.urls import path

from .views import *

app_name = 'webpage'
urlpatterns = [
    path('', index)
]
from django.urls import path

from .views import GetLessons

urlpatterns = [
    path('lessons/', GetLessons.as_view(), name='text')
]

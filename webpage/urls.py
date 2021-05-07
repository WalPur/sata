from django.urls import path

from .views import *

app_name = 'webpage'
urlpatterns = [
    path('', index),
    path('lessons', index),
    path('chat', index),
    path('market', index),
    path('login', index),
    path('reg', index),
    path('lk', index),
    path('patch', index)
]
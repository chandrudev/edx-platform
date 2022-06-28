"""
Defines the URL routes for this app.
"""

<<<<<<< HEAD

from django.conf.urls import url

=======
from django.urls import path
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
from . import views

app_name = 'catalog'
urlpatterns = [
<<<<<<< HEAD
    url(r'^management/cache_programs/$', views.cache_programs, name='cache_programs'),
=======
    path('management/cache_programs/', views.cache_programs, name='cache_programs'),
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
]

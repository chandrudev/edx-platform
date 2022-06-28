"""
URLs for track app
"""
<<<<<<< HEAD
from django.conf.urls import url
=======
from django.urls import path
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

from . import views
from .views import segmentio

urlpatterns = [
<<<<<<< HEAD
    url(r'^event$', views.user_track),
    url(r'^segmentio/event$', segmentio.segmentio_event),
=======
    path('event', views.user_track),
    path('segmentio/event', segmentio.segmentio_event),
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
]

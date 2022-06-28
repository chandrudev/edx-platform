"""
Coverage Context Listener URLs.
"""
<<<<<<< HEAD
from django.conf.urls import url
from .views import update_context

urlpatterns = [
    url(r'update_context', update_context),
=======
from django.urls import path
from .views import update_context

urlpatterns = [
    path('update_context', update_context),
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
]

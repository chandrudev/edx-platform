"""
URLs file for the Entitlements API.
"""

<<<<<<< HEAD
from django.conf.urls import include, url

app_name = 'entitlements'
urlpatterns = [
    url(r'^v1/', include('common.djangoapps.entitlements.rest_api.v1.urls')),
=======
from django.conf.urls import include
from django.urls import path

app_name = 'entitlements'
urlpatterns = [
    path('v1/', include('common.djangoapps.entitlements.rest_api.v1.urls')),
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
]

"""
URL definitions for api access request API.
"""


<<<<<<< HEAD
from django.conf.urls import include, url

app_name = 'api_admin'
urlpatterns = [
    url(r'^v1/', include('openedx.core.djangoapps.api_admin.api.v1.urls')),
=======
from django.conf.urls import include
from django.urls import path

app_name = 'api_admin'
urlpatterns = [
    path('v1/', include('openedx.core.djangoapps.api_admin.api.v1.urls')),
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
]

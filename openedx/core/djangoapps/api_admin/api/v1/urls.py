"""
URL definitions for api access request API v1.
"""

<<<<<<< HEAD
from django.conf.urls import url

=======
from django.urls import path
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
from openedx.core.djangoapps.api_admin.api.v1 import views

app_name = 'v1'
urlpatterns = [
<<<<<<< HEAD
    url(r'^api_access_request/$', views.ApiAccessRequestView.as_view(), name='list_api_access_request'),
=======
    path('api_access_request/', views.ApiAccessRequestView.as_view(), name='list_api_access_request'),
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
]

"""
URL definitions for the course_modes API.
"""


<<<<<<< HEAD
from django.conf.urls import include, url
=======
from django.conf.urls import include
from django.urls import path
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

app_name = 'common.djangoapps.course_modes.rest_api'

urlpatterns = [
<<<<<<< HEAD
    url(r'^v1/', include('common.djangoapps.course_modes.rest_api.v1.urls', namespace='v1')),
=======
    path('v1/', include('common.djangoapps.course_modes.rest_api.v1.urls', namespace='v1')),
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
]

"""
URLs for the Studio API app
"""


<<<<<<< HEAD
from django.conf.urls import include, url
=======
from django.conf.urls import include
from django.urls import path
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

app_name = 'cms.djangoapps.api'

urlpatterns = [
<<<<<<< HEAD
    url(r'^v1/', include('cms.djangoapps.api.v1.urls', namespace='v1')),
=======
    path('v1/', include('cms.djangoapps.api.v1.urls', namespace='v1')),
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
]

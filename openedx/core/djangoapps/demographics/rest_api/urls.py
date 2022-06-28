"""
Demographics API URLs.
"""
<<<<<<< HEAD
from django.conf.urls import include, url
=======
from django.urls import path, include
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

from .v1 import urls as v1_urls

app_name = 'openedx.core.djangoapps.demographics'

urlpatterns = [
<<<<<<< HEAD
    url(r'^v1/', include(v1_urls))
=======
    path('v1/', include(v1_urls))
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
]

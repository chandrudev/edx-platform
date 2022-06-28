"""
Urls for verifying health (heartbeat) of the app.
"""

<<<<<<< HEAD

from django.conf.urls import url

from openedx.core.djangoapps.heartbeat.views import heartbeat

urlpatterns = [
    url(r'^$', heartbeat, name='heartbeat'),
=======
from django.urls import path
from openedx.core.djangoapps.heartbeat.views import heartbeat

urlpatterns = [
    path('', heartbeat, name='heartbeat'),
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
]

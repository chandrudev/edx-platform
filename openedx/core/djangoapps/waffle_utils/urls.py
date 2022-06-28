""" URL definitions for waffle utils. """
<<<<<<< HEAD

from django.conf.urls import url
from openedx.core.djangoapps.waffle_utils.views import ToggleStateView

urlpatterns = [
    url(r'^v0/state/', ToggleStateView.as_view(), name="toggle_state"),
=======
from django.urls import path
from openedx.core.djangoapps.waffle_utils.views import ToggleStateView

urlpatterns = [
    path('v0/state/', ToggleStateView.as_view(), name="toggle_state"),
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
]

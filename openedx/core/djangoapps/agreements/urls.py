"""
URLs for the Agreements API
"""

from django.conf import settings
<<<<<<< HEAD
from django.conf.urls import url
=======
from django.urls import re_path
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

from .views import IntegritySignatureView

urlpatterns = [
<<<<<<< HEAD
    url(r'^integrity_signature/{course_id}$'.format(
=======
    re_path(r'^integrity_signature/{course_id}$'.format(
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        course_id=settings.COURSE_ID_PATTERN
    ), IntegritySignatureView.as_view(), name='integrity_signature'),
]

"""
URL definitions for the course_modes v1 API.
"""


from django.conf import settings
<<<<<<< HEAD
from django.conf.urls import url

=======

from django.urls import re_path
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
from common.djangoapps.course_modes.rest_api.v1 import views

app_name = 'v1'

urlpatterns = [
<<<<<<< HEAD
    url(
=======
    re_path(
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        fr'^courses/{settings.COURSE_ID_PATTERN}/$',
        views.CourseModesView.as_view(),
        name='course_modes_list'
    ),
<<<<<<< HEAD
    url(
=======
    re_path(
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        fr'^courses/{settings.COURSE_ID_PATTERN}/(?P<mode_slug>.*)$',
        views.CourseModesDetailView.as_view(),
        name='course_modes_detail'
    ),
]

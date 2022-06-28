"""
Cohort API URLs
"""


from django.conf import settings
<<<<<<< HEAD
from django.conf.urls import url
=======
from django.urls import re_path
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

import lms.djangoapps.instructor.views.api
import openedx.core.djangoapps.course_groups.views

urlpatterns = [
<<<<<<< HEAD
    url(
=======
    re_path(
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        r'^v1/settings/{}$'.format(
            settings.COURSE_KEY_PATTERN,
        ),
        openedx.core.djangoapps.course_groups.views.CohortSettings.as_view(),
        name='cohort_settings',
    ),
<<<<<<< HEAD
    url(
=======
    re_path(
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        r'^v1/courses/{}/cohorts/(?P<cohort_id>[0-9]+)?$'.format(
            settings.COURSE_KEY_PATTERN,
        ),
        openedx.core.djangoapps.course_groups.views.CohortHandler.as_view(),
        name='cohort_handler',
    ),
<<<<<<< HEAD
    url(
=======
    re_path(
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        r'^v1/courses/{}/cohorts/(?P<cohort_id>[0-9]+)/users/(?P<username>.+)?$'.format(
            settings.COURSE_KEY_PATTERN,
        ),
        openedx.core.djangoapps.course_groups.views.CohortUsers.as_view(),
        name='cohort_users',
    ),
<<<<<<< HEAD
    url(
=======
    re_path(
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        r'^v1/courses/{}/users?$'.format(
            settings.COURSE_KEY_PATTERN,
        ),
        lms.djangoapps.instructor.views.api.CohortCSV.as_view(),
        name='cohort_users_csv',
    ),
]

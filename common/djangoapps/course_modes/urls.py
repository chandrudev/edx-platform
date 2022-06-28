"""URLs for course_mode API"""


from django.conf import settings
<<<<<<< HEAD
from django.conf.urls import url

from common.djangoapps.course_modes import views

urlpatterns = [
    url(fr'^choose/{settings.COURSE_ID_PATTERN}/$', views.ChooseModeView.as_view(), name='course_modes_choose'),
=======

from django.urls import re_path
from common.djangoapps.course_modes import views

urlpatterns = [
    re_path(fr'^choose/{settings.COURSE_ID_PATTERN}/$', views.ChooseModeView.as_view(), name='course_modes_choose'),
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
]

# Enable verified mode creation
if settings.FEATURES.get('MODE_CREATION_FOR_TESTING'):
    urlpatterns.append(
<<<<<<< HEAD
        url(fr'^create_mode/{settings.COURSE_ID_PATTERN}/$',
            views.create_mode,
            name='create_mode'),
=======
        re_path(fr'^create_mode/{settings.COURSE_ID_PATTERN}/$',
                views.create_mode,
                name='create_mode'),
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    )

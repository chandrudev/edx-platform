"""
Contains all the URLs
"""


from django.conf import settings
<<<<<<< HEAD
from django.conf.urls import url
=======
from django.urls import path, re_path
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

from openedx.core.djangoapps.courseware_api import views

urlpatterns = [
<<<<<<< HEAD
    url(fr'^course/{settings.COURSE_KEY_PATTERN}',
        views.CoursewareInformation.as_view(),
        name="courseware-api"),
    url(fr'^sequence/{settings.USAGE_KEY_PATTERN}',
        views.SequenceMetadata.as_view(),
        name="sequence-api"),
    url(fr'^resume/{settings.COURSE_KEY_PATTERN}',
        views.Resume.as_view(),
        name="resume-api"),
    url(fr'^celebration/{settings.COURSE_KEY_PATTERN}',
        views.Celebration.as_view(),
        name="celebration-api"),
=======
    re_path(fr'^course/{settings.COURSE_KEY_PATTERN}',
            views.CoursewareInformation.as_view(),
            name="courseware-api"),
    re_path(fr'^sequence/{settings.USAGE_KEY_PATTERN}',
            views.SequenceMetadata.as_view(),
            name="sequence-api"),
    re_path(fr'^resume/{settings.COURSE_KEY_PATTERN}',
            views.Resume.as_view(),
            name="resume-api"),
    re_path(fr'^celebration/{settings.COURSE_KEY_PATTERN}',
            views.Celebration.as_view(),
            name="celebration-api"),
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
]

if getattr(settings, 'PROVIDER_STATES_URL', None):
    from .tests.pacts.views import provider_state
<<<<<<< HEAD
    urlpatterns.append(url(
        r'^pact/provider_states/$',
        provider_state,
        name='provider-state-view'
    ))
=======
    urlpatterns.append(path('pact/provider_states/', provider_state,
                            name='provider-state-view'
                            ))
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

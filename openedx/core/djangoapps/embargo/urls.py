"""URLs served by the embargo app. """

<<<<<<< HEAD

from django.conf.urls import url

=======
from django.urls import path, re_path
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
from .views import CheckCourseAccessView, CourseAccessMessageView

app_name = 'embargo'
urlpatterns = [
<<<<<<< HEAD
    url(
=======
    re_path(
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        r'^blocked-message/(?P<access_point>enrollment|courseware)/(?P<message_key>.+)/$',
        CourseAccessMessageView.as_view(),
        name='blocked_message',
    ),
<<<<<<< HEAD
    url(r'^v1/course_access/$', CheckCourseAccessView.as_view(), name='v1_course_access'),
=======
    path('v1/course_access/', CheckCourseAccessView.as_view(), name='v1_course_access'),
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
]

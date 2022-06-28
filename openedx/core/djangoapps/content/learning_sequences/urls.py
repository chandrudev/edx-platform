# lint-amnesty, pylint: disable=missing-module-docstring
<<<<<<< HEAD
from django.conf.urls import url

=======

from django.urls import path
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
from .views import CourseOutlineView


urlpatterns = [
<<<<<<< HEAD
    url(
        r'^v1/course_outline/(?P<course_key_str>.+)$',
        CourseOutlineView.as_view(),
        name='course_outline',
    )
=======
    path('v1/course_outline/<path:course_key_str>', CourseOutlineView.as_view(),
         name='course_outline',
         )
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
]

"""
Course API URLs
"""


from django.conf import settings
from django.urls import include, path, re_path

<<<<<<< HEAD
from .views import CourseDetailView, CourseIdListView, CourseListView

urlpatterns = [
    path('v1/courses/', CourseListView.as_view(), name="course-list"),
    re_path(fr'^v1/courses/{settings.COURSE_KEY_PATTERN}', CourseDetailView.as_view(), name="course-detail"),
    path('v1/course_ids/', CourseIdListView.as_view(), name="course-id-list"),
    path('', include('lms.djangoapps.course_api.blocks.urls'))
]
=======
from .views import CourseDetailView, CourseIdListView

urlpatterns = [
    # path('v1/courses/', CourseListView.as_view(), name="course-list"),
    re_path(fr'^v1/courses/{settings.COURSE_KEY_PATTERN}', CourseDetailView.as_view(), name="course-detail"),
    path('v1/course_ids/', CourseIdListView.as_view(), name="course-id-list"),
    path('', include('lms.djangoapps.course_api.blocks.urls'))
]
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

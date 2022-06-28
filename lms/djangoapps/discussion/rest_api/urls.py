# pylint: skip-file
"""
Discussion API URLs
"""

<<<<<<< HEAD

=======
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
from django.conf import settings
from django.urls import include, path, re_path
from rest_framework.routers import SimpleRouter

from lms.djangoapps.discussion.rest_api.views import (
    CommentViewSet,
<<<<<<< HEAD
    CourseDiscussionRolesAPIView,
    CourseDiscussionSettingsAPIView,
    CourseTopicsView,
    CourseView,
    ReplaceUsernamesView,
    RetireUserView,
    ThreadViewSet
=======
    CourseActivityStatsView,
    CourseDiscussionRolesAPIView,
    CourseDiscussionSettingsAPIView,
    CourseTopicsView,
    CourseTopicsViewV2,
    CourseView,
    ReplaceUsernamesView,
    RetireUserView,
    ThreadViewSet,
    UploadFileView,
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
)

ROUTER = SimpleRouter()
ROUTER.register("threads", ThreadViewSet, basename="thread")
ROUTER.register("comments", CommentViewSet, basename="comment")

urlpatterns = [
    re_path(
        r"^v1/courses/{}/settings$".format(
            settings.COURSE_ID_PATTERN
        ),
        CourseDiscussionSettingsAPIView.as_view(),
        name="discussion_course_settings",
    ),
    re_path(
<<<<<<< HEAD
=======
        fr"^v1/courses/{settings.COURSE_KEY_PATTERN}/activity_stats",
        CourseActivityStatsView.as_view(),
        name="discussion_course_activity_stats",
    ),
    re_path(
        fr"^v1/courses/{settings.COURSE_ID_PATTERN}/upload$",
        UploadFileView.as_view(),
        name="upload_file",
    ),
    re_path(
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        r"^v1/courses/{}/roles/(?P<rolename>[A-Za-z0-9+ _-]+)/?$".format(
            settings.COURSE_ID_PATTERN
        ),
        CourseDiscussionRolesAPIView.as_view(),
        name="discussion_course_roles",
    ),
    re_path(
        fr"^v1/courses/{settings.COURSE_ID_PATTERN}",
        CourseView.as_view(),
        name="discussion_course"
    ),
    path('v1/accounts/retire_forum', RetireUserView.as_view(), name="retire_discussion_user"),
    path('v1/accounts/replace_username', ReplaceUsernamesView.as_view(), name="replace_discussion_username"),
    re_path(
        fr"^v1/course_topics/{settings.COURSE_ID_PATTERN}",
        CourseTopicsView.as_view(),
        name="course_topics"
    ),
<<<<<<< HEAD
=======
    re_path(
        fr"^v2/course_topics/{settings.COURSE_ID_PATTERN}",
        CourseTopicsViewV2.as_view(),
        name="course_topics_v2"
    ),
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    path('v1/', include(ROUTER.urls)),
]

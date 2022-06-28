"""
Defines URLs for course bookmarks.
"""

<<<<<<< HEAD

from django.conf.urls import url

from .views.course_bookmarks import CourseBookmarksFragmentView, CourseBookmarksView

urlpatterns = [
    url(
        r'^$',
        CourseBookmarksView.as_view(),
        name='openedx.course_bookmarks.home',
    ),
    url(
        r'^bookmarks_fragment$',
        CourseBookmarksFragmentView.as_view(),
        name='openedx.course_bookmarks.course_bookmarks_fragment_view',
    ),
=======
from django.urls import path
from .views.course_bookmarks import CourseBookmarksFragmentView, CourseBookmarksView

urlpatterns = [
    path('', CourseBookmarksView.as_view(),
         name='openedx.course_bookmarks.home',
         ),
    path('bookmarks_fragment', CourseBookmarksFragmentView.as_view(),
         name='openedx.course_bookmarks.course_bookmarks_fragment_view',
         ),
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
]

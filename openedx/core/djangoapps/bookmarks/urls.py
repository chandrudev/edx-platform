"""
URL routes for the bookmarks app.
"""


from django.conf import settings
<<<<<<< HEAD
from django.conf.urls import url
=======
from django.urls import path, re_path
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

from .views import BookmarksDetailView, BookmarksListView

urlpatterns = [
<<<<<<< HEAD
    url(
        r'^v1/bookmarks/$',
        BookmarksListView.as_view(),
        name='bookmarks'
    ),
    url(
=======
    path('v1/bookmarks/', BookmarksListView.as_view(),
         name='bookmarks'
         ),
    re_path(
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        r'^v1/bookmarks/{username},{usage_key}/$'.format(
            username=settings.USERNAME_PATTERN,
            usage_key=settings.USAGE_ID_PATTERN
        ),
        BookmarksDetailView.as_view(),
        name='bookmarks_detail'
    ),
]

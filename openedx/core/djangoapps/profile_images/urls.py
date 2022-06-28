"""
Defines the URL routes for this app.

NOTE: These views are deprecated.  These routes are superseded by
``/api/user/v1/accounts/{username}/image``, found in
``openedx.core.djangoapps.user_api.urls``.
"""
# pylint: enable=unicode-format-string  # lint-amnesty, pylint: disable=bad-option-value


from django.conf import settings
<<<<<<< HEAD
from django.conf.urls import url
=======
from django.urls import re_path
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

from .views import ProfileImageRemoveView, ProfileImageUploadView

urlpatterns = [
<<<<<<< HEAD
    url(
=======
    re_path(
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        r'^v1/' + settings.USERNAME_PATTERN + '/upload$',
        ProfileImageUploadView.as_view(),
        name="profile_image_upload"
    ),
<<<<<<< HEAD
    url(
=======
    re_path(
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        r'^v1/' + settings.USERNAME_PATTERN + '/remove$',
        ProfileImageRemoveView.as_view(),
        name="profile_image_remove"
    ),
]

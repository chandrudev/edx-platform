""" URL configuration for the third party auth API """


from django.conf import settings
<<<<<<< HEAD
from django.conf.urls import url
=======
from django.urls import path, re_path
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

from .views import ThirdPartyAuthUserStatusView, UserMappingView, UserView, UserViewV2

PROVIDER_PATTERN = r'(?P<provider_id>[\w.+-]+)(?:\:(?P<idp_slug>[\w.+-]+))?'

urlpatterns = [
<<<<<<< HEAD
    url(
=======
    re_path(
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        fr'^v0/users/{settings.USERNAME_PATTERN}$',
        UserView.as_view(),
        name='third_party_auth_users_api',
    ),
<<<<<<< HEAD
    url(r'^v0/users/', UserViewV2.as_view(), name='third_party_auth_users_api_v2'),
    url(
=======
    path('v0/users/', UserViewV2.as_view(), name='third_party_auth_users_api_v2'),
    re_path(
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        fr'^v0/providers/{PROVIDER_PATTERN}/users$',
        UserMappingView.as_view(),
        name='third_party_auth_user_mapping_api',
    ),
<<<<<<< HEAD
    url(
        r'^v0/providers/user_status$',
        ThirdPartyAuthUserStatusView.as_view(),
=======
    path(
        'v0/providers/user_status', ThirdPartyAuthUserStatusView.as_view(),
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        name='third_party_auth_user_status_api',
    ),
]

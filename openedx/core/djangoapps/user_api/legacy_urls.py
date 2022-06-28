"""
Defines the URL routes for this app.
"""
<<<<<<< HEAD
from django.conf.urls import include, url
=======
from django.urls import path, re_path, include
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
from rest_framework import routers

from . import views as user_api_views
from .accounts.settings_views import account_settings
from .models import UserPreference

USER_API_ROUTER = routers.DefaultRouter()
USER_API_ROUTER.register(r'users', user_api_views.UserViewSet)
USER_API_ROUTER.register(r'user_prefs', user_api_views.UserPreferenceViewSet)

urlpatterns = [
<<<<<<< HEAD
    url(r'^account/settings$', account_settings, name='account_settings'),
    url(r'^user_api/v1/', include(USER_API_ROUTER.urls)),
    url(
        fr'^user_api/v1/preferences/(?P<pref_key>{UserPreference.KEY_REGEX})/users/$',
        user_api_views.PreferenceUsersListView.as_view()
    ),
    url(
=======
    path('account/settings', account_settings, name='account_settings'),
    path('user_api/v1/', include(USER_API_ROUTER.urls)),
    re_path(
        fr'^user_api/v1/preferences/(?P<pref_key>{UserPreference.KEY_REGEX})/users/$',
        user_api_views.PreferenceUsersListView.as_view()
    ),
    re_path(
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        r'^user_api/v1/forum_roles/(?P<name>[a-zA-Z]+)/users/$',
        user_api_views.ForumRoleUsersListView.as_view()
    ),

<<<<<<< HEAD
    url(
        r'^user_api/v1/preferences/email_opt_in/$',
        user_api_views.UpdateEmailOptInPreference.as_view(),
        name="preferences_email_opt_in_legacy"
    ),
    url(
        r'^user_api/v1/preferences/time_zones/$',
        user_api_views.CountryTimeZoneListView.as_view(),
    ),
=======
    path('user_api/v1/preferences/email_opt_in/', user_api_views.UpdateEmailOptInPreference.as_view(),
         name="preferences_email_opt_in_legacy"
         ),
    path('user_api/v1/preferences/time_zones/', user_api_views.CountryTimeZoneListView.as_view(),
         ),
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
]

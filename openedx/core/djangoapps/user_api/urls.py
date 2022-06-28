"""
Defines the URL routes for this app.
"""


from django.conf import settings
<<<<<<< HEAD
from django.conf.urls import include, url
=======
from django.urls import include, path, re_path
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
from rest_framework import routers

from ..profile_images.views import ProfileImageView
from .accounts.views import (
    AccountDeactivationView,
    AccountRetirementPartnerReportView,
    AccountRetirementStatusView,
    AccountRetirementView,
    AccountViewSet,
    DeactivateLogoutView,
    LMSAccountRetirementView,
    NameChangeView,
    UsernameReplacementView
)
from . import views as user_api_views
from .models import UserPreference
from .preferences.views import PreferencesDetailView, PreferencesView
<<<<<<< HEAD
from .verification_api.views import IDVerificationStatusView, IDVerificationStatusDetailsView
=======
from .verification_api.views import (
    IDVerificationStatusView,
    IDVerificationStatusDetailsView,
    IDVerificationSupportView,
)
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

ME = AccountViewSet.as_view({
    'get': 'get',
})

ACCOUNT_LIST = AccountViewSet.as_view({
    'get': 'list',
})

ACCOUNT_SEARCH_EMAILS = AccountViewSet.as_view({
    'post': 'search_emails',
})

ACCOUNT_DETAIL = AccountViewSet.as_view({
    'get': 'retrieve',
    'patch': 'partial_update',
})

<<<<<<< HEAD
=======
REQUEST_NAME_CHANGE = NameChangeView.as_view({
    'post': 'create'
})

CONFIRM_NAME_CHANGE = NameChangeView.as_view({
    'post': 'confirm'
})

>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
PARTNER_REPORT = AccountRetirementPartnerReportView.as_view({
    'post': 'retirement_partner_report',
    'put': 'retirement_partner_status_create'
})

PARTNER_REPORT_CLEANUP = AccountRetirementPartnerReportView.as_view({
    'post': 'retirement_partner_cleanup'
})

RETIREMENT_QUEUE = AccountRetirementStatusView.as_view({
    'get': 'retirement_queue'
})

RETIREMENT_LIST_BY_STATUS_AND_DATE = AccountRetirementStatusView.as_view({
    'get': 'retirements_by_status_and_date'
})

RETIREMENT_RETRIEVE = AccountRetirementStatusView.as_view({
    'get': 'retrieve'
})

RETIREMENT_UPDATE = AccountRetirementStatusView.as_view({
    'patch': 'partial_update',
})

RETIREMENT_CLEANUP = AccountRetirementStatusView.as_view({
    'post': 'cleanup',
})

RETIREMENT_POST = AccountRetirementView.as_view({
    'post': 'post',
})

RETIREMENT_LMS_POST = LMSAccountRetirementView.as_view({
    'post': 'post',
})

USER_API_ROUTER = routers.DefaultRouter()
USER_API_ROUTER.register(r'users', user_api_views.UserViewSet)
USER_API_ROUTER.register(r'user_prefs', user_api_views.UserPreferenceViewSet)

urlpatterns = [
<<<<<<< HEAD
    url(
        r'^v1/me$',
        ME,
        name='own_username_api'
    ),
    url(
        r'^v1/accounts$',
        ACCOUNT_LIST,
        name='accounts_detail_api'
    ),
    url(
        r'^v1/accounts/search_emails$',
        ACCOUNT_SEARCH_EMAILS,
        name='accounts_search_emails_api'
    ),
    url(
=======
    path('v1/me', ME,
         name='own_username_api'
         ),
    path('v1/accounts', ACCOUNT_LIST,
         name='accounts_detail_api'
         ),
    path('v1/accounts/search_emails', ACCOUNT_SEARCH_EMAILS,
         name='accounts_search_emails_api'
         ),
    re_path(
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        fr'^v1/accounts/{settings.USERNAME_PATTERN}$',
        ACCOUNT_DETAIL,
        name='accounts_api'
    ),
<<<<<<< HEAD
    url(
=======
    re_path(
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        fr'^v1/accounts/{settings.USERNAME_PATTERN}/image$',
        ProfileImageView.as_view(),
        name='accounts_profile_image_api'
    ),
<<<<<<< HEAD
    url(
=======
    re_path(
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        fr'^v1/accounts/{settings.USERNAME_PATTERN}/deactivate/$',
        AccountDeactivationView.as_view(),
        name='accounts_deactivation'
    ),
<<<<<<< HEAD
    url(
        r'^v1/accounts/deactivate_logout/$',
        DeactivateLogoutView.as_view(),
        name='deactivate_logout'
    ),
    url(
        r'^v1/accounts/name_change/$',
        NameChangeView.as_view(),
        name='name_change'
    ),
    url(
=======
    path(
        'v1/accounts/deactivate_logout/', DeactivateLogoutView.as_view(),
        name='deactivate_logout'
    ),
    path(
        'v1/accounts/name_change/', REQUEST_NAME_CHANGE,
        name='request_name_change'
    ),
    re_path(
        fr'^v1/accounts/name_change/{settings.USERNAME_PATTERN}/confirm/$',
        CONFIRM_NAME_CHANGE,
        name='confirm_name_change'
    ),
    re_path(
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        fr'^v1/accounts/{settings.USERNAME_PATTERN}/verification_status/$',
        IDVerificationStatusView.as_view(),
        name='verification_status'
    ),
<<<<<<< HEAD
    url(
=======
    re_path(
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        fr'^v1/accounts/{settings.USERNAME_PATTERN}/verifications/$',
        IDVerificationStatusDetailsView.as_view(),
        name='verification_details'
    ),
<<<<<<< HEAD
    url(
=======
    re_path(
        r'^v1/accounts/verifications/(?P<attempt_id>[0-9]+)/$',
        IDVerificationSupportView.as_view(),
        name='verification_for_support'
    ),
    re_path(
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        fr'^v1/accounts/{settings.USERNAME_PATTERN}/retirement_status/$',
        RETIREMENT_RETRIEVE,
        name='accounts_retirement_retrieve'
    ),
<<<<<<< HEAD
    url(
        r'^v1/accounts/retirement_partner_report/$',
        PARTNER_REPORT,
        name='accounts_retirement_partner_report'
    ),
    url(
        r'^v1/accounts/retirement_partner_report_cleanup/$',
        PARTNER_REPORT_CLEANUP,
        name='accounts_retirement_partner_report_cleanup'
    ),
    url(
        r'^v1/accounts/retirement_queue/$',
        RETIREMENT_QUEUE,
        name='accounts_retirement_queue'
    ),
    url(
        r'^v1/accounts/retirement_cleanup/$',
        RETIREMENT_CLEANUP,
        name='accounts_retirement_cleanup'
    ),
    url(
        r'^v1/accounts/retirements_by_status_and_date/$',
        RETIREMENT_LIST_BY_STATUS_AND_DATE,
        name='accounts_retirements_by_status_and_date'
    ),
    url(
        r'^v1/accounts/retire/$',
        RETIREMENT_POST,
        name='accounts_retire'
    ),
    url(
        r'^v1/accounts/retire_misc/$',
        RETIREMENT_LMS_POST,
        name='accounts_retire_misc'
    ),
    url(
        r'^v1/accounts/update_retirement_status/$',
        RETIREMENT_UPDATE,
        name='accounts_retirement_update'
    ),
    url(
        r'^v1/accounts/replace_usernames/$',
        UsernameReplacementView.as_view(),
        name='username_replacement'
    ),
    url(
=======
    path('v1/accounts/retirement_partner_report/', PARTNER_REPORT,
         name='accounts_retirement_partner_report'
         ),
    path('v1/accounts/retirement_partner_report_cleanup/', PARTNER_REPORT_CLEANUP,
         name='accounts_retirement_partner_report_cleanup'
         ),
    path('v1/accounts/retirement_queue/', RETIREMENT_QUEUE,
         name='accounts_retirement_queue'
         ),
    path('v1/accounts/retirement_cleanup/', RETIREMENT_CLEANUP,
         name='accounts_retirement_cleanup'
         ),
    path('v1/accounts/retirements_by_status_and_date/', RETIREMENT_LIST_BY_STATUS_AND_DATE,
         name='accounts_retirements_by_status_and_date'
         ),
    path('v1/accounts/retire/', RETIREMENT_POST,
         name='accounts_retire'
         ),
    path('v1/accounts/retire_misc/', RETIREMENT_LMS_POST,
         name='accounts_retire_misc'
         ),
    path('v1/accounts/update_retirement_status/', RETIREMENT_UPDATE,
         name='accounts_retirement_update'
         ),
    path('v1/accounts/replace_usernames/', UsernameReplacementView.as_view(),
         name='username_replacement'
         ),
    re_path(
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        fr'^v1/preferences/{settings.USERNAME_PATTERN}$',
        PreferencesView.as_view(),
        name='preferences_api'
    ),
<<<<<<< HEAD
    url(
=======
    re_path(
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        fr'^v1/preferences/{settings.USERNAME_PATTERN}/(?P<preference_key>[a-zA-Z0-9_]+)$',
        PreferencesDetailView.as_view(),
        name='preferences_detail_api'
    ),
    # Moved from user_api/legacy_urls.py
<<<<<<< HEAD
    url(r'^v1/', include(USER_API_ROUTER.urls)),

    # Moved from user_api/legacy_urls.py
    url(
=======
    path('v1/', include(USER_API_ROUTER.urls)),

    # Moved from user_api/legacy_urls.py
    re_path(
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        fr'^v1/preferences/(?P<pref_key>{UserPreference.KEY_REGEX})/users/$',
        user_api_views.PreferenceUsersListView.as_view()
    ),

    # Moved from user_api/legacy_urls.py
<<<<<<< HEAD
    url(
=======
    re_path(
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        r'^v1/forum_roles/(?P<name>[a-zA-Z]+)/users/$',
        user_api_views.ForumRoleUsersListView.as_view()
    ),

    # Moved from user_api/legacy_urls.py
<<<<<<< HEAD
    url(
        r'^v1/preferences/email_opt_in/$',
        user_api_views.UpdateEmailOptInPreference.as_view(),
        name="preferences_email_opt_in"
    ),

    # Moved from user_api/legacy_urls.py
    url(
        r'^v1/preferences/time_zones/$',
        user_api_views.CountryTimeZoneListView.as_view(),
    ),
=======
    path('v1/preferences/email_opt_in/', user_api_views.UpdateEmailOptInPreference.as_view(),
         name="preferences_email_opt_in"
         ),

    # Moved from user_api/legacy_urls.py
    path('v1/preferences/time_zones/', user_api_views.CountryTimeZoneListView.as_view(),
         ),
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
]

"""Url configuration for the auth module."""

<<<<<<< HEAD
from django.conf.urls import include, url
=======
from django.conf.urls import include
from django.urls import path, re_path
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

from .views import (
    IdPRedirectView,
    inactive_user_view,
    lti_login_and_complete_view,
    post_to_custom_auth_form,
    saml_metadata_view
)

urlpatterns = [
<<<<<<< HEAD
    url(r'^auth/inactive', inactive_user_view, name="third_party_inactive_redirect"),
    url(r'^auth/custom_auth_entry', post_to_custom_auth_form, name='tpa_post_to_custom_auth_form'),
    url(r'^auth/saml/metadata.xml', saml_metadata_view),
    url(r'^auth/login/(?P<backend>lti)/$', lti_login_and_complete_view),
    url(r'^auth/idp_redirect/(?P<provider_slug>[\w-]+)', IdPRedirectView.as_view(), name="idp_redirect"),
    url(r'^auth/', include('social_django.urls', namespace='social')),
    url(r'^auth/saml/v0/', include('common.djangoapps.third_party_auth.samlproviderconfig.urls')),
    url(r'^auth/saml/v0/', include('common.djangoapps.third_party_auth.samlproviderdata.urls')),
    url(r'^auth/saml/v0/', include('common.djangoapps.third_party_auth.saml_configuration.urls')),
=======
    path('auth/inactive', inactive_user_view, name="third_party_inactive_redirect"),
    path('auth/custom_auth_entry', post_to_custom_auth_form, name='tpa_post_to_custom_auth_form'),
    re_path(r'^auth/saml/metadata.xml', saml_metadata_view),
    re_path(r'^auth/login/(?P<backend>lti)/$', lti_login_and_complete_view),
    path('auth/idp_redirect/<slug:provider_slug>', IdPRedirectView.as_view(), name="idp_redirect"),
    path('auth/', include('social_django.urls', namespace='social')),
    path('auth/saml/v0/', include('common.djangoapps.third_party_auth.samlproviderconfig.urls')),
    path('auth/saml/v0/', include('common.djangoapps.third_party_auth.samlproviderdata.urls')),
    path('auth/saml/v0/', include('common.djangoapps.third_party_auth.saml_configuration.urls')),
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
]

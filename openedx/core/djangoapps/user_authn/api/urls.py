"""
Authn API urls
"""
<<<<<<< HEAD

from django.conf.urls import url

from openedx.core.djangoapps.user_authn.api.views import MFEContextView, SendAccountActivationEmail

urlpatterns = [
    url(r'^third_party_auth_context$', MFEContextView.as_view(), name='third_party_auth_context'),
    url(r'^mfe_context$', MFEContextView.as_view(), name='mfe_context'),
    url(
        r'^send_account_activation_email$',
        SendAccountActivationEmail.as_view(),
        name='send_account_activation_email'
    ),
=======
from django.urls import path
from openedx.core.djangoapps.user_authn.api.views import (
    MFEContextView,
    SendAccountActivationEmail,
    OptionalFieldsView,
)
urlpatterns = [
    path('third_party_auth_context', MFEContextView.as_view(), name='third_party_auth_context'),
    path('mfe_context', MFEContextView.as_view(), name='mfe_context'),
    path('send_account_activation_email', SendAccountActivationEmail.as_view(),
         name='send_account_activation_email'
         ),
    path('optional_fields', OptionalFieldsView.as_view(), name='optional_fields'),
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
]

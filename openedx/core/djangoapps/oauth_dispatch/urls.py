"""
OAuth2 wrapper urls
"""


from django.conf import settings
<<<<<<< HEAD
from django.conf.urls import url
=======
from django.urls import path, re_path
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
from django.views.decorators.csrf import csrf_exempt

from . import views

urlpatterns = [
<<<<<<< HEAD
    url(r'^authorize/?$', csrf_exempt(views.AuthorizationView.as_view()), name='authorize'),
    url(r'^access_token/?$', csrf_exempt(views.AccessTokenView.as_view()), name='access_token'),
    url(r'^revoke_token/?$', csrf_exempt(views.RevokeTokenView.as_view()), name='revoke_token'),
=======
    re_path(r'^authorize/?$', csrf_exempt(views.AuthorizationView.as_view()), name='authorize'),
    re_path(r'^access_token/?$', csrf_exempt(views.AccessTokenView.as_view()), name='access_token'),
    re_path(r'^revoke_token/?$', csrf_exempt(views.RevokeTokenView.as_view()), name='revoke_token'),
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
]

if settings.FEATURES.get('ENABLE_THIRD_PARTY_AUTH'):
    urlpatterns += [
<<<<<<< HEAD
        url(
            r'^exchange_access_token/(?P<backend>[^/]+)/$',
            csrf_exempt(views.AccessTokenExchangeView.as_view()),
            name='exchange_access_token',
        ),
=======
        path('exchange_access_token/<str:backend>/', csrf_exempt(views.AccessTokenExchangeView.as_view()),
             name='exchange_access_token',
             ),
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    ]

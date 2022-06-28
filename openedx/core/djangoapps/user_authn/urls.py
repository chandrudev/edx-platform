""" URLs for User Authentication """

<<<<<<< HEAD
from django.conf.urls import include, url
=======
from django.urls import include, path
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

from .views import login, login_form

urlpatterns = [
    # TODO move contents of urls_common here once CMS no longer has its own login
<<<<<<< HEAD
    url(r'', include('openedx.core.djangoapps.user_authn.urls_common')),
    url(r'^api/', include('openedx.core.djangoapps.user_authn.api.urls')),
    url(r'^account/finish_auth$', login.finish_auth, name='finish_auth'),
=======
    path('', include('openedx.core.djangoapps.user_authn.urls_common')),
    path('api/', include('openedx.core.djangoapps.user_authn.api.urls')),
    path('account/finish_auth', login.finish_auth, name='finish_auth'),
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
]


# Backwards compatibility with old URL structure, but serve the new views
urlpatterns += [
<<<<<<< HEAD
    url(r'^login$', login_form.login_and_registration_form,
        {'initial_mode': 'login'}, name='signin_user'),
    url(r'^register$', login_form.login_and_registration_form,
        {'initial_mode': 'register'}, name='register_user'),
    url(r'^password_assistance', login_form.login_and_registration_form,
        {'initial_mode': 'reset'}, name='password_assistance'),
=======
    path('login', login_form.login_and_registration_form,
         {'initial_mode': 'login'}, name='signin_user'),
    path('register', login_form.login_and_registration_form,
         {'initial_mode': 'register'}, name='register_user'),
    path('password_assistance', login_form.login_and_registration_form,
         {'initial_mode': 'reset'}, name='password_assistance'),
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
]

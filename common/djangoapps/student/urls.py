"""
URLs for student app
"""


from django.conf import settings
<<<<<<< HEAD
from django.conf.urls import url
=======
from django.urls import path, re_path
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

from . import views

urlpatterns = [

<<<<<<< HEAD
    url(r'^email_confirm/(?P<key>[^/]*)$', views.confirm_email_change, name='confirm_email_change'),

    url(r'^activate/(?P<key>[^/]*)$', views.activate_account, name="activate"),

    url(r'^accounts/disable_account_ajax$', views.disable_account_ajax, name="disable_account_ajax"),
    url(r'^accounts/manage_user_standing', views.manage_user_standing, name='manage_user_standing'),

    url(r'^change_email_settings$', views.change_email_settings, name='change_email_settings'),

    url(fr'^course_run/{settings.COURSE_ID_PATTERN}/refund_status$',
        views.course_run_refund_status,
        name="course_run_refund_status"),

    url(
=======
    re_path(r'^email_confirm/(?P<key>[^/]*)$', views.confirm_email_change, name='confirm_email_change'),

    re_path(r'^activate/(?P<key>[^/]*)$', views.activate_account, name="activate"),

    path('accounts/disable_account_ajax', views.disable_account_ajax, name="disable_account_ajax"),
    path('accounts/manage_user_standing', views.manage_user_standing, name='manage_user_standing'),

    path('api/change_email_settings', views.change_email_settings, name='change_email_settings'),

    re_path(fr'^course_run/{settings.COURSE_ID_PATTERN}/refund_status$',
            views.course_run_refund_status,
            name="course_run_refund_status"),

    re_path(
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        r'^activate_secondary_email/(?P<key>[^/]*)$',
        views.activate_secondary_email,
        name='activate_secondary_email'
    ),
<<<<<<< HEAD

=======
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
]

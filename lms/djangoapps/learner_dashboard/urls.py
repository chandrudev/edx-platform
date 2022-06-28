"""Learner dashboard URL routing configuration"""

<<<<<<< HEAD

=======
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
from django.urls import path, re_path

from lms.djangoapps.learner_dashboard import programs, views

urlpatterns = [
    path('programs/', views.program_listing, name='program_listing_view'),
    re_path(r'^programs/(?P<program_uuid>[0-9a-f-]+)/$', views.program_details, name='program_details_view'),
<<<<<<< HEAD
=======
    re_path(r'^programs/(?P<program_uuid>[0-9a-f-]+)/discussion/$', views.ProgramDiscussionIframeView.as_view(),
            name='program_discussion'),
    re_path(r'^programs/(?P<program_uuid>[0-9a-f-]+)/live/$', views.ProgramLiveIframeView.as_view(),
            name='program_live'),
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    path('programs_fragment/', programs.ProgramsFragmentView.as_view(), name='program_listing_fragment_view'),
    re_path(r'^programs/(?P<program_uuid>[0-9a-f-]+)/details_fragment/$', programs.ProgramDetailsFragmentView.as_view(),
            name='program_details_fragment_view'),
]

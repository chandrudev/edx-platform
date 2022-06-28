"""
Defines URLs for announcements in the LMS.
"""
<<<<<<< HEAD


from django.conf.urls import url
from django.contrib.auth.decorators import login_required
=======
from django.contrib.auth.decorators import login_required
from django.urls import path
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

from .views import AnnouncementsJSONView

urlpatterns = [
<<<<<<< HEAD
    url(
        r'^page/(?P<page>\d+)$',
        login_required(AnnouncementsJSONView.as_view()),
        name='page',
    ),
=======
    path('page/<int:page>', login_required(AnnouncementsJSONView.as_view()),
         name='page',
         ),
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
]

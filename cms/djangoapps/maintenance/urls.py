"""
URLs for the maintenance app.
"""

<<<<<<< HEAD

from django.conf.urls import url
=======
from django.urls import path, re_path
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

from .views import (
    AnnouncementCreateView,
    AnnouncementDeleteView,
    AnnouncementEditView,
    AnnouncementIndexView,
    ForcePublishCourseView,
    MaintenanceIndexView
)

app_name = 'cms.djangoapps.maintenance'

urlpatterns = [
<<<<<<< HEAD
    url(r'^$', MaintenanceIndexView.as_view(), name='maintenance_index'),
    url(r'^force_publish_course/?$', ForcePublishCourseView.as_view(), name='force_publish_course'),
    url(r'^announcements/(?P<page>\d+)?$', AnnouncementIndexView.as_view(), name='announcement_index'),
    url(r'^announcements/create$', AnnouncementCreateView.as_view(), name='announcement_create'),
    url(r'^announcements/edit/(?P<pk>\d+)?$', AnnouncementEditView.as_view(), name='announcement_edit'),
    url(r'^announcements/delete/(?P<pk>\d+)$', AnnouncementDeleteView.as_view(), name='announcement_delete'),
=======
    path('', MaintenanceIndexView.as_view(), name='maintenance_index'),
    re_path(r'^force_publish_course/?$', ForcePublishCourseView.as_view(), name='force_publish_course'),
    re_path(r'^announcements/(?P<page>\d+)?$', AnnouncementIndexView.as_view(), name='announcement_index'),
    path('announcements/create', AnnouncementCreateView.as_view(), name='announcement_create'),
    re_path(r'^announcements/edit/(?P<pk>\d+)?$', AnnouncementEditView.as_view(), name='announcement_edit'),
    path('announcements/delete/<int:pk>', AnnouncementDeleteView.as_view(), name='announcement_delete'),
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
]

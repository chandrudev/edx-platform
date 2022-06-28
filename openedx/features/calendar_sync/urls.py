"""
Defines URLs for Calendar Sync.
"""

<<<<<<< HEAD

from django.conf.urls import url

from .views.calendar_sync import CalendarSyncView

urlpatterns = [
    url(
        r'^calendar_sync$',
        CalendarSyncView.as_view(),
        name='openedx.calendar_sync',
    ),
=======
from django.urls import path
from .views.calendar_sync import CalendarSyncView

urlpatterns = [
    path('calendar_sync', CalendarSyncView.as_view(),
         name='openedx.calendar_sync',
         ),
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
]

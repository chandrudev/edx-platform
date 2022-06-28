"""
URL Routes for this app.
"""
<<<<<<< HEAD
from django.conf.urls import url
=======
from django.urls import path
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
from .views import DemographicsStatusView


urlpatterns = [
<<<<<<< HEAD
    url(
        r'^demographics/status/$',
        DemographicsStatusView.as_view(),
        name='demographics_status'
    ),
=======
    path('demographics/status/', DemographicsStatusView.as_view(),
         name='demographics_status'
         ),
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
]

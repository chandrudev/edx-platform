"""
Contains all the URLs for the Dark Language Support App
"""

<<<<<<< HEAD

from django.conf.urls import url

=======
from django.urls import path
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
from openedx.core.djangoapps.dark_lang import views

app_name = 'dark_lang'
urlpatterns = [
<<<<<<< HEAD
    url(r'^$', views.PreviewLanguageFragmentView.as_view(), name='preview_lang'),
=======
    path('', views.PreviewLanguageFragmentView.as_view(), name='preview_lang'),
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
]

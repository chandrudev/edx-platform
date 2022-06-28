"""
Studio URL configuration for openedx-olx-rest-api.
"""
<<<<<<< HEAD
from django.conf.urls import include, url
=======
from django.urls import path, include
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

from . import views

urlpatterns = [
<<<<<<< HEAD
    url(r'^api/olx-export/v1/', include([
        url(r'xblock/(?P<usage_key_str>[^/]+)/$', views.get_block_olx),
        # Get a static file from an XBlock that's not part of contentstore/GridFS
        url(r'xblock-export-file/(?P<usage_key_str>[^/]+)/(?P<path>.+)$', views.get_block_exportfs_file),
=======
    path('api/olx-export/v1/', include([
        path('xblock/<str:usage_key_str>/', views.get_block_olx),
        # Get a static file from an XBlock that's not part of contentstore/GridFS
        path('xblock-export-file/<str:usage_key_str>/<path:path>', views.get_block_exportfs_file),
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    ])),
]

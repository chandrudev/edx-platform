"""
URLs for the V1 of the Entitlements API.
"""

<<<<<<< HEAD
from django.conf.urls import include, url
from rest_framework.routers import DefaultRouter

=======
from django.conf.urls import include
from rest_framework.routers import DefaultRouter

from django.urls import path, re_path
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
from .views import EntitlementEnrollmentViewSet, EntitlementViewSet

router = DefaultRouter()
router.register(r'entitlements', EntitlementViewSet, basename='entitlements')

ENROLLMENTS_VIEW = EntitlementEnrollmentViewSet.as_view({
    'post': 'create',
    'delete': 'destroy',
})

app_name = 'v1'
urlpatterns = [
<<<<<<< HEAD
    url(r'', include(router.urls)),
    url(
=======
    path('', include(router.urls)),
    re_path(
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        fr'entitlements/(?P<uuid>{EntitlementViewSet.ENTITLEMENT_UUID4_REGEX})/enrollments$',
        ENROLLMENTS_VIEW,
        name='enrollments'
    )
]

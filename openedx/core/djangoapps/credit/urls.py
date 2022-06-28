"""
URLs for the credit app.
"""


<<<<<<< HEAD
from django.conf.urls import include, url
=======
from django.urls import include, path, re_path
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

from openedx.core.djangoapps.credit import models, routers, views

PROVIDER_ID_PATTERN = fr'(?P<provider_id>{models.CREDIT_PROVIDER_ID_REGEX})'

PROVIDER_URLS = [
<<<<<<< HEAD
    url(r'^request/$', views.CreditProviderRequestCreateView.as_view(), name='create_request'),
    url(r'^callback/?$', views.CreditProviderCallbackView.as_view(), name='provider_callback'),
]

V1_URLS = [
    url(fr'^providers/{PROVIDER_ID_PATTERN}/', include(PROVIDER_URLS)),
    url(r'^eligibility/$', views.CreditEligibilityView.as_view(), name='eligibility_details'),
=======
    path('request/', views.CreditProviderRequestCreateView.as_view(), name='create_request'),
    re_path(r'^callback/?$', views.CreditProviderCallbackView.as_view(), name='provider_callback'),
]

V1_URLS = [
    re_path(fr'^providers/{PROVIDER_ID_PATTERN}/', include(PROVIDER_URLS)),
    path('eligibility/', views.CreditEligibilityView.as_view(), name='eligibility_details'),
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
]

router = routers.SimpleRouter()  # pylint: disable=invalid-name
router.register(r'courses', views.CreditCourseViewSet)
router.register(r'providers', views.CreditProviderViewSet)
V1_URLS += router.urls

app_name = 'credit'
urlpatterns = [
<<<<<<< HEAD
    url(r'^v1/', include(V1_URLS)),
=======
    path('v1/', include(V1_URLS)),
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
]

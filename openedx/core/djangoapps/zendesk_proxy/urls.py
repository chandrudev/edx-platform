"""
Map urls to the relevant view handlers
"""

<<<<<<< HEAD

from django.conf.urls import url

=======
from django.urls import path
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
from openedx.core.djangoapps.zendesk_proxy.v0.views import ZendeskPassthroughView as v0_view
from openedx.core.djangoapps.zendesk_proxy.v1.views import ZendeskPassthroughView as v1_view

urlpatterns = [
<<<<<<< HEAD
    url(r'^v0$', v0_view.as_view(), name='zendesk_proxy_v0'),
    url(r'^v1$', v1_view.as_view(), name='zendesk_proxy_v1'),
=======
    path('v0', v0_view.as_view(), name='zendesk_proxy_v0'),
    path('v1', v1_view.as_view(), name='zendesk_proxy_v1'),
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
]

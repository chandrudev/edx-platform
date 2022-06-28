""" Commerce app tests package. """


from unittest import mock
<<<<<<< HEAD
=======
from urllib.parse import urljoin
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

import httpretty
from django.conf import settings
from django.test import TestCase
from freezegun import freeze_time

from common.djangoapps.student.tests.factories import UserFactory
<<<<<<< HEAD
from openedx.core.djangoapps.commerce.utils import ecommerce_api_client
=======
from openedx.core.djangoapps.commerce.utils import get_ecommerce_api_base_url, get_ecommerce_api_client
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
from openedx.core.djangoapps.oauth_dispatch.jwt import create_jwt_for_user

JSON = 'application/json'
TEST_PUBLIC_URL_ROOT = 'http://www.example.com'
TEST_API_URL = 'http://www-internal.example.com/api'
TEST_BASKET_ID = 7
TEST_ORDER_NUMBER = '100004'
TEST_PAYMENT_DATA = {
    'payment_processor_name': 'test-processor',
    'payment_form_data': {},
    'payment_page_url': 'http://example.com/pay',
}


class EdxRestApiClientTest(TestCase):
<<<<<<< HEAD
    """ Tests to ensure the client is initialized properly. """

=======
    """
    Tests to ensure the client is initialized properly.
    """
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    SCOPES = [
        'user_id',
        'email',
        'profile'
    ]

    def setUp(self):
        super().setUp()
        self.user = UserFactory()
<<<<<<< HEAD
=======
        self.base_url = get_ecommerce_api_base_url()
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

    @httpretty.activate
    def test_tracking_context(self):
        """
<<<<<<< HEAD
        Ensure the tracking context is set up in the api client correctly and
        automatically.
=======
        Ensure the tracking context is set up in the api client correctly and automatically.
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        """
        with freeze_time('2015-7-2'):
            # fake an E-Commerce API request.
            httpretty.register_uri(
                httpretty.POST,
<<<<<<< HEAD
                '{}/baskets/1/'.format(settings.ECOMMERCE_API_URL.strip('/')),
=======
                f"{settings.ECOMMERCE_API_URL.strip('/')}/baskets/1/",
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
                status=200, body='{}',
                adding_headers={'Content-Type': JSON}
            )

            mock_tracker = mock.Mock()
            mock_tracker.resolve_context = mock.Mock(return_value={'ip': '127.0.0.1'})
            with mock.patch('openedx.core.djangoapps.commerce.utils.tracker.get_tracker', return_value=mock_tracker):
<<<<<<< HEAD
                ecommerce_api_client(self.user).baskets(1).post()
=======
                api_url = urljoin(f"{self.base_url}/", "baskets/1/")
                get_ecommerce_api_client(self.user).post(api_url)
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

            # Verify the JWT includes the tracking context for the user
            actual_header = httpretty.last_request().headers['Authorization']

            claims = {
                'tracking_context': {
                    'lms_user_id': self.user.id,
                    'lms_ip': '127.0.0.1',
                }
            }
            expected_jwt = create_jwt_for_user(self.user, additional_claims=claims, scopes=self.SCOPES)
            expected_header = f'JWT {expected_jwt}'
            assert actual_header == expected_header

    @httpretty.activate
    def test_client_unicode(self):
        """
<<<<<<< HEAD
        The client should handle json responses properly when they contain
        unicode character data.
=======
        The client should handle json responses properly when they contain unicode character data.
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

        Regression test for ECOM-1606.
        """
        expected_content = '{"result": "Préparatoire"}'
        httpretty.register_uri(
            httpretty.GET,
<<<<<<< HEAD
            '{}/baskets/1/order/'.format(settings.ECOMMERCE_API_URL.strip('/')),
            status=200, body=expected_content,
            adding_headers={'Content-Type': JSON},
        )
        actual_object = ecommerce_api_client(self.user).baskets(1).order.get()
=======
            f"{settings.ECOMMERCE_API_URL.strip('/')}/baskets/1/order/",
            status=200, body=expected_content,
            adding_headers={'Content-Type': JSON},
        )
        api_url = urljoin(f"{self.base_url}/", "baskets/1/order/")
        actual_object = get_ecommerce_api_client(self.user).get(api_url).json()
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        assert actual_object == {'result': 'Préparatoire'}

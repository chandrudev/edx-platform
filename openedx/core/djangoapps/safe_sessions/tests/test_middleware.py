"""
Unit tests for SafeSessionMiddleware
"""

<<<<<<< HEAD
from unittest.mock import patch

import ddt

=======
from unittest.mock import call, patch, MagicMock

import ddt
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
from crum import set_current_request
from django.conf import settings
from django.contrib.auth import SESSION_KEY
from django.contrib.auth.models import AnonymousUser
from django.http import HttpResponse, HttpResponseRedirect, SimpleCookie
from django.test import TestCase
from django.test.utils import override_settings

<<<<<<< HEAD
from openedx.core.djangolib.testing.utils import get_mock_request
from common.djangoapps.student.tests.factories import UserFactory

from ..middleware import SafeCookieData, SafeSessionMiddleware, log_request_user_changes, mark_user_change_as_expected
=======
from openedx.core.djangolib.testing.utils import get_mock_request, CacheIsolationTestCase
from common.djangoapps.student.tests.factories import UserFactory

from ..middleware import (
    SafeCookieData,
    SafeSessionMiddleware,
    mark_user_change_as_expected,
    obscure_token,
    track_request_user_changes
)
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
from .test_utils import TestSafeSessionsLogMixin


class TestSafeSessionProcessRequest(TestSafeSessionsLogMixin, TestCase):
    """
    Test class for SafeSessionMiddleware.process_request
    """

    def setUp(self):
        super().setUp()
        self.user = UserFactory.create()
        self.addCleanup(set_current_request, None)
        self.request = get_mock_request()

    def assert_response(self, safe_cookie_data=None, success=True):
        """
        Calls SafeSessionMiddleware.process_request and verifies
        the response.

        Arguments:
            safe_cookie_data - If provided, it is serialized and
              stored in the request's cookies.
            success - If True, verifies a successful response.
              Else, verifies a failed response with an HTTP redirect.
        """
        if safe_cookie_data:
            self.request.COOKIES[settings.SESSION_COOKIE_NAME] = str(safe_cookie_data)
        response = SafeSessionMiddleware().process_request(self.request)
        if success:
            assert response is None
            assert getattr(self.request, 'need_to_delete_cookie', None) is None
        else:
            assert response.status_code == HttpResponseRedirect.status_code
            assert self.request.need_to_delete_cookie

    def assert_no_session(self):
        """
        Asserts that a session object is *not* set on the request.
        """
        assert getattr(self.request, 'session', None) is None

    def assert_no_user_in_session(self):
        """
        Asserts that a user object is *not* set on the request's session.
        """
        assert self.request.session.get(SESSION_KEY) is None

    def assert_user_in_session(self):
        """
        Asserts that a user object *is* set on the request's session.
        """
        assert SafeSessionMiddleware.get_user_id_from_session(self.request) == self.user.id

    @patch("openedx.core.djangoapps.safe_sessions.middleware.LOG_REQUEST_USER_CHANGES", False)
<<<<<<< HEAD
    @patch("openedx.core.djangoapps.safe_sessions.middleware.log_request_user_changes")
=======
    @patch("openedx.core.djangoapps.safe_sessions.middleware.track_request_user_changes")
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    def test_success(self, mock_log_request_user_changes):
        self.client.login(username=self.user.username, password='test')
        session_id = self.client.session.session_key
        safe_cookie_data = SafeCookieData.create(session_id, self.user.id)

        # pre-verify steps 3, 4, 5
        assert getattr(self.request, 'session', None) is None
        assert getattr(self.request, 'safe_cookie_verified_user_id', None) is None

        # verify step 1: safe cookie data is parsed
        self.assert_response(safe_cookie_data)
        self.assert_user_in_session()

        # verify step 2: cookie value is replaced with parsed session_id
        assert self.request.COOKIES[settings.SESSION_COOKIE_NAME] == session_id

        # verify step 3: session set in request
        assert self.request.session is not None

        # verify steps 4, 5: user_id stored for later verification
        assert self.request.safe_cookie_verified_user_id == self.user.id

        # verify extra request_user_logging not called.
        assert not mock_log_request_user_changes.called

    @patch("openedx.core.djangoapps.safe_sessions.middleware.LOG_REQUEST_USER_CHANGES", True)
<<<<<<< HEAD
    @patch("openedx.core.djangoapps.safe_sessions.middleware.log_request_user_changes")
=======
    @patch("openedx.core.djangoapps.safe_sessions.middleware.track_request_user_changes")
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    def test_log_request_user_on(self, mock_log_request_user_changes):
        self.client.login(username=self.user.username, password='test')
        session_id = self.client.session.session_key
        safe_cookie_data = SafeCookieData.create(session_id, self.user.id)

        self.assert_response(safe_cookie_data)
        assert mock_log_request_user_changes.called

    def test_success_no_cookies(self):
        self.assert_response()
        self.assert_no_user_in_session()

    def test_success_no_session(self):
        safe_cookie_data = SafeCookieData.create('no_such_session_id', self.user.id)
        self.assert_response(safe_cookie_data)
        self.assert_no_user_in_session()

    def test_success_no_session_and_user(self):
        safe_cookie_data = SafeCookieData.create('no_such_session_id', 'no_such_user')
        self.assert_response(safe_cookie_data)
        self.assert_no_user_in_session()

    def test_parse_error_at_step_1(self):
<<<<<<< HEAD
=======
        self.request.META['HTTP_ACCEPT'] = 'text/html'
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        with self.assert_parse_error():
            self.assert_response('not-a-safe-cookie', success=False)
        self.assert_no_session()

    def test_invalid_user_at_step_4(self):
        self.client.login(username=self.user.username, password='test')
        safe_cookie_data = SafeCookieData.create(self.client.session.session_key, 'no_such_user')
<<<<<<< HEAD
=======
        self.request.META['HTTP_ACCEPT'] = 'text/html'
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        with self.assert_incorrect_user_logged():
            self.assert_response(safe_cookie_data, success=False)
        self.assert_user_in_session()


@ddt.ddt
class TestSafeSessionProcessResponse(TestSafeSessionsLogMixin, TestCase):
    """
    Test class for SafeSessionMiddleware.process_response
    """

    def setUp(self):
        super().setUp()
        self.user = UserFactory.create()
        self.addCleanup(set_current_request, None)
        self.request = get_mock_request()
        self.request.session = {}
        self.client.response = HttpResponse()
        self.client.response.cookies = SimpleCookie()

    def assert_response(self, set_request_user=False, set_session_cookie=False):
        """
        Calls SafeSessionMiddleware.process_response and verifies
        the response.

        Arguments:
            set_request_user - If True, the user is set on the request
                object.
            set_session_cookie - If True, a session_id is set in the
                session cookie in the response.
        """
        if set_request_user:
            self.request.user = self.user
            SafeSessionMiddleware.set_user_id_in_session(self.request, self.user)
        if set_session_cookie:
            self.client.response.cookies[settings.SESSION_COOKIE_NAME] = "some_session_id"

        response = SafeSessionMiddleware().process_response(self.request, self.client.response)
        assert response.status_code == 200

    def assert_response_with_delete_cookie(
            self,
            expect_delete_called=True,
            set_request_user=False,
            set_session_cookie=False,
    ):
        """
        Calls SafeSessionMiddleware.process_response and verifies
        the response, while expecting the cookie to be deleted if
        expect_delete_called is True.

        See assert_response for information on the other
        parameters.
        """
<<<<<<< HEAD
        with patch('django.http.HttpResponse.set_cookie') as mock_delete_cookie:
            self.assert_response(set_request_user=set_request_user, set_session_cookie=set_session_cookie)
            assert mock_delete_cookie.called == expect_delete_called
=======
        with patch('django.http.HttpResponse.delete_cookie') as mock_delete_cookie:
            self.assert_response(set_request_user=set_request_user, set_session_cookie=set_session_cookie)
            assert {'sessionid', 'edx-jwt-cookie-header-payload'} \
                <= {call.args[0] for call in mock_delete_cookie.call_args_list}
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

    def test_success(self):
        with self.assert_not_logged():
            self.assert_response(set_request_user=True, set_session_cookie=True)

<<<<<<< HEAD
=======
    # error case is tested in TestSafeSessionMiddleware since it requires more setup
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    def test_confirm_user_at_step_2(self):
        self.request.safe_cookie_verified_user_id = self.user.id
        with self.assert_not_logged():
            self.assert_response(set_request_user=True, set_session_cookie=True)

<<<<<<< HEAD
    def test_different_user_at_step_2_error(self):
        self.request.safe_cookie_verified_user_id = "different_user"

        with self.assert_logged_for_request_user_mismatch("different_user", self.user.id, 'warning', self.request.path):
            self.assert_response(set_request_user=True, set_session_cookie=True)

        with self.assert_logged_for_session_user_mismatch("different_user", self.user.id, self.request.path):
            self.assert_response(set_request_user=True, set_session_cookie=True)

    def test_anonymous_user(self):
        self.request.safe_cookie_verified_user_id = self.user.id
        self.request.user = AnonymousUser()
        self.request.session[SESSION_KEY] = self.user.id
        with self.assert_no_error_logged():
=======
    def test_anonymous_user(self):
        self.request.safe_cookie_verified_user_id = self.user.id
        self.request.safe_cookie_verified_session_id = '1'
        self.request.user = AnonymousUser()
        self.request.session[SESSION_KEY] = self.user.id
        with self.assert_no_warning_logged():
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
            self.assert_response(set_request_user=False, set_session_cookie=True)

    def test_update_cookie_data_at_step_3(self):
        self.assert_response(set_request_user=True, set_session_cookie=True)

        serialized_cookie_data = self.client.response.cookies[settings.SESSION_COOKIE_NAME].value
        safe_cookie_data = SafeCookieData.parse(serialized_cookie_data)
        assert safe_cookie_data.version == SafeCookieData.CURRENT_VERSION
        assert safe_cookie_data.session_id == 'some_session_id'
        assert safe_cookie_data.verify(self.user.id)

    def test_cant_update_cookie_at_step_3_error(self):
        self.client.response.cookies[settings.SESSION_COOKIE_NAME] = None
        with self.assert_invalid_session_id():
            self.assert_response_with_delete_cookie(set_request_user=True)

    @ddt.data(True, False)
    def test_deletion_of_cookies_at_step_4(self, set_request_user):
        self.request.need_to_delete_cookie = True
        self.assert_response_with_delete_cookie(set_session_cookie=True, set_request_user=set_request_user)

    def test_deletion_of_no_cookies_at_step_4(self):
        self.request.need_to_delete_cookie = True
        # delete_cookies is called even if there are no cookies set
        self.assert_response_with_delete_cookie()


@ddt.ddt
<<<<<<< HEAD
class TestSafeSessionMiddleware(TestSafeSessionsLogMixin, TestCase):
=======
class TestSafeSessionMiddleware(TestSafeSessionsLogMixin, CacheIsolationTestCase):
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    """
    Test class for SafeSessionMiddleware, testing both
    process_request and process_response.
    """

    def setUp(self):
        super().setUp()
        self.user = UserFactory.create()
        self.addCleanup(set_current_request, None)
        self.request = get_mock_request()
        self.client.response = HttpResponse()
        self.client.response.cookies = SimpleCookie()

    def cookies_from_request_to_response(self):
        """
        Transfers the cookies from the request object to the response
        object.
        """
        if self.request.COOKIES.get(settings.SESSION_COOKIE_NAME):
            self.client.response.cookies[settings.SESSION_COOKIE_NAME] = self.request.COOKIES[
                settings.SESSION_COOKIE_NAME
            ]

    def set_up_for_success(self):
        """
        Set up request for success path -- everything up until process_response().
        """
        self.client.login(username=self.user.username, password='test')
<<<<<<< HEAD
        self.request.user = self.user
=======
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

        session_id = self.client.session.session_key
        safe_cookie_data = SafeCookieData.create(session_id, self.user.id)
        self.request.COOKIES[settings.SESSION_COOKIE_NAME] = str(safe_cookie_data)

        with self.assert_not_logged():
            response = SafeSessionMiddleware().process_request(self.request)
<<<<<<< HEAD
=======
            # Note: setting the user here is later than it really happens, but it enables a
            #   semi-accurate user change tracking. The only issue is that it changes from
            #   None to user, rather than being logged as the first time request.user is set,
            #   as actually happens in Production.
            self.request.user = self.user
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        assert response is None

        assert self.request.safe_cookie_verified_user_id == self.user.id
        self.cookies_from_request_to_response()

    def verify_success(self):
        """
        Verifies success path.
        """
        self.set_up_for_success()

        with self.assert_not_logged():
            response = SafeSessionMiddleware().process_response(self.request, self.client.response)
        assert response.status_code == 200

    def test_success(self):
        self.verify_success()

    def test_success_from_mobile_web_view(self):
        self.request.path = '/xblock/block-v1:org+course+run+type@html+block@block_id'
        self.verify_success()

    @override_settings(MOBILE_APP_USER_AGENT_REGEXES=[r'open edX Mobile App'])
    def test_success_from_mobile_app(self):
        self.request.META = {'HTTP_USER_AGENT': 'open edX Mobile App Version 2.1'}
        self.verify_success()

    def verify_error(self, expected_response_status):
        """
        Verifies error path.
        """
        self.request.COOKIES[settings.SESSION_COOKIE_NAME] = 'not-a-safe-cookie'
<<<<<<< HEAD
=======
        self.request.session = self.client.session
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

        with self.assert_parse_error():
            request_response = SafeSessionMiddleware().process_request(self.request)
            assert request_response.status_code == expected_response_status

        assert self.request.need_to_delete_cookie
        self.cookies_from_request_to_response()

<<<<<<< HEAD
        with patch('django.http.HttpResponse.set_cookie') as mock_delete_cookie:
            SafeSessionMiddleware().process_response(self.request, self.client.response)
            assert mock_delete_cookie.called

    def test_error(self):
        self.verify_error(302)

=======
        with patch('django.http.HttpResponse.delete_cookie') as mock_delete_cookie:
            SafeSessionMiddleware().process_response(self.request, self.client.response)
            assert {'sessionid', 'edx-jwt-cookie-header-payload'} \
                <= {call.args[0] for call in mock_delete_cookie.call_args_list}

    def test_error(self):
        self.request.META['HTTP_ACCEPT'] = 'text/html'
        self.verify_error(302)

    @ddt.data(['text/html', 302], ['', 401])
    @ddt.unpack
    def test_error_with_http_accept(self, http_accept, expected_response):
        self.request.META['HTTP_ACCEPT'] = http_accept
        self.verify_error(expected_response)

>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    @override_settings(MOBILE_APP_USER_AGENT_REGEXES=[r'open edX Mobile App'])
    def test_error_from_mobile_app(self):
        self.request.META = {'HTTP_USER_AGENT': 'open edX Mobile App Version 2.1'}
        self.verify_error(401)

<<<<<<< HEAD
    def test_warn_on_user_change(self):
        """
        Verifies that warnings are emitted and custom attributes set if
=======
    @override_settings(ENFORCE_SAFE_SESSIONS=False)
    def test_warn_on_user_change_before_response(self):
        """
        Verifies that when enforcement disabled, warnings are emitted and custom attributes set if
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        the user changes unexpectedly between request and response.
        """
        self.set_up_for_success()

        # But then user changes unexpectedly
        self.request.user = UserFactory.create()

<<<<<<< HEAD
        with self.assert_logged_for_request_user_mismatch(self.user.id, self.request.user.id, 'warning', '/'):
            with patch('openedx.core.djangoapps.safe_sessions.middleware.set_custom_attribute') as mock_attr:
                response = SafeSessionMiddleware().process_response(self.request, self.client.response)
        assert response.status_code == 200
        mock_attr.assert_called_with("safe_sessions.user_mismatch", "request-response-mismatch")
=======
        with self.assert_logged_for_request_user_mismatch(self.user.id, self.request.user.id, 'warning', '/', False):
            with patch('openedx.core.djangoapps.safe_sessions.middleware.set_custom_attribute') as mock_attr:
                response = SafeSessionMiddleware().process_response(self.request, self.client.response)
        assert response.status_code == 200
        set_attr_call_args = [call.args for call in mock_attr.call_args_list]
        assert ("safe_sessions.user_mismatch", "request-response-mismatch") in set_attr_call_args

    def test_enforce_on_user_change_before_response(self):
        """
        Copy of test_warn_on_user_change_before_response but with enforcement enabled (default).
        The differences should be the status code and the session deletion.
        """
        self.set_up_for_success()

        assert SafeSessionMiddleware.get_user_id_from_session(self.request) is not None

        # But then user changes unexpectedly
        self.request.user = UserFactory.create()

        with self.assert_logged_for_request_user_mismatch(self.user.id, self.request.user.id, 'warning', '/', False):
            with patch('openedx.core.djangoapps.safe_sessions.middleware.set_custom_attribute') as mock_attr:
                response = SafeSessionMiddleware().process_response(self.request, self.client.response)
        assert response.status_code == 401
        assert SafeSessionMiddleware.get_user_id_from_session(self.request) is None  # session cleared
        set_attr_call_args = [call.args for call in mock_attr.call_args_list]
        assert ("safe_sessions.user_mismatch", "request-response-mismatch") in set_attr_call_args

    @override_settings(ENFORCE_SAFE_SESSIONS=False)
    def test_warn_on_user_change_from_session(self):
        """
        Verifies that warnings are emitted and custom attributes set if
        the user in the request does not match the user in the session.
        """
        self.set_up_for_success()
        different_user = UserFactory()
        SafeSessionMiddleware.set_user_id_in_session(self.request, different_user)
        with self.assert_logged_for_session_user_mismatch(self.user.id, different_user.id, self.request.path,
                                                          False):
            with patch('openedx.core.djangoapps.safe_sessions.middleware.set_custom_attribute') as mock_attr:
                response = SafeSessionMiddleware().process_response(self.request, self.client.response)
        assert response.status_code == 200
        set_attr_call_args = [call.args for call in mock_attr.call_args_list]
        assert ("safe_sessions.user_mismatch", "request-session-mismatch") in set_attr_call_args

    @override_settings(ENFORCE_SAFE_SESSIONS=False)
    def test_warn_on_user_change_in_both(self):
        """
        Verifies that warnings are emitted and custom attributes set if
        the user in the initial request does not match the user at response time or the user in the session.
        """
        self.set_up_for_success()
        different_user = UserFactory()
        SafeSessionMiddleware.set_user_id_in_session(self.request, different_user)
        self.request.user = UserFactory.create()
        with self.assert_logged_for_both_mismatch(self.user.id, different_user.id,
                                                  self.request.user.id, self.request.path, False):
            with patch('openedx.core.djangoapps.safe_sessions.middleware.set_custom_attribute') as mock_attr:
                response = SafeSessionMiddleware().process_response(self.request, self.client.response)
        assert response.status_code == 200
        set_attr_call_args = [call.args for call in mock_attr.call_args_list]
        assert ("safe_sessions.user_mismatch", "request-response-and-session-mismatch") in set_attr_call_args

    @patch("openedx.core.djangoapps.safe_sessions.middleware.LOG_REQUEST_USER_CHANGES", True)
    @patch("openedx.core.djangoapps.safe_sessions.middleware.set_custom_attribute")
    def test_warn_with_verbose_logging(self, mock_set_custom_attribute):
        self.set_up_for_success()
        self.request.user = UserFactory.create()
        with self.assert_logged('SafeCookieData: Changing request user. ', log_level='warning'):
            SafeSessionMiddleware().process_response(self.request, self.client.response)
        mock_set_custom_attribute.assert_has_calls([call('safe_sessions.user_id_list', '1,2')])

    @patch("openedx.core.djangoapps.safe_sessions.middleware.LOG_REQUEST_USER_CHANGES", False)
    def test_warn_without_verbose_logging(self):
        self.set_up_for_success()
        self.request.user = UserFactory.create()
        with self.assert_regex_not_logged('SafeCookieData: Changing request user. ', log_level='warning'):
            SafeSessionMiddleware().process_response(self.request, self.client.response)

    @override_settings(LOG_REQUEST_USER_CHANGE_HEADERS=True)
    @patch("openedx.core.djangoapps.safe_sessions.middleware.LOG_REQUEST_USER_CHANGES", True)
    @patch("openedx.core.djangoapps.safe_sessions.middleware.cache")
    def test_user_change_with_header_logging(self, mock_cache):
        self.set_up_for_success()
        self.request.user = UserFactory.create()
        with self.assert_logged('SafeCookieData: Changing request user. ', log_level='warning'):
            SafeSessionMiddleware().process_response(self.request, self.client.response)
        # Note: Since the test cache is not retaining its values for some reason, we'll
        #   simply assert that the cache is set (here) and checked (below).
        mock_cache.set_many.assert_called_with(
            {
                'safe_sessions.middleware.recent_user_change_detected_1': True,
                'safe_sessions.middleware.recent_user_change_detected_2': True
            }, 300
        )

        # send successful request; request header should be logged for earlier mismatched user id
        self.set_up_for_success()
        SafeSessionMiddleware().process_response(self.request, self.client.response)
        # Note: The test cache is not returning True because it is not retaining its values
        #   for some reason. Rather than asserting that we log the header appropriately, we'll
        #   simply verify that we are checking the cache.
        mock_cache.get.assert_called_with('safe_sessions.middleware.recent_user_change_detected_1', False)

    @override_settings(LOG_REQUEST_USER_CHANGE_HEADERS=True)
    @patch("openedx.core.djangoapps.safe_sessions.middleware.LOG_REQUEST_USER_CHANGES", True)
    def test_no_request_user_with_header_logging(self):
        """
        Test header logging enabled with request not containing a user object.

        Notes:
        * In Production, failures happened for some requests that did not have
            request.user set, so we test this case here.
        * An attempt at creating a unit test for an anonymous user started
            failing due to a missing request.session, which never happens in
            Production, so this case assumes a working session object.
        """
        self.request.session = MagicMock()
        del self.request.user
        with self.assert_not_logged():
            SafeSessionMiddleware().process_response(self.request, self.client.response)
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

    def test_no_warn_on_expected_user_change(self):
        """
        Verifies that no warnings is emitted when the user change is expected.
        This might happen on a login, for example.
        """
        self.set_up_for_success()

        # User changes...
        new_user = UserFactory.create()
        self.request.user = new_user
        # ...but so does session, and view sets a flag to say it's OK.
<<<<<<< HEAD
        mark_user_change_as_expected(self.client.response, new_user.id)
=======
        mark_user_change_as_expected(new_user.id)
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

        with self.assert_no_warning_logged():
            with patch('openedx.core.djangoapps.safe_sessions.middleware.set_custom_attribute') as mock_attr:
                response = SafeSessionMiddleware().process_response(self.request, self.client.response)
        assert response.status_code == 200
<<<<<<< HEAD
        mock_attr.assert_not_called()


@ddt.ddt
class TestLogRequestUserChanges(TestCase):
=======
        assert 'safe_sessions.user_mismatch' not in [call.args[0] for call in mock_attr.call_args_list]


class TestTokenObscuring(TestCase):
    """
    Test the ability to obscure session IDs.
    """

    def test_obscure_none(self):
        """Doesn't break on None input."""
        assert obscure_token(None) is None

    def test_obscure_vary(self):
        """
        Verifies that input and SECRET_KEY both change output.

        The "expected" values here are computed and arbitrary; if the
        algorithm is updated, the expected values should also be
        updated. (Changing the algorithm will invalidate any stored
        data, but the docstring explicitly warns not to store these
        outputs anyhow.)
        """
        with override_settings(SECRET_KEY="FIRST SECRET"):
            # Same input twice, same output twice
            assert obscure_token('abcdef-123456') == '2d4260b0'
            assert obscure_token('abcdef-123456') == '2d4260b0'
            # Different input, different output
            assert obscure_token('zxcvbnm-000111') == '87978f29'

        # Different key, different output
        with override_settings(SECRET_KEY="SECOND SECRET"):
            assert obscure_token('abcdef-123456') == '7325d529'


@ddt.ddt
class TestTrackRequestUserChanges(TestCase):
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    """
    Test the function that instruments a request object.

    Ensure that we are logging changes to the 'user' attribute and
    that the correct messages are written.
    """

<<<<<<< HEAD
    @patch("openedx.core.djangoapps.safe_sessions.middleware.log.info")
    def test_initial_user_setting_logging(self, mock_log):
        request = get_mock_request()
        del request.user
        log_request_user_changes(request)
        request.user = UserFactory.create()

        assert mock_log.called
        assert "Setting for the first time" in mock_log.call_args[0][0]

    @patch("openedx.core.djangoapps.safe_sessions.middleware.log.info")
    def test_user_change_logging(self, mock_log):
=======
    def test_initial_user_setting_tracking(self):
        request = get_mock_request()
        del request.user
        track_request_user_changes(request)
        request.user = UserFactory.create()

        assert "Setting for the first time" in request.debug_user_changes[0]

    def test_user_change_logging(self):
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        request = get_mock_request()
        original_user = UserFactory.create()
        new_user = UserFactory.create()

        request.user = original_user
<<<<<<< HEAD
        log_request_user_changes(request)

        # Verify that we don't log if set to same as current value.
        request.user = original_user
        assert not mock_log.called

        # Verify logging on change.
        request.user = new_user
        assert mock_log.called
        assert f"Changing request user. Originally {original_user.id!r}" in mock_log.call_args[0][0]
        assert f"will become {new_user.id!r}" in mock_log.call_args[0][0]

        # Verify change back logged.
        request.user = original_user
        assert mock_log.call_count == 2
        expected_msg = f"Originally {original_user.id!r}, now {new_user.id!r} and will become {original_user.id!r}"
        assert expected_msg in mock_log.call_args[0][0]

    @patch("openedx.core.djangoapps.safe_sessions.middleware.log.info")
    def test_user_change_with_no_ids(self, mock_log):
        request = get_mock_request()
        del request.user

        log_request_user_changes(request)
        request.user = object()
        assert mock_log.called
        assert "Setting for the first time, but user has no id" in mock_log.call_args[0][0]

        request.user = object()
        assert mock_log.call_count == 2
        assert "Changing request user but user has no id." in mock_log.call_args[0][0]
=======
        track_request_user_changes(request)

        # Verify that we don't log if set to same as current value.
        request.user = original_user
        assert len(request.debug_user_changes) == 0

        # Verify logging on change.
        request.user = new_user
        assert len(request.debug_user_changes) == 1
        assert f"Changing request user. Originally {original_user.id!r}" in request.debug_user_changes[0]
        assert f"will become {new_user.id!r}" in request.debug_user_changes[0]

        # Verify change back logged.
        request.user = original_user
        assert len(request.debug_user_changes) == 2
        expected_msg = f"Originally {original_user.id!r}, now {new_user.id!r} and will become {original_user.id!r}"
        assert expected_msg in request.debug_user_changes[1]

    def test_user_change_with_no_ids(self):
        request = get_mock_request()
        del request.user

        track_request_user_changes(request)
        request.user = object()
        assert "Setting for the first time, but user has no id" in request.debug_user_changes[0]

        request.user = object()
        assert len(request.debug_user_changes) == 2
        assert "Changing request user but user has no id." in request.debug_user_changes[1]
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

"""
Tests for course verification sock
"""


from unittest import mock

import ddt
<<<<<<< HEAD
=======
from django.urls import reverse
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
from edx_toggles.toggles.testutils import override_waffle_flag

from common.djangoapps.course_modes.models import CourseMode
from lms.djangoapps.commerce.models import CommerceConfiguration
<<<<<<< HEAD
from openedx.core.djangolib.markup import HTML
from openedx.features.course_experience import DISPLAY_COURSE_SOCK_FLAG
from common.djangoapps.student.tests.factories import CourseEnrollmentFactory, UserFactory
from xmodule.modulestore.tests.django_utils import SharedModuleStoreTestCase
from xmodule.modulestore.tests.factories import CourseFactory

from .helpers import add_course_mode
from .test_course_home import course_home_url
=======
from lms.djangoapps.courseware.tests.helpers import set_preview_mode
from openedx.core.djangolib.markup import HTML
from openedx.features.course_experience import DISPLAY_COURSE_SOCK_FLAG
from common.djangoapps.student.tests.factories import CourseEnrollmentFactory, UserFactory
from xmodule.modulestore.tests.django_utils import SharedModuleStoreTestCase  # lint-amnesty, pylint: disable=wrong-import-order
from xmodule.modulestore.tests.factories import CourseFactory  # lint-amnesty, pylint: disable=wrong-import-order

from .helpers import add_course_mode
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

TEST_PASSWORD = 'test'
TEST_VERIFICATION_SOCK_LOCATOR = '<div class="verification-sock"'


@ddt.ddt
<<<<<<< HEAD
=======
@set_preview_mode(True)
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
class TestCourseSockView(SharedModuleStoreTestCase):
    """
    Tests for the course verification sock fragment view.
    """
    @classmethod
    def setUpClass(cls):
        super().setUpClass()

        # Create four courses
        cls.standard_course = CourseFactory.create()
        cls.verified_course = CourseFactory.create()
        cls.verified_course_update_expired = CourseFactory.create()
        cls.verified_course_already_enrolled = CourseFactory.create()

        # Assign each verifiable course an upgrade deadline
        add_course_mode(cls.verified_course, upgrade_deadline_expired=False)
        add_course_mode(cls.verified_course_update_expired, upgrade_deadline_expired=True)
        add_course_mode(cls.verified_course_already_enrolled, upgrade_deadline_expired=False)

    def setUp(self):
        super().setUp()
<<<<<<< HEAD
        self.user = UserFactory.create()
=======
        self.user = UserFactory.create(is_staff=True)
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

        # Enroll the user in the four courses
        CourseEnrollmentFactory.create(user=self.user, course_id=self.standard_course.id)
        CourseEnrollmentFactory.create(user=self.user, course_id=self.verified_course.id)
        CourseEnrollmentFactory.create(user=self.user, course_id=self.verified_course_update_expired.id)
        CourseEnrollmentFactory.create(
            user=self.user, course_id=self.verified_course_already_enrolled.id, mode=CourseMode.VERIFIED
        )

        CommerceConfiguration.objects.create(enabled=True, checkout_on_ecommerce_service=True)

        # Log the user in
        self.client.login(username=self.user.username, password=TEST_PASSWORD)

<<<<<<< HEAD
=======
    def get_courseware(self, course):
        return self.client.get(reverse('courseware', kwargs={'course_id': str(course.id)}))

>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    @override_waffle_flag(DISPLAY_COURSE_SOCK_FLAG, active=True)
    def test_standard_course(self):
        """
        Ensure that a course that cannot be verified does
        not have a visible verification sock.
        """
<<<<<<< HEAD
        response = self.client.get(course_home_url(self.standard_course))
=======
        response = self.get_courseware(self.standard_course)
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        self.assert_verified_sock_is_not_visible(self.standard_course, response)

    @override_waffle_flag(DISPLAY_COURSE_SOCK_FLAG, active=True)
    def test_verified_course(self):
        """
        Ensure that a course that can be verified has a
        visible verification sock.
        """
<<<<<<< HEAD
        response = self.client.get(course_home_url(self.verified_course))
=======
        response = self.get_courseware(self.verified_course)
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        self.assert_verified_sock_is_visible(self.verified_course, response)

    @override_waffle_flag(DISPLAY_COURSE_SOCK_FLAG, active=True)
    def test_verified_course_updated_expired(self):
        """
        Ensure that a course that has an expired upgrade
        date does not display the verification sock.
        """
<<<<<<< HEAD
        response = self.client.get(course_home_url(self.verified_course_update_expired))
=======
        response = self.get_courseware(self.verified_course_update_expired)
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        self.assert_verified_sock_is_not_visible(self.verified_course_update_expired, response)

    @override_waffle_flag(DISPLAY_COURSE_SOCK_FLAG, active=True)
    def test_verified_course_user_already_upgraded(self):
        """
        Ensure that a user that has already upgraded to a
        verified status cannot see the verification sock.
        """
<<<<<<< HEAD
        response = self.client.get(course_home_url(self.verified_course_already_enrolled))
=======
        response = self.get_courseware(self.verified_course_already_enrolled)
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        self.assert_verified_sock_is_not_visible(self.verified_course_already_enrolled, response)

    @override_waffle_flag(DISPLAY_COURSE_SOCK_FLAG, active=True)
    @mock.patch(
        'openedx.features.course_experience.views.course_sock.format_strikeout_price',
        mock.Mock(return_value=(HTML("<span>DISCOUNT_PRICE</span>"), True))
    )
    def test_upgrade_message_discount(self):
<<<<<<< HEAD
        response = self.client.get(course_home_url(self.verified_course))
=======
        response = self.get_courseware(self.verified_course)
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        self.assertContains(response, "<span>DISCOUNT_PRICE</span>")

    def assert_verified_sock_is_visible(self, course, response):  # lint-amnesty, pylint: disable=unused-argument
        return self.assertContains(response, TEST_VERIFICATION_SOCK_LOCATOR, html=False)

    def assert_verified_sock_is_not_visible(self, course, response):  # lint-amnesty, pylint: disable=unused-argument
        return self.assertNotContains(response, TEST_VERIFICATION_SOCK_LOCATOR, html=False)

"""
Tests for the course updates page.
"""

from datetime import datetime

from django.urls import reverse
from pytz import UTC

from openedx.core.djangoapps.waffle_utils.testutils import WAFFLE_TABLES
from openedx.features.content_type_gating.models import ContentTypeGatingConfig
from openedx.features.course_experience.tests import BaseCourseUpdatesTestCase
<<<<<<< HEAD
from xmodule.modulestore.tests.factories import check_mongo_calls

QUERY_COUNT_TABLE_BLACKLIST = WAFFLE_TABLES
=======
from xmodule.modulestore.tests.factories import check_mongo_calls  # lint-amnesty, pylint: disable=wrong-import-order

QUERY_COUNT_TABLE_IGNORELIST = WAFFLE_TABLES
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38


def course_updates_url(course):
    """
    Returns the URL for the course's home page
    """
    return reverse(
        'openedx.course_experience.course_updates',
        kwargs={
            'course_id': str(course.id),
        }
    )


class TestCourseUpdatesPage(BaseCourseUpdatesTestCase):
    """
    Test the course updates page.
    """
    def test_view(self):
        self.create_course_update('First Message')
        self.create_course_update('Second Message')
        url = course_updates_url(self.course)
        response = self.client.get(url)
        assert response.status_code == 200
        self.assertContains(response, 'First Message')
        self.assertContains(response, 'Second Message')

    def test_queries(self):
        ContentTypeGatingConfig.objects.create(enabled=True, enabled_as_of=datetime(2018, 1, 1, tzinfo=UTC))
        self.create_course_update('First Message')

        # Pre-fetch the view to populate any caches
        course_updates_url(self.course)

        # Fetch the view and verify that the query counts haven't changed
        # TODO: decrease query count as part of REVO-28
<<<<<<< HEAD
        with self.assertNumQueries(53, table_blacklist=QUERY_COUNT_TABLE_BLACKLIST):
            with check_mongo_calls(4):
=======
        with self.assertNumQueries(51, table_ignorelist=QUERY_COUNT_TABLE_IGNORELIST):
            with check_mongo_calls(3):
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
                url = course_updates_url(self.course)
                self.client.get(url)

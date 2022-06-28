""" Tests for tab functions (just primitive). """

<<<<<<< HEAD

import json
=======
import json
import random

>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

from cms.djangoapps.contentstore.tests.utils import CourseTestCase
from cms.djangoapps.contentstore.utils import reverse_course_url
from cms.djangoapps.contentstore.views import tabs
<<<<<<< HEAD
from xmodule.modulestore.django import modulestore
from xmodule.modulestore.tests.django_utils import ModuleStoreTestCase
from xmodule.modulestore.tests.factories import CourseFactory, ItemFactory
from xmodule.tabs import CourseTabList
from xmodule.x_module import STUDENT_VIEW
=======
from xmodule.modulestore.django import modulestore  # lint-amnesty, pylint: disable=wrong-import-order
from xmodule.modulestore.tests.django_utils import ModuleStoreTestCase  # lint-amnesty, pylint: disable=wrong-import-order
from xmodule.modulestore.tests.factories import CourseFactory, ItemFactory  # lint-amnesty, pylint: disable=wrong-import-order
from xmodule.tabs import CourseTabList  # lint-amnesty, pylint: disable=wrong-import-order
from xmodule.x_module import STUDENT_VIEW  # lint-amnesty, pylint: disable=wrong-import-order
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38


class TabsPageTests(CourseTestCase):
    """Test cases for Tabs (a.k.a Pages) page"""

    def setUp(self):
        """Common setup for tests"""

        # call super class to setup course, etc.
        super().setUp()

        # Set the URL for tests
        self.url = reverse_course_url('tabs_handler', self.course.id)

<<<<<<< HEAD
        # add a static tab to the course, for code coverage
        self.test_tab = ItemFactory.create(
            parent_location=self.course.location,
            category="static_tab",
            display_name="Static_1"
        )
=======
        # add 4 static tabs to the course, for code coverage
        self.test_tabs = []
        for i in range(1, 5):
            tab = ItemFactory.create(
                parent_location=self.course.location,
                category="static_tab",
                display_name=f"Static_{i}"
            )
        self.test_tabs.append(tab)
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        self.reload_course()

    def check_invalid_tab_id_response(self, resp):
        """Verify response is an error listing the invalid_tab_id"""

<<<<<<< HEAD
        self.assertEqual(resp.status_code, 400)
        resp_content = json.loads(resp.content.decode('utf-8'))
        self.assertIn("error", resp_content)
        self.assertIn("invalid_tab_id", resp_content['error'])
=======
        assert resp.status_code == 400
        resp_content = json.loads(resp.content.decode('utf-8'))
        assert "error" in resp_content
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

    def test_not_implemented(self):
        """Verify not implemented errors"""

        # JSON GET request not supported
        with self.assertRaises(NotImplementedError):
            self.client.get(self.url)

        # JSON POST request not supported
        with self.assertRaises(NotImplementedError):
            self.client.ajax_post(
                self.url,
                data=json.dumps({
                    'tab_id_locator': {'tab_id': 'courseware'},
                    'unsupported_request': None,
                }),
            )

        # invalid JSON POST request
        with self.assertRaises(NotImplementedError):
            self.client.ajax_post(
                self.url,
                data={'invalid_request': None},
            )

    def test_view_index(self):
        """Basic check that the Pages page responds correctly"""

        resp = self.client.get_html(self.url)
        self.assertContains(resp, 'course-nav-list')

    def test_reorder_tabs(self):
        """Test re-ordering of tabs"""

<<<<<<< HEAD
        # get the original tab ids
        orig_tab_ids = [tab.tab_id for tab in self.course.tabs]
        tab_ids = list(orig_tab_ids)
        num_orig_tabs = len(orig_tab_ids)

        # make sure we have enough tabs to play around with
        self.assertGreaterEqual(num_orig_tabs, 5)

        # reorder the last two tabs
        tab_ids[num_orig_tabs - 1], tab_ids[num_orig_tabs - 2] = tab_ids[num_orig_tabs - 2], tab_ids[num_orig_tabs - 1]

        # remove the middle tab
        # (the code needs to handle the case where tabs requested for re-ordering is a subset of the tabs in the course)
        removed_tab = tab_ids.pop(num_orig_tabs // 2)
        self.assertEqual(len(tab_ids), num_orig_tabs - 1)

        # post the request
        resp = self.client.ajax_post(
            self.url,
            data={'tabs': [{'tab_id': tab_id} for tab_id in tab_ids]},
        )
        self.assertEqual(resp.status_code, 204)

        # reload the course and verify the new tab order
        self.reload_course()
        new_tab_ids = [tab.tab_id for tab in self.course.tabs]
        self.assertEqual(new_tab_ids, tab_ids + [removed_tab])
        self.assertNotEqual(new_tab_ids, orig_tab_ids)

    def test_reorder_tabs_invalid_list(self):
        """Test re-ordering of tabs with invalid tab list"""

        orig_tab_ids = [tab.tab_id for tab in self.course.tabs]
        tab_ids = list(orig_tab_ids)

        # reorder the first two tabs
        tab_ids[0], tab_ids[1] = tab_ids[1], tab_ids[0]

        # post the request
        resp = self.client.ajax_post(
            self.url,
            data={'tabs': [{'tab_id': tab_id} for tab_id in tab_ids]},
        )
        self.assertEqual(resp.status_code, 400)
        resp_content = json.loads(resp.content.decode('utf-8'))
        self.assertIn("error", resp_content)
=======
        # get the original tabs
        course_tabs = list(self.course.tabs)
        num_orig_tabs = len(self.course.tabs)

        # make sure we have enough tabs to play around with
        assert num_orig_tabs >= 5

        # Randomise the order of static tabs, leave the rest intact
        course_tabs.sort(key=lambda tab: (100 + random.random()) if tab.type == 'static_tab' else tab.priority)

        tabs_data = [
            {'tab_locator': str(self.course.id.make_usage_key("static_tab", tab.url_slug))}
            for tab in course_tabs
            if tab.type == 'static_tab'
        ]
        # Remove one tab randomly. This shouldn't delete the tab.
        tabs_data.pop()

        # post the request with the reordered static tabs only
        resp = self.client.ajax_post(
            self.url,
            data={
                'tabs': tabs_data
            },
        )
        assert resp.status_code == 204

        # reload the course and verify the new tab order
        self.reload_course()
        reordered_tab_ids = [tab.tab_id for tab in course_tabs]
        new_tab_ids = [tab.tab_id for tab in self.course.tabs]
        assert new_tab_ids == reordered_tab_ids
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

    def test_reorder_tabs_invalid_tab(self):
        """Test re-ordering of tabs with invalid tab"""

        invalid_tab_ids = ['courseware', 'info', 'invalid_tab_id']

        # post the request
        resp = self.client.ajax_post(
            self.url,
            data={'tabs': [{'tab_id': tab_id} for tab_id in invalid_tab_ids]},
        )
        self.check_invalid_tab_id_response(resp)

    def check_toggle_tab_visiblity(self, tab_type, new_is_hidden_setting):
        """Helper method to check changes in tab visibility"""

        # find the tab
        old_tab = CourseTabList.get_tab_by_type(self.course.tabs, tab_type)

        # visibility should be different from new setting
<<<<<<< HEAD
        self.assertNotEqual(old_tab.is_hidden, new_is_hidden_setting)
=======
        assert old_tab.is_hidden != new_is_hidden_setting
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

        # post the request
        resp = self.client.ajax_post(
            self.url,
            data=json.dumps({
                'tab_id_locator': {'tab_id': old_tab.tab_id},
                'is_hidden': new_is_hidden_setting,
            }),
        )
<<<<<<< HEAD
        self.assertEqual(resp.status_code, 204)
=======
        assert resp.status_code == 204
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

        # reload the course and verify the new visibility setting
        self.reload_course()
        new_tab = CourseTabList.get_tab_by_type(self.course.tabs, tab_type)
<<<<<<< HEAD
        self.assertEqual(new_tab.is_hidden, new_is_hidden_setting)
=======
        assert new_tab.is_hidden == new_is_hidden_setting
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

    def test_toggle_tab_visibility(self):
        """Test toggling of tab visibility"""
        self.check_toggle_tab_visiblity('wiki', False)
        self.check_toggle_tab_visiblity('wiki', True)

    def test_toggle_invalid_tab_visibility(self):
        """Test toggling visibility of an invalid tab"""

        # post the request
        resp = self.client.ajax_post(
            self.url,
            data=json.dumps({
                'tab_id_locator': {'tab_id': 'invalid_tab_id'}
            }),
        )
        self.check_invalid_tab_id_response(resp)

    def test_tab_preview_html(self):
        """
        Verify that the static tab renders itself with the correct HTML
        """
<<<<<<< HEAD
        preview_url = f'/xblock/{self.test_tab.location}/{STUDENT_VIEW}'

        resp = self.client.get(preview_url, HTTP_ACCEPT='application/json')
        self.assertEqual(resp.status_code, 200)
=======
        preview_url = f'/xblock/{self.test_tabs[0].location}/{STUDENT_VIEW}'

        resp = self.client.get(preview_url, HTTP_ACCEPT='application/json')
        assert resp.status_code == 200
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        resp_content = json.loads(resp.content.decode('utf-8'))
        html = resp_content['html']

        # Verify that the HTML contains the expected elements
<<<<<<< HEAD
        self.assertIn('<span class="action-button-text">Edit</span>', html)
        self.assertIn('<span class="sr">Duplicate this component</span>', html)
        self.assertIn('<span class="sr">Delete this component</span>', html)
        self.assertIn('<span data-tooltip="Drag to reorder" class="drag-handle action"></span>', html)
=======
        assert '<span class="action-button-text">Edit</span>' in html
        assert '<span class="sr">Duplicate this component</span>' in html
        assert '<span class="sr">Delete this component</span>' in html
        assert '<span data-tooltip="Drag to reorder" class="drag-handle action"></span>' in html
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38


class PrimitiveTabEdit(ModuleStoreTestCase):
    """Tests for the primitive tab edit data manipulations"""

    def test_delete(self):
        """Test primitive tab deletion."""
        course = CourseFactory.create()
        with self.assertRaises(ValueError):
            tabs.primitive_delete(course, 0)
        with self.assertRaises(ValueError):
            tabs.primitive_delete(course, 1)
        with self.assertRaises(IndexError):
            tabs.primitive_delete(course, 7)
<<<<<<< HEAD
        tabs.primitive_delete(course, 2)
        self.assertNotIn({'type': 'textbooks'}, course.tabs)
        # Check that discussion has shifted up
        self.assertEqual(course.tabs[2], {'type': 'discussion', 'name': 'Discussion'})
=======

        assert course.tabs[2] != {'type': 'dates', 'name': 'Dates'}
        tabs.primitive_delete(course, 2)
        assert {'type': 'progress'} not in course.tabs
        # Check that dates has shifted up
        assert course.tabs[2] == {'type': 'dates', 'name': 'Dates'}
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

    def test_insert(self):
        """Test primitive tab insertion."""
        course = CourseFactory.create()
        tabs.primitive_insert(course, 2, 'pdf_textbooks', 'aname')
<<<<<<< HEAD
        self.assertEqual(course.tabs[2], {'type': 'pdf_textbooks', 'name': 'aname'})
=======
        assert course.tabs[2] == {'type': 'pdf_textbooks', 'name': 'aname'}
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        with self.assertRaises(ValueError):
            tabs.primitive_insert(course, 0, 'pdf_textbooks', 'aname')
        with self.assertRaises(ValueError):
            tabs.primitive_insert(course, 3, 'static_tab', 'aname')

    def test_save(self):
        """Test course saving."""
        course = CourseFactory.create()
        tabs.primitive_insert(course, 3, 'pdf_textbooks', 'aname')
        course2 = modulestore().get_course(course.id)
<<<<<<< HEAD
        self.assertEqual(course2.tabs[3], {'type': 'pdf_textbooks', 'name': 'aname'})
=======
        assert course2.tabs[3] == {'type': 'pdf_textbooks', 'name': 'aname'}
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

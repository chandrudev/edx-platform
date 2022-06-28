"""
Toggles for course apps.
"""
<<<<<<< HEAD
from edx_toggles.toggles import LegacyWaffleSwitchNamespace

from openedx.core.djangoapps.waffle_utils import CourseWaffleFlag

#: Namespace for use by course apps for creating availability toggles
COURSE_APPS_WAFFLE_NAMESPACE = LegacyWaffleSwitchNamespace("course_apps")
=======
from openedx.core.djangoapps.waffle_utils import CourseWaffleFlag

#: Namespace for use by course apps for creating availability toggles
COURSE_APPS_WAFFLE_NAMESPACE = 'course_apps'
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

# .. toggle_name: course_apps.proctoring_settings_modal_view
# .. toggle_use_cases: temporary
# .. toggle_implementation: CourseWaffleFlag
# .. toggle_default: False
# .. toggle_description: When enabled, users will be directed to a new proctoring settings
#    modal on the Pages and Resources view when accessing proctored exam settings.
<<<<<<< HEAD
# .. toggle_warnings: None
# .. toggle_creation_date: 2021-08-17
# .. toggle_target_removal_date: None
PROCTORING_SETTINGS_MODAL_VIEW = CourseWaffleFlag(
    COURSE_APPS_WAFFLE_NAMESPACE, 'proctoring_settings_modal_view', module_name=__name__,
=======
# .. toggle_warning: None
# .. toggle_creation_date: 2021-08-17
# .. toggle_target_removal_date: None
PROCTORING_SETTINGS_MODAL_VIEW = CourseWaffleFlag(
    f'{COURSE_APPS_WAFFLE_NAMESPACE}.proctoring_settings_modal_view', __name__
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
)


def proctoring_settings_modal_view_enabled(course_key):
    """
    Returns a boolean if proctoring settings modal view is enabled for a course.
    """
    return PROCTORING_SETTINGS_MODAL_VIEW.is_enabled(course_key)

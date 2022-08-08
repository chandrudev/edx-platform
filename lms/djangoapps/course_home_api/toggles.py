"""
Toggles for course home experience.
"""


from openedx.core.djangoapps.waffle_utils import CourseWaffleFlag

WAFFLE_FLAG_NAMESPACE ='course_home'



# .. toggle_name: course_home.course_home_use_legacy_frontend
# .. toggle_implementation: CourseWaffleFlag
# .. toggle_default: False
# .. toggle_description: This flag enables the use of the legacy view of course home as the default course frontend.
# .. Learning microfrontend (frontend-app-learning) is now an opt-out view, where if this flag is
# .. enabled the default changes from the learning microfrontend to legacy.
# .. toggle_warnings: None
# .. toggle_use_cases: temporary
# .. toggle_creation_date: 2021-06-11
# .. toggle_target_removal_date: 2022-05-15
# .. toggle_tickets: https://openedx.atlassian.net/browse/AA-797
COURSE_HOME_USE_LEGACY_FRONTEND = CourseWaffleFlag(WAFFLE_FLAG_NAMESPACE, 'course_home_use_legacy_frontend', __name__)


def course_home_legacy_is_active(course_key):
    return COURSE_HOME_USE_LEGACY_FRONTEND.is_enabled(course_key) or course_key.deprecated


    

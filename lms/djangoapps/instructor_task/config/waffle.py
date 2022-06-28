"""
This module contains various configuration settings via
waffle switches for the instructor_task app.
"""

<<<<<<< HEAD
from edx_toggles.toggles import LegacyWaffleFlagNamespace, LegacyWaffleSwitchNamespace

from openedx.core.djangoapps.waffle_utils import CourseWaffleFlag

WAFFLE_NAMESPACE = 'instructor_task'
# TODO: Remove and replace with direct references to each flag.
INSTRUCTOR_TASK_WAFFLE_FLAG_NAMESPACE = LegacyWaffleFlagNamespace(name=WAFFLE_NAMESPACE)
# TODO: Remove and replace with direct references to each switch.
WAFFLE_SWITCHES = LegacyWaffleSwitchNamespace(name=WAFFLE_NAMESPACE)

# Waffle switches
# TODO: Replace with WaffleSwitch(). See WAFFLE_SWITCHES comment.
OPTIMIZE_GET_LEARNERS_FOR_COURSE = 'optimize_get_learners_for_course'

# Course override flags
# TODO: Replace with WaffleFlag(). See waffle_flags() docstring.
GENERATE_PROBLEM_GRADE_REPORT_VERIFIED_ONLY = 'generate_problem_grade_report_verified_only'
# TODO: Replace with WaffleFlag(). See waffle_flags() docstring.
GENERATE_COURSE_GRADE_REPORT_VERIFIED_ONLY = 'generate_course_grade_report_verified_only'


def waffle_flags():
    """
    Returns the namespaced, cached, audited Waffle flags dictionary for Grades.

    IMPORTANT: Do NOT copy this dict pattern and do NOT add new flags to this dict.
      Instead, replace the string constants above with the actual flag instances.
    """
    return {
        GENERATE_PROBLEM_GRADE_REPORT_VERIFIED_ONLY: CourseWaffleFlag(  # lint-amnesty, pylint: disable=toggle-missing-annotation
            waffle_namespace=INSTRUCTOR_TASK_WAFFLE_FLAG_NAMESPACE,
            flag_name=GENERATE_PROBLEM_GRADE_REPORT_VERIFIED_ONLY,
            module_name=__name__,
        ),
        GENERATE_COURSE_GRADE_REPORT_VERIFIED_ONLY: CourseWaffleFlag(  # lint-amnesty, pylint: disable=toggle-missing-annotation
            waffle_namespace=INSTRUCTOR_TASK_WAFFLE_FLAG_NAMESPACE,
            flag_name=GENERATE_COURSE_GRADE_REPORT_VERIFIED_ONLY,
            module_name=__name__,
        ),
    }
=======
from edx_toggles.toggles import WaffleSwitch

from openedx.core.djangoapps.waffle_utils import CourseWaffleFlag


WAFFLE_NAMESPACE = 'instructor_task'

# Waffle switches
OPTIMIZE_GET_LEARNERS_FOR_COURSE = WaffleSwitch(  # lint-amnesty, pylint: disable=toggle-missing-annotation
    f'{WAFFLE_NAMESPACE}.optimize_get_learners_for_course', __name__
)

# Course override flags
GENERATE_PROBLEM_GRADE_REPORT_VERIFIED_ONLY = CourseWaffleFlag(  # lint-amnesty, pylint: disable=toggle-missing-annotation
    f'{WAFFLE_NAMESPACE}.generate_problem_grade_report_verified_only', __name__
)

GENERATE_COURSE_GRADE_REPORT_VERIFIED_ONLY = CourseWaffleFlag(  # lint-amnesty, pylint: disable=toggle-missing-annotation
    f'{WAFFLE_NAMESPACE}.generate_course_grade_report_verified_only', __name__
)
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38


def optimize_get_learners_switch_enabled():
    """
    Returns True if optimize get learner switch is enabled, otherwise False.
    """
<<<<<<< HEAD
    return WAFFLE_SWITCHES.is_enabled(OPTIMIZE_GET_LEARNERS_FOR_COURSE)
=======
    return OPTIMIZE_GET_LEARNERS_FOR_COURSE.is_enabled()
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38


def problem_grade_report_verified_only(course_id):
    """
    Returns True if problem grade reports should only
    return rows for verified students in the given course,
    False otherwise.
    """
<<<<<<< HEAD
    return waffle_flags()[GENERATE_PROBLEM_GRADE_REPORT_VERIFIED_ONLY].is_enabled(course_id)
=======
    return GENERATE_PROBLEM_GRADE_REPORT_VERIFIED_ONLY.is_enabled(course_id)
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38


def course_grade_report_verified_only(course_id):
    """
    Returns True if problem grade reports should only
    return rows for verified students in the given course,
    False otherwise.
    """
<<<<<<< HEAD
    return waffle_flags()[GENERATE_COURSE_GRADE_REPORT_VERIFIED_ONLY].is_enabled(course_id)
=======
    return GENERATE_COURSE_GRADE_REPORT_VERIFIED_ONLY.is_enabled(course_id)
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

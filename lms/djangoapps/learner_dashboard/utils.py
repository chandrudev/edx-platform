"""
The utility methods and functions to help the djangoapp logic
"""

<<<<<<< HEAD

from opaque_keys.edx.keys import CourseKey

from lms.djangoapps.learner_dashboard.config.waffle import ENABLE_PROGRAM_DISCUSSIONS
=======
from django.core.exceptions import ObjectDoesNotExist
from opaque_keys.edx.keys import CourseKey

from common.djangoapps.student.roles import GlobalStaff
from lms.djangoapps.learner_dashboard.config.waffle import ENABLE_MASTERS_PROGRAM_TAB_VIEW, ENABLE_PROGRAM_TAB_VIEW
from lms.djangoapps.program_enrollments.api import get_program_enrollment
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

FAKE_COURSE_KEY = CourseKey.from_string('course-v1:fake+course+run')


def strip_course_id(path):
    """
    The utility function to help remove the fake
    course ID from the url path
    """
    course_id = str(FAKE_COURSE_KEY)
    return path.split(course_id)[0]


<<<<<<< HEAD
def program_discussions_is_enabled():
    """
    check if program discussion is enabled.
    """
    return ENABLE_PROGRAM_DISCUSSIONS.is_enabled()
=======
def program_tab_view_is_enabled() -> bool:
    """
    check if program discussion is enabled.
    """
    return ENABLE_PROGRAM_TAB_VIEW.is_enabled()


def masters_program_tab_view_is_enabled() -> bool:
    """
    check if masters program discussion is enabled.
    """
    return ENABLE_MASTERS_PROGRAM_TAB_VIEW.is_enabled()


def is_enrolled_or_staff(request, program_uuid):
    """Returns true if the user is enrolled in the program or staff"""

    if GlobalStaff().has_user(request.user):
        return True

    try:
        get_program_enrollment(program_uuid=program_uuid, user=request.user)
    except ObjectDoesNotExist:
        return False
    return True
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

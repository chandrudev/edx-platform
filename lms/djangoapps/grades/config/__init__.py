"""
Defines grading configuration.
"""


from django.conf import settings

from lms.djangoapps.grades.config.models import PersistentGradesEnabledFlag
from lms.djangoapps.grades.config.waffle import ASSUME_ZERO_GRADE_IF_ABSENT
<<<<<<< HEAD
from lms.djangoapps.grades.config.waffle import waffle as waffle_func
=======
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38


def assume_zero_if_absent(course_key):
    """
    Returns whether an absent grade should be assumed to be zero.
    """
    return (
        should_persist_grades(course_key) and (
            settings.FEATURES.get('ASSUME_ZERO_GRADE_IF_ABSENT_FOR_ALL_TESTS') or
<<<<<<< HEAD
            waffle_func().is_enabled(ASSUME_ZERO_GRADE_IF_ABSENT)
=======
            ASSUME_ZERO_GRADE_IF_ABSENT.is_enabled()
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        )
    )


def should_persist_grades(course_key):
    """
    Returns whether grades should be persisted.
    """
    return PersistentGradesEnabledFlag.feature_enabled(course_key)

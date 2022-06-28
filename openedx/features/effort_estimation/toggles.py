"""
Feature toggles used for effort estimation.
"""

<<<<<<< HEAD
from edx_toggles.toggles import LegacyWaffleFlagNamespace

from openedx.core.djangoapps.waffle_utils import CourseWaffleFlag


WAFFLE_FLAG_NAMESPACE = LegacyWaffleFlagNamespace(name='effort_estimation')
=======
from openedx.core.djangoapps.waffle_utils import CourseWaffleFlag


WAFFLE_FLAG_NAMESPACE = 'effort_estimation'
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

# .. toggle_name: effort_estimation.disabled
# .. toggle_implementation: CourseWaffleFlag
# .. toggle_default: False
# .. toggle_description: If effort estimations are confusing for a given course (e.g. the course team has added manual
#   estimates), you can turn them off case by case here.
# .. toggle_use_cases: opt_out
# .. toggle_creation_date: 2021-07-27
<<<<<<< HEAD
EFFORT_ESTIMATION_DISABLED_FLAG = CourseWaffleFlag(WAFFLE_FLAG_NAMESPACE, 'disabled', __name__)
=======
EFFORT_ESTIMATION_DISABLED_FLAG = CourseWaffleFlag(f'{WAFFLE_FLAG_NAMESPACE}.disabled', __name__)
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

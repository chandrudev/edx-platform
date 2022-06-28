"""
Waffle flags for instructor dashboard.
"""

<<<<<<< HEAD
from edx_toggles.toggles import LegacyWaffleFlag, LegacyWaffleFlagNamespace

WAFFLE_NAMESPACE = 'instructor'
# Namespace for instructor waffle flags.
WAFFLE_FLAG_NAMESPACE = LegacyWaffleFlagNamespace(name=WAFFLE_NAMESPACE)
=======
from edx_toggles.toggles import WaffleFlag


# Namespace for instructor waffle flags.
WAFFLE_FLAG_NAMESPACE = 'instructor'
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

# Waffle flag enable new data download UI on specific course.
# .. toggle_name: instructor.enable_data_download_v2
# .. toggle_implementation: WaffleFlag
# .. toggle_default: False
# .. toggle_description: instructor
# .. toggle_use_cases: open_edx
# .. toggle_creation_date: 2020-07-8
# .. toggle_tickets: PROD-1309
<<<<<<< HEAD
DATA_DOWNLOAD_V2 = LegacyWaffleFlag(
    waffle_namespace=WAFFLE_FLAG_NAMESPACE,
    flag_name='enable_data_download_v2',
    module_name=__name__,
)
=======
DATA_DOWNLOAD_V2 = WaffleFlag(f'{WAFFLE_FLAG_NAMESPACE}.enable_data_download_v2', __name__)
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

# .. toggle_name: verify_student.optimised_is_small_course
# .. toggle_implementation: WaffleFlag
# .. toggle_default: False
# .. toggle_description: Supports staged rollout to improved is_small_course method.
# .. toggle_use_cases: open_edx
# .. toggle_creation_date: 2020-07-02
<<<<<<< HEAD
# .. toggle_warnings: Description mentions staged rollout, but the use case is not set as temporary.
#      This may actually be a temporary toggle.
# .. toggle_tickets: PROD-1740
OPTIMISED_IS_SMALL_COURSE = LegacyWaffleFlag(
    waffle_namespace=WAFFLE_FLAG_NAMESPACE,
    flag_name='optimised_is_small_course',
    module_name=__name__,
)
=======
# .. toggle_warning: Description mentions staged rollout, but the use case is not set as temporary.
#      This may actually be a temporary toggle.
# .. toggle_tickets: PROD-1740
OPTIMISED_IS_SMALL_COURSE = WaffleFlag(f'{WAFFLE_FLAG_NAMESPACE}.optimised_is_small_course', __name__)
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38


def data_download_v2_is_enabled():
    """
    check if data download v2 is enabled.
    """
    return DATA_DOWNLOAD_V2.is_enabled()


def use_optimised_is_small_course():
    return OPTIMISED_IS_SMALL_COURSE.is_enabled()

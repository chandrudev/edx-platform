""" Course API """


<<<<<<< HEAD
from edx_toggles.toggles import LegacyWaffleSwitch, LegacyWaffleSwitchNamespace

WAFFLE_SWITCH_NAMESPACE = LegacyWaffleSwitchNamespace(name='course_list_api_rate_limit')
=======
from edx_toggles.toggles import WaffleSwitch


WAFFLE_SWITCH_NAMESPACE = 'course_list_api_rate_limit'
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

# .. toggle_name: course_list_api_rate_limit.rate_limit_2
# .. toggle_implementation: WaffleSwitch
# .. toggle_default: False
# .. toggle_description: Waffle switch to enable the throttling of 2 requests/minute to the course API. For staff
#   users, this limit is 10 requests/minute.
# .. toggle_use_cases: circuit_breaker
# .. toggle_creation_date: 2018-06-12
# .. toggle_tickets: https://openedx.atlassian.net/browse/LEARNER-5527
<<<<<<< HEAD
USE_RATE_LIMIT_2_FOR_COURSE_LIST_API = LegacyWaffleSwitch(WAFFLE_SWITCH_NAMESPACE, 'rate_limit_2', __name__)
=======
USE_RATE_LIMIT_2_FOR_COURSE_LIST_API = WaffleSwitch(f'{WAFFLE_SWITCH_NAMESPACE}.rate_limit_2', __name__)
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
# .. toggle_name: course_list_api_rate_limit.rate_limit_10
# .. toggle_implementation: WaffleSwitch
# .. toggle_default: False
# .. toggle_description: Waffle switch to enable the throttling of 10 requests/minute to the course API. For staff
#   users, this limit is 20 requests/minute.
# .. toggle_use_cases: circuit_breaker
# .. toggle_creation_date: 2018-06-12
# .. toggle_tickets: https://openedx.atlassian.net/browse/LEARNER-5527
<<<<<<< HEAD
USE_RATE_LIMIT_10_FOR_COURSE_LIST_API = LegacyWaffleSwitch(WAFFLE_SWITCH_NAMESPACE, 'rate_limit_10', __name__)
=======
USE_RATE_LIMIT_10_FOR_COURSE_LIST_API = WaffleSwitch(f'{WAFFLE_SWITCH_NAMESPACE}.rate_limit_10', __name__)
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

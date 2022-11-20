"""
Miscellaneous waffle switches that both LMS and Studio need to access
"""


from edx_toggles.toggles import WaffleSwitch

# Namespace
WAFFLE_NAMESPACE = 'course_experience'

# Switches
# .. toggle_name: course_experience.enable_about_sidebar_html
# .. toggle_implementation: WaffleSwitch
# .. toggle_default: False
# .. toggle_description: Used to determine whether to show custom HTML in the sidebar on the internal course about page.
# .. toggle_use_cases: open_edx
# .. toggle_creation_date: 2018-01-26
ENABLE_COURSE_ABOUT_SIDEBAR_HTML = WaffleSwitch(f'{WAFFLE_NAMESPACE}.enable_about_sidebar_html', __name__)


# def waffle():
#     """
#     Deprecated: Returns the namespaced, cached, audited shared Waffle Switch class.

#     IMPORTANT: Do NOT copy this pattern and do NOT use this to reference new switches.
#       Instead, replace the string constant above with the actual switch instance.
#       For example::

#         ENABLE_COURSE_ABOUT_SIDEBAR_HTML = WaffleSwitch(f'{WAFFLE_NAMESPACE}.enable_about_sidebar_html')
#     """
#     return LegacyWaffleSwitchNamespace(name=WAFFLE_NAMESPACE, log_prefix='Course Experience: ')

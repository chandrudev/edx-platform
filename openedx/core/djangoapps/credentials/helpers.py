"""
Helpers for the credentials service.
"""

from edx_toggles.toggles import SettingDictToggle

from openedx.core.djangoapps.site_configuration import helpers as config_helpers

# .. toggle_name: FEATURES['ENABLE_LEARNER_RECORDS']
# .. toggle_implementation: SettingDictToggle
# .. toggle_default: True
# .. toggle_description: Enable learner records for the whole platform. This setting may be overridden by site- and
#   org-specific site configurations with the same name.
<<<<<<< HEAD
# .. toggle_warnings: Enabling this feature requires that the definition of the ``CREDENTIALS_PUBLIC_SERVICE_URL``
=======
# .. toggle_warning: Enabling this feature requires that the definition of the ``CREDENTIALS_PUBLIC_SERVICE_URL``
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
#   setting.
# .. toggle_use_cases: open_edx
# .. toggle_creation_date: 2020-10-01
ENABLE_LEARNER_RECORDS = SettingDictToggle(
    "FEATURES", "ENABLE_LEARNER_RECORDS", default=True, module_name=__name__
)


def is_learner_records_enabled():
    return config_helpers.get_value(
        "ENABLE_LEARNER_RECORDS", ENABLE_LEARNER_RECORDS.is_enabled()
    )


def is_learner_records_enabled_for_org(org):
    return config_helpers.get_value_for_org(
        org, "ENABLE_LEARNER_RECORDS", ENABLE_LEARNER_RECORDS.is_enabled()
    )

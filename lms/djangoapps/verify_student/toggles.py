"""
Toggles for verify_student app
"""

<<<<<<< HEAD
from edx_toggles.toggles import LegacyWaffleFlag, LegacyWaffleFlagNamespace

# Namespace for verify_students waffle flags.
WAFFLE_FLAG_NAMESPACE = LegacyWaffleFlagNamespace(name='verify_student')
=======
from edx_toggles.toggles import WaffleFlag

# Namespace for verify_students waffle flags.
WAFFLE_FLAG_NAMESPACE = 'verify_student'
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

# Waffle flag to use new email templates for sending ID verification emails.
# .. toggle_name: verify_student.use_new_email_templates
# .. toggle_implementation: WaffleFlag
# .. toggle_default: False
# .. toggle_description: Supports staged rollout to students for a new email templates
#   implementation for ID verification.
# .. toggle_use_cases: temporary, open_edx
# .. toggle_creation_date: 2020-06-25
# .. toggle_target_removal_date: None
<<<<<<< HEAD
# .. toggle_warnings: This temporary feature toggle does not have a target removal date.
# .. toggle_tickets: PROD-1639
USE_NEW_EMAIL_TEMPLATES = LegacyWaffleFlag(
    waffle_namespace=WAFFLE_FLAG_NAMESPACE,
    flag_name='use_new_email_templates',
    module_name=__name__,
)
=======
# .. toggle_warning: This temporary feature toggle does not have a target removal date.
# .. toggle_tickets: PROD-1639
USE_NEW_EMAIL_TEMPLATES = WaffleFlag(f'{WAFFLE_FLAG_NAMESPACE}.use_new_email_templates', __name__)
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38


def use_new_templates_for_id_verification_emails():
    return USE_NEW_EMAIL_TEMPLATES.is_enabled()

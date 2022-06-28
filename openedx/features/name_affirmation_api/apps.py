"""
Name Affirmation API App Configuration
"""


from django.apps import AppConfig
from django.conf import settings
from edx_proctoring.runtime import set_runtime_service

<<<<<<< HEAD

class NameAffirmationApiConfig(AppConfig):
    """
    Application Configuration for Misc Services.
=======
from openedx.features.name_affirmation_api.utils import get_name_affirmation_service


class NameAffirmationApiConfig(AppConfig):
    """
    Application Configuration for Name Affirmation API.
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    """
    name = 'openedx.features.name_affirmation_api'

    def ready(self):
        """
        Connect services.
        """
        if settings.FEATURES.get('ENABLE_SPECIAL_EXAMS'):
<<<<<<< HEAD
            from edx_name_affirmation.services import NameAffirmationService
            set_runtime_service('name_affirmation', NameAffirmationService())
=======
            name_affirmation_service = get_name_affirmation_service()
            if name_affirmation_service:
                set_runtime_service('name_affirmation', name_affirmation_service)
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

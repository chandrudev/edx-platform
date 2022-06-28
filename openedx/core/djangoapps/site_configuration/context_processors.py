"""
Django template context processors.
"""


from django.conf import settings
<<<<<<< HEAD
from urllib.parse import quote_plus
=======
from urllib.parse import quote_plus  # lint-amnesty, pylint: disable=wrong-import-order
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

from openedx.core.djangoapps.site_configuration import helpers as configuration_helpers


def configuration_context(request):
    """
    Configuration context for django templates.
    """
    return {
        'platform_name': configuration_helpers.get_value('platform_name', settings.PLATFORM_NAME),
        'current_url': quote_plus(request.build_absolute_uri(request.path)),
        'current_site_url': quote_plus(request.build_absolute_uri('/')),
    }

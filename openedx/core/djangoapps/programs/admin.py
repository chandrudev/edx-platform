"""
django admin pages for program support models
"""


from config_models.admin import ConfigurationModelAdmin
from django.contrib import admin
<<<<<<< HEAD

from openedx.core.djangoapps.programs.models import ProgramsApiConfig
=======
from simple_history.admin import SimpleHistoryAdmin

from openedx.core.djangoapps.programs.forms import ProgramDiscussionsConfigurationForm, ProgramLiveConfigurationForm
from openedx.core.djangoapps.programs.models import ProgramsApiConfig, ProgramDiscussionsConfiguration, \
    ProgramLiveConfiguration
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38


class ProgramsApiConfigAdmin(ConfigurationModelAdmin):
    pass


<<<<<<< HEAD
admin.site.register(ProgramsApiConfig, ProgramsApiConfigAdmin)
=======
class ProgramDiscussionsConfigurationAdmin(SimpleHistoryAdmin):
    """
    Customize the admin interface for the program discussions configuration
    """
    form = ProgramDiscussionsConfigurationForm

    fieldsets = (
        (None, {
            'fields': ('program_uuid', 'enabled', 'lti_configuration', 'pii_share_username', 'pii_share_email',
                       'provider_type'),
        }),
    )

    search_fields = (
        'program_uuid',
        'enabled',
        'provider_type',
    )
    list_filter = (
        'enabled',
        'provider_type',
    )


class ProgramLiveConfigurationAdmin(SimpleHistoryAdmin):
    """
    Customize the admin interface for the program live configuration
    """
    form = ProgramLiveConfigurationForm

    fieldsets = (
        (None, {
            'fields': ('program_uuid', 'enabled', 'lti_configuration', 'pii_share_username', 'pii_share_email',
                       'provider_type'),
        }),
    )

    search_fields = (
        'program_uuid',
        'enabled',
        'provider_type',
    )
    list_filter = (
        'enabled',
        'provider_type',
    )


admin.site.register(ProgramsApiConfig, ProgramsApiConfigAdmin)
admin.site.register(ProgramDiscussionsConfiguration, ProgramDiscussionsConfigurationAdmin)
admin.site.register(ProgramLiveConfiguration, ProgramLiveConfigurationAdmin)
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

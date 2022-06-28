"""
Django admin page for waffle utils models
"""

from django.contrib import admin

from config_models.admin import KeyedConfigurationModelAdmin


<<<<<<< HEAD
from .forms import WaffleFlagCourseOverrideAdminForm
from .models import WaffleFlagCourseOverrideModel
=======
from .forms import WaffleFlagCourseOverrideAdminForm, WaffleFlagOrgOverrideAdminForm
from .models import WaffleFlagCourseOverrideModel, WaffleFlagOrgOverrideModel
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38


class WaffleFlagCourseOverrideAdmin(KeyedConfigurationModelAdmin):
    """
    Admin for course override of waffle flags.

    Includes search by course_id and waffle_flag.

    """
    form = WaffleFlagCourseOverrideAdminForm
    search_fields = ['waffle_flag', 'course_id']
    fieldsets = (
        (None, {
            'fields': ('waffle_flag', 'course_id', 'note', 'override_choice', 'enabled'),
<<<<<<< HEAD
            'description': 'Enter a valid course id and an existing waffle flag. The waffle flag name is not validated.'
=======
            'description':
                'Enter a valid course id and an existing waffle flag. The waffle flag name is not validated.'
        }),
    )


class WaffleFlagOrgOverrideAdmin(KeyedConfigurationModelAdmin):
    """
    Admin for org override of waffle flags.

    Includes search by org and waffle_flag.

    """
    form = WaffleFlagOrgOverrideAdminForm
    search_fields = ['waffle_flag', 'org']
    fieldsets = (
        (None, {
            'fields': ('waffle_flag', 'org', 'note', 'override_choice', 'enabled'),
            'description':
                'Enter a valid organization and an existing waffle flag. The waffle flag name is not validated.'
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        }),
    )

admin.site.register(WaffleFlagCourseOverrideModel, WaffleFlagCourseOverrideAdmin)
<<<<<<< HEAD
=======
admin.site.register(WaffleFlagOrgOverrideModel, WaffleFlagOrgOverrideAdmin)
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

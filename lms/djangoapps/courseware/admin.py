"""
Admin view for courseware.
"""


from config_models.admin import ConfigurationModelAdmin, KeyedConfigurationModelAdmin
from django.contrib import admin

from lms.djangoapps.courseware import models

<<<<<<< HEAD
=======

admin.site.register(models.FinancialAssistanceConfiguration, ConfigurationModelAdmin)
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
admin.site.register(models.DynamicUpgradeDeadlineConfiguration, ConfigurationModelAdmin)
admin.site.register(models.OfflineComputedGrade)
admin.site.register(models.OfflineComputedGradeLog)
admin.site.register(models.CourseDynamicUpgradeDeadlineConfiguration, KeyedConfigurationModelAdmin)
admin.site.register(models.OrgDynamicUpgradeDeadlineConfiguration, KeyedConfigurationModelAdmin)
admin.site.register(models.StudentModule)

"""
Django Admin pages for course_apps.
"""

from django.contrib import admin

from .models import CourseAppStatus


class CourseAppStatusAdmin(admin.ModelAdmin):
    """Admin for CourseAppStatus"""
    search_fields = ('course_key', )
    list_display = ('course_key', 'app_id', 'enabled')
<<<<<<< HEAD
=======
    list_filter = ('app_id',)
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38


admin.site.register(CourseAppStatus, CourseAppStatusAdmin)

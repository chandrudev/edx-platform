"""
Configure the django app
"""
from django.apps import AppConfig
from edx_django_utils.plugins import PluginSettings
from edx_django_utils.plugins import PluginURLs

from openedx.core.djangoapps.plugins.constants import ProjectType


class DiscussionsConfig(AppConfig):
    """
    Configure the discussions django app
    """
    name = 'openedx.core.djangoapps.discussions'
    plugin_app = {
        PluginURLs.CONFIG: {
<<<<<<< HEAD
            ProjectType.LMS: {
                PluginURLs.NAMESPACE: '',
                PluginURLs.REGEX: r'^discussions/',
=======
            # TODO: Remove the LMS path once its usage has been removed from frontend-app-course-authoring.
            ProjectType.LMS: {
                PluginURLs.NAMESPACE: '',
                PluginURLs.REGEX: r'^discussions/api/',
                PluginURLs.RELATIVE_PATH: 'urls',
            },
            ProjectType.CMS: {
                PluginURLs.NAMESPACE: '',
                PluginURLs.REGEX: r'^api/discussions/',
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
                PluginURLs.RELATIVE_PATH: 'urls',
            },
        },
        PluginSettings.CONFIG: {
        },
    }
<<<<<<< HEAD
=======

    def ready(self):
        from . import handlers  # pylint: disable=unused-import
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

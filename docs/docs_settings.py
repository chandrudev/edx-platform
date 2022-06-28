"""
Django settings for use when generating API documentation.
Basically the LMS devstack settings plus a few items needed to successfully
import all the Studio code.
"""


import os

<<<<<<< HEAD
from lms.envs.devstack import *  # lint-amnesty, pylint: disable=wildcard-import
from cms.envs.devstack import (  # lint-amnesty, pylint: disable=unused-import
=======
from openedx.core.lib.derived import derive_settings

from lms.envs.common import *  # lint-amnesty, pylint: disable=wildcard-import
from cms.envs.common import (  # lint-amnesty, pylint: disable=unused-import
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    ADVANCED_PROBLEM_TYPES,
    COURSE_IMPORT_EXPORT_STORAGE,
    GIT_EXPORT_DEFAULT_IDENT,
    LIBRARY_AUTHORING_MICROFRONTEND_URL,
    SCRAPE_YOUTUBE_THUMBNAILS_JOB_QUEUE,
    VIDEO_TRANSCRIPT_MIGRATIONS_JOB_QUEUE,
    UPDATE_SEARCH_INDEX_JOB_QUEUE,
<<<<<<< HEAD
=======
    FRONTEND_REGISTER_URL,
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
)

# Turn on all the boolean feature flags, so that conditionally included
# API endpoints will be found.
for key, value in FEATURES.items():
    if value is False:
        FEATURES[key] = True

# Settings that will fail if we enable them, and we don't need them for docs anyway.
FEATURES['RUN_AS_ANALYTICS_SERVER_ENABLED'] = False
<<<<<<< HEAD
=======
FEATURES['ENABLE_SOFTWARE_SECURE_FAKE'] = False
FEATURES['ENABLE_MKTG_SITE'] = False
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

INSTALLED_APPS.extend([
    'cms.djangoapps.contentstore.apps.ContentstoreConfig',
    'cms.djangoapps.course_creators',
    'cms.djangoapps.xblock_config.apps.XBlockConfig',
<<<<<<< HEAD
    'lms.djangoapps.lti_provider'
=======
    'lms.djangoapps.lti_provider',
    'user_tasks',
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
])


COMMON_TEST_DATA_ROOT = ''
<<<<<<< HEAD
=======

derive_settings(__name__)
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

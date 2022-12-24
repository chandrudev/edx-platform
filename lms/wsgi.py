"""
WSGI config for LMS.

This module contains the WSGI application used by Django's development server
and any production WSGI deployments.
It exposes a module-level variable named ``application``. Django's
``runserver`` and ``runfcgi`` commands discover this application via the
``WSGI_APPLICATION`` setting.
"""

# Patch the xml libs
from openedx.core.lib.safe_lxml import defuse_xml_libs
import logging as log
import os  # lint-amnesty, pylint: disable=wrong-import-order, wrong-import-position

defuse_xml_libs()


os.environ.setdefault("DJANGO_SETTINGS_MODULE", "lms.envs.aws")

import lms.startup as startup  
# lint-amnesty, pylint: disable=wrong-import-position
log.info(startup.run())
log.info("startup.run()====================================")
startup.run()

from common.lib.xmodule.xmodule.modulestore.django import modulestore  # lint-amnesty, pylint: disable=wrong-import-position

# Trigger a forced initialization of our modulestores since this can take a
# while to complete and we want this done before HTTP requests are accepted.
modulestore()


# This application object is used by the development server
# as well as any WSGI server configured to use this file.
from django.core.wsgi import get_wsgi_application  # lint-amnesty, pylint: disable=wrong-import-order, wrong-import-position
log.info("wsgi application")
log.info(get_wsgi_application(),"======================================")
application = get_wsgi_application()

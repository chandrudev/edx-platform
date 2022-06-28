"""
WSGI config for CMS.

This module contains the WSGI application used by Django's development server
and any production WSGI deployments.
It exposes a module-level variable named ``application``. Django's
``runserver`` and ``runfcgi`` commands discover this application via the
``WSGI_APPLICATION`` setting.

Import sorting is intentionally disabled in this module.
isort:skip_file
"""

# Patch the xml libs before anything else.
<<<<<<< HEAD
from safe_lxml import defuse_xml_libs
=======
from openedx.core.lib.safe_lxml import defuse_xml_libs
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
defuse_xml_libs()

import os  # lint-amnesty, pylint: disable=wrong-import-order, wrong-import-position
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "cms.envs.aws")

import cms.startup as startup  # lint-amnesty, pylint: disable=wrong-import-position
startup.run()

# This application object is used by the development server
# as well as any WSGI server configured to use this file.
from django.core.wsgi import get_wsgi_application  # lint-amnesty, pylint: disable=wrong-import-order, wrong-import-position
application = get_wsgi_application()

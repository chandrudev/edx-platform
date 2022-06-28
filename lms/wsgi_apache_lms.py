"""
Apache WSGI file for LMS

This module contains the WSGI application used for Apache deployment.
It exposes a module-level variable named ``application``.
"""

# Patch the xml libs before anything else.
<<<<<<< HEAD
from safe_lxml import defuse_xml_libs
=======
from openedx.core.lib.safe_lxml import defuse_xml_libs
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
defuse_xml_libs()

import os  # lint-amnesty, pylint: disable=wrong-import-order, wrong-import-position

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "lms.envs.aws")
os.environ.setdefault("SERVICE_VARIANT", "lms")

import lms.startup as startup  # lint-amnesty, pylint: disable=wrong-import-position
startup.run()

# This application object is used by the development server
# as well as any WSGI server configured to use this file.
from django.core.wsgi import get_wsgi_application  # lint-amnesty, pylint: disable=wrong-import-order, wrong-import-position
application = get_wsgi_application()  # pylint: disable=invalid-name

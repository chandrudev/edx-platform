"""Code run by pylint before running any tests."""
<<<<<<< HEAD
from safe_lxml import defuse_xml_libs
=======

# Patch the xml libs before anything else.
from openedx.core.lib.safe_lxml import defuse_xml_libs
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

defuse_xml_libs()

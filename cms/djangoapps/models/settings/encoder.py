"""
CourseSettingsEncoder
"""


import datetime
import json
from json.encoder import JSONEncoder

from opaque_keys.edx.locations import Location

from openedx.core.djangoapps.models.course_details import CourseDetails
<<<<<<< HEAD
from xmodule.fields import Date
=======
from xmodule.fields import Date  # lint-amnesty, pylint: disable=wrong-import-order
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

from .course_grading import CourseGradingModel


class CourseSettingsEncoder(json.JSONEncoder):
    """
    Serialize CourseDetails, CourseGradingModel, datetime, and old
    Locations
    """
    def default(self, obj):  # lint-amnesty, pylint: disable=arguments-differ, method-hidden
        if isinstance(obj, (CourseDetails, CourseGradingModel)):
            return obj.__dict__
        elif isinstance(obj, Location):
            return obj.dict()
        elif isinstance(obj, datetime.datetime):
            return Date().to_json(obj)
        else:
            return JSONEncoder.default(self, obj)

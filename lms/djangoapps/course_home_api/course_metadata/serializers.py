# pylint: disable=abstract-method
"""
Course Home Course Metadata Serializers. Returns Course Metadata used for all
Course Home pages.
"""


from django.urls import reverse
from django.utils.translation import gettext as _
from rest_framework import serializers

from lms.djangoapps.course_home_api.serializers import VerifiedModeSerializer


class CourseTabSerializer(serializers.Serializer):
    """
    Serializer for the Course Home Tabs
    """
    tab_id = serializers.CharField()
    title = serializers.SerializerMethodField()
    url = serializers.SerializerMethodField()

    def get_title(self, tab):
        title = tab.title or tab.get('name', '')
        return _(title)  # pylint: disable=translation-of-non-string

    def get_url(self, tab):
        request = self.context.get('request')
        return request.build_absolute_uri(tab.link_func(self.context.get('course'), reverse))


class CourseHomeMetadataSerializer(VerifiedModeSerializer):
    """
    Serializer for the Course Home Course Metadata
    """
<<<<<<< HEAD
    can_load_courseware = serializers.BooleanField()
=======
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    celebrations = serializers.DictField()
    course_access = serializers.DictField()
    course_id = serializers.CharField()
    is_enrolled = serializers.BooleanField()
    is_self_paced = serializers.BooleanField()
    is_staff = serializers.BooleanField()
    number = serializers.CharField()
    org = serializers.CharField()
    original_user_is_staff = serializers.BooleanField()
    start = serializers.DateTimeField()  # used for certain access denied errors
    tabs = CourseTabSerializer(many=True)
    title = serializers.CharField()
    username = serializers.CharField()
    user_timezone = serializers.CharField()
<<<<<<< HEAD
=======
    can_view_certificate = serializers.BooleanField()
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

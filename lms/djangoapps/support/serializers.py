"""
Serializers for use in the support app.
"""
import json

<<<<<<< HEAD
from django.urls import reverse
=======
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
from rest_framework import serializers

from common.djangoapps.student.models import CourseEnrollment, ManualEnrollmentAudit
from lms.djangoapps.program_enrollments.models import ProgramCourseEnrollment, ProgramEnrollment
from openedx.core.djangoapps.catalog.utils import get_programs_by_uuids
<<<<<<< HEAD
from openedx.features.course_experience import default_course_url_name
=======
from openedx.features.course_experience import default_course_url
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

DATETIME_FORMAT = '%Y-%m-%dT%H:%M:%S'
# pylint: disable=abstract-method


class ManualEnrollmentSerializer(serializers.ModelSerializer):
    """Serializes a manual enrollment audit object."""
    enrolled_by = serializers.SlugRelatedField(slug_field='email', read_only=True, default='')

    class Meta:
        model = ManualEnrollmentAudit
        fields = ('enrolled_by', 'time_stamp', 'reason')


class CourseEnrollmentSerializer(serializers.Serializer):
    """ Serializers a student_courseenrollment model object """
    course_id = serializers.CharField()
    is_active = serializers.BooleanField()
    mode = serializers.CharField()

    class Meta:
        model = CourseEnrollment


class ProgramCourseEnrollmentSerializer(serializers.Serializer):
    """ Serializes a Program Course Enrollment model object """
    created = serializers.DateTimeField(format=DATETIME_FORMAT)
    modified = serializers.DateTimeField(format=DATETIME_FORMAT)
    status = serializers.CharField()
    course_key = serializers.CharField()
    course_enrollment = CourseEnrollmentSerializer()
    course_url = serializers.SerializerMethodField()

    class Meta:
        model = ProgramCourseEnrollment

    def get_course_url(self, obj):
<<<<<<< HEAD
        course_url_name = default_course_url_name(obj.course_key)
        return reverse(course_url_name, kwargs={'course_id': obj.course_key})
=======
        return default_course_url(obj.course_key)
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38


class ProgramEnrollmentSerializer(serializers.Serializer):
    """ Serializes a Program Enrollment Model object """
    created = serializers.DateTimeField(format=DATETIME_FORMAT)
    modified = serializers.DateTimeField(format=DATETIME_FORMAT)
    external_user_key = serializers.CharField()
    status = serializers.CharField()
    program_uuid = serializers.UUIDField()
    program_course_enrollments = ProgramCourseEnrollmentSerializer(many=True)
    program_name = serializers.SerializerMethodField()

    class Meta:
        model = ProgramEnrollment

    def get_program_name(self, obj):
        program_list = get_programs_by_uuids([obj.program_uuid])
        return next(iter(program_list), {}).get('title', '')


def serialize_user_info(user, user_social_auths=None):
    """
    Helper method to serialize resulting in user_info_object
    based on passed in django models
    """
    user_info = {
        'username': user.username,
        'email': user.email,
    }
    if user_social_auths:
        for user_social_auth in user_social_auths:
            user_info.setdefault('sso_list', []).append({
                'uid': user_social_auth.uid,
            })
    return user_info


<<<<<<< HEAD
def serialize_sso_records(user_social_auths):
    """
    Serialize user social auth model object
    """
    sso_records = []
    for user_social_auth in user_social_auths:
        sso_records.append({
            'provider': user_social_auth.provider,
            'uid': user_social_auth.uid,
            'created': user_social_auth.created,
            'modified': user_social_auth.modified,
            'extraData': json.dumps(user_social_auth.extra_data),
        })
    return sso_records
=======
def serialize_sso_records(user_social_auth, user_social_auths_history):
    """
    Serialize user social auth model object
    """
    sso_records = {
        'provider': user_social_auth.provider,
        'uid': user_social_auth.uid,
        'created': user_social_auth.created,
        'modified': user_social_auth.modified,
        'history': serialize_sso_history(
            user_social_auths_history
        ),
        'extraData': json.dumps(user_social_auth.extra_data),
    }
    return sso_records


def serialize_sso_history(user_social_auths_history):
    """
    Serialize history for user social auth model object
    """
    history = []
    for sso_history in user_social_auths_history:
        history.append({
            'uid': sso_history.uid,
            'provider': sso_history.provider,
            'created': sso_history.created,
            'modified': sso_history.modified,
            'extraData': json.dumps(sso_history.extra_data),
            'history_date': sso_history.history_date
        })
    return history
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

"""
Serializers for all Course Enrollment related return objects.
"""


import logging
from opaque_keys.edx.keys import CourseKey
from xmodule.modulestore.django import modulestore
from lms.djangoapps.courseware.courses import (
    get_course_with_access,get_permission_for_course_about,)

from rest_framework import serializers

from common.djangoapps.course_modes.models import CourseMode , get_course_prices ,format_course_price ,get_cosmetic_display_price
from common.djangoapps.student.models import CourseEnrollment , LiveClassEnrollment
from openedx.core.djangoapps.content.course_overviews.models import LiveClasses, CourseOverview
import datetime

log = logging.getLogger(__name__)


class StringListField(serializers.CharField):
    """Custom Serializer for turning a comma delimited string into a list.

    This field is designed to take a string such as "1,2,3" and turn it into an actual list
    [1,2,3]

    """
    def field_to_native(self, obj, field_name):  # pylint: disable=unused-argument
        """
        Serialize the object's class name.
        """
        if not obj.suggested_prices:
            return []

        items = obj.suggested_prices.split(',')
        return [int(item) for item in items]

class LiveClassesSerializer(serializers.ModelSerializer):

    #course_id = serializers.CharField()

    created_by_id = serializers.CharField(source="created_by", read_only=True)


    class Meta:
        
        model = LiveClasses
        
        fields = ('id', 'start_time' ,'end_time' , 'start_date' , 'end_date' , 'room_key' , 'room_name', 'topic_name' , 'client_token', 'meeting_link' ,'created_by_id', 'created_date' , 'meeting_notes' , 'is_recurrence_meeting')

    def create(self, validated_data ):
        validated_data['created_date']= datetime.datetime.now()
        validated_data['created_by_id']= self.context['user'].id
        return LiveClasses.objects.create(**validated_data)


    def update(self, instance, validated_data):
        super(LiveClassesSerializer, self).update(instance, validated_data)
        return instance   


class CourseSerializer(serializers.Serializer):  # pylint: disable=abstract-method
    """
    Serialize a course descriptor and related information.
    """

    course_id = serializers.CharField(source="id")
    course_name = serializers.CharField(source="display_name_with_default")
    enrollment_start = serializers.DateTimeField(format=None)
    enrollment_end = serializers.DateTimeField(format=None)
    course_start = serializers.DateTimeField(source="start", format=None)
    course_end = serializers.DateTimeField(source="end", format=None)
    invite_only = serializers.BooleanField(source="invitation_only")
    course_modes = serializers.SerializerMethodField()
    pacing_type = serializers.SerializerMethodField()

    class Meta:
        # For disambiguating within the drf-yasg swagger schema
        ref_name = 'enrollment.Course'

    def __init__(self, *args, **kwargs):
        self.include_expired = kwargs.pop("include_expired", False)
        super().__init__(*args, **kwargs)

    def get_course_modes(self, obj):
        """
        Retrieve course modes associated with the course.
        """
        course_modes = CourseMode.modes_for_course(
            obj.id,
            include_expired=self.include_expired,
            only_selectable=False
        )
        return [
            ModeSerializer(mode).data
            for mode in course_modes
        ]

    def get_pacing_type(self, obj):
        """
        Get a string representation of the course pacing.
        """
        return "Self Paced" if obj.self_paced else "Instructor Paced"


class CourseEnrollmentSerializer(serializers.ModelSerializer):
    """Serializes CourseEnrollment models

    Aggregates all data from the Course Enrollment table, and pulls in the serialization for
    the Course Descriptor and course modes, to give a complete representation of course enrollment.

    """
    #price = serializers.SerializerMethodField()
    course_details = CourseSerializer(source="course_overview")
    #course_live_class= LiveClassesSerializer()

    #live_class_details= serializers.SerializerMethodField()
    user = serializers.SerializerMethodField('get_username')


    # def get_price(self , obj):   #(request, course_id):
    #     price = get_course_prices(
    #         obj.course
    #         )
    #     log.info("____course-Price______", price , obj)
    #     return price 



    def get_username(self, model):
        """Retrieves the username from the associated model."""
        return model.username


    # def get_live_class_details(self , obj):


    #     live_classes = LiveClasses.live_class_for_course(
    #         obj.course_id ,)

    #     return[
    #         LiveClassesDetailsSerializer(classes).data
    #         for classes in live_classes
    #     ]


    class Meta:
        model = CourseEnrollment
        fields = ('created', 'mode', 'is_active', 'course_details', 'user' , 'course_price') # , 'live_class_details') #,'live_class_details' ,'course_live_class' ) # , 'price')
        lookup_field = 'username'

    


class CourseEnrollmentsApiListSerializer(CourseEnrollmentSerializer):
    """
    Serializes CourseEnrollment model and returns a subset of fields returned
    by the CourseEnrollmentSerializer.
    """
    course_id = serializers.CharField(source='course_overview.id')

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields.pop('course_details')

    class Meta(CourseEnrollmentSerializer.Meta):
        fields = CourseEnrollmentSerializer.Meta.fields + ('course_id',)


class ModeSerializer(serializers.Serializer):  # pylint: disable=abstract-method
    """Serializes a course's 'Mode' tuples

    Returns a serialized representation of the modes available for course enrollment. The course
    modes models are designed to return a tuple instead of the model object itself. This serializer
    does not handle the model object itself, but the tuple.

    """
    slug = serializers.CharField(max_length=100)
    name = serializers.CharField(max_length=255)
    min_price = serializers.IntegerField()
    suggested_prices = StringListField(max_length=255)
    currency = serializers.CharField(max_length=8)
    expiration_datetime = serializers.DateTimeField()
    description = serializers.CharField()
    sku = serializers.CharField()
    bulk_sku = serializers.CharField()



# class LiveClassesDetailsSerializer(serializers.Serializer): 

#     start_time = serializers.TimeField()
#     end_time = serializers.TimeField()
#     end_date= serializers.TimeField()
#     room_key = serializers.CharField()
#     room_name = serializers.CharField()
#     topic_name = serializers.CharField()
#     start_date = serializers.DateTimeField()
#     client_token = serializers.CharField()
#     meeting_link = serializers.CharField()
#     created_date = serializers.DateTimeField()
#     created_by = serializers.CharField()
#     meeting_notes = serializers.CharField()
#     is_recurrence_meeting = serializers.BooleanField()



# class LiveClassEnrollmentSerializer(serializers.ModelSerializer):


#     live_class =LiveClassesSerializer()
#     #user= serializers.SerializerMethodField()
#     user_id = serializers.CharField(source="user", read_only=True)


#     #user = serializers.SerializerMethodField('get_username')




#     # def get_username(self, model):
#     #     """Retrieves the username from the associated model."""
#     #     return model.username



#     class Meta:
#         model = LiveClassEnrollment
#         fields = ('id' , 'user_id', 'live_class')
    


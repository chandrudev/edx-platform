"""
<<<<<<< HEAD
Handle view-logic for the djangoapp
"""
from edx_rest_framework_extensions.auth.jwt.authentication import JwtAuthentication
from edx_rest_framework_extensions.auth.session.authentication import SessionAuthenticationAllowInactiveUser
from rest_framework.permissions import BasePermission
from rest_framework.exceptions import PermissionDenied
from rest_framework.response import Response
from rest_framework.views import APIView

from common.djangoapps.student.roles import CourseStaffRole, GlobalStaff
from openedx.core.djangoapps.content.course_overviews.models import CourseOverview
from openedx.core.lib.api.authentication import BearerAuthenticationAllowInactiveUser
from openedx.core.lib.api.view_utils import validate_course_key
from .models import DiscussionsConfiguration
from .serializers import DiscussionsConfigurationSerializer


class IsStaff(BasePermission):
    """
    Check if user is global or course staff

    We create our own copy of this because other versions of this check
    allow access to additional user roles.
    """

    def has_permission(self, request, view):
        """
        Check if user has global or course staff permission
        """
        user = request.user
        if user.is_staff:
            return True
        course_key_string = view.kwargs.get('course_key_string')
        course_key = validate_course_key(course_key_string)
        return CourseStaffRole(
            course_key,
        ).has_user(request.user)


def user_permissions_for_course(course, user):
    """
    Return the user's permissions over the discussion configuration of the course.
    """
    return {
        "change_provider": not course.has_started() or GlobalStaff().has_user(user),
    }

PERMISSION_MESSAGES = {
    "change_provider": "Must be global staff to change discussion provider after the course has started.",
}

DEFAULT_MESSAGE = "You're not authorized to perform this operation."


def check_course_permissions(course, user, permission):
    """
    Check the user has permissions for the operation over the course configuration.

    Raises PermissionDenied if the user does not have permission
    """
    permissions = user_permissions_for_course(course, user)
    granted = permissions.get(permission)
    if not granted:
        raise PermissionDenied(PERMISSION_MESSAGES.get(permission, DEFAULT_MESSAGE))


class DiscussionsConfigurationView(APIView):
    """
    Handle configuration-related view-logic
=======
Handle view-logic for the discussions app.
"""
from typing import Dict

import edx_api_doc_tools as apidocs
from edx_rest_framework_extensions.auth.jwt.authentication import JwtAuthentication
from edx_rest_framework_extensions.auth.session.authentication import SessionAuthenticationAllowInactiveUser
from rest_framework.exceptions import ValidationError
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.views import APIView

from lms.djangoapps.discussion.toggles import ENABLE_NEW_STRUCTURE_DISCUSSIONS
from openedx.core.djangoapps.content.course_overviews.models import CourseOverview
from openedx.core.lib.api.authentication import BearerAuthenticationAllowInactiveUser
from openedx.core.lib.api.view_utils import validate_course_key
from .models import AVAILABLE_PROVIDER_MAP, DiscussionsConfiguration, Features, Provider
from .permissions import IsStaffOrCourseTeam, check_course_permissions
from .serializers import (
    DiscussionsConfigurationSerializer,
    DiscussionsProvidersSerializer,
)


class DiscussionsConfigurationSettingsView(APIView):
    """
    View for configuring discussion settings.
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    """
    authentication_classes = (
        JwtAuthentication,
        BearerAuthenticationAllowInactiveUser,
        SessionAuthenticationAllowInactiveUser
    )
<<<<<<< HEAD
    permission_classes = (IsStaff,)

    # pylint: disable=redefined-builtin
    def get(self, request, course_key_string: str, **_kwargs) -> Response:
        """
        Handle HTTP/GET requests
        """
        course_key = validate_course_key(course_key_string)
        configuration = DiscussionsConfiguration.get(course_key)
=======
    permission_classes = (IsStaffOrCourseTeam,)

    @apidocs.schema(
        parameters=[
            apidocs.string_parameter(
                'course_id',
                apidocs.ParameterLocation.PATH,
                description="The course for which to get provider list",
            ),
            apidocs.string_parameter(
                'provider_id',
                apidocs.ParameterLocation.QUERY,
                description="The provider_id to fetch data for"
            )
        ],
        responses={
            200: DiscussionsConfigurationSerializer,
            400: "Invalid provider ID",
            401: "The requester is not authenticated.",
            403: "The requester cannot access the specified course.",
            404: "The requested course does not exist.",
        },
    )
    def get(self, request: Request, course_key_string: str, **_kwargs) -> Response:
        """
        Handle HTTP/GET requests
        """
        data = self.get_configuration_data(request, course_key_string)
        return Response(data)

    @staticmethod
    def get_configuration_data(request: Request, course_key_string: str) -> Dict:
        """
        Get discussions configuration data for the course
        Args:
            request (Request): a DRF request
            course_key_string (str): a course key string

        Returns:
            Dict: Discussion configuration data for the course
        """
        course_key = validate_course_key(course_key_string)
        configuration = DiscussionsConfiguration.get(course_key)
        provider_type = request.query_params.get('provider_id', None)
        if provider_type and provider_type not in AVAILABLE_PROVIDER_MAP:
            raise ValidationError("Unsupported provider type")
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        serializer = DiscussionsConfigurationSerializer(
            configuration,
            context={
                'user_id': request.user.id,
<<<<<<< HEAD
            }
        )
        return Response(serializer.data)
=======
                'provider_type': provider_type,
            }
        )
        return serializer.data
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

    def post(self, request, course_key_string: str, **_kwargs) -> Response:
        """
        Handle HTTP/POST requests
        """
<<<<<<< HEAD
=======
        data = self.update_configuration_data(request, course_key_string)
        return Response(data)

    @staticmethod
    def update_configuration_data(request, course_key_string):
        """
        Update discussion configuration for the course based on data in the request.
        Args:
            request (Request): a DRF request
            course_key_string (str): a course key string

        Returns:
            Dict: modified course configuration data
        """
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        course_key = validate_course_key(course_key_string)
        configuration = DiscussionsConfiguration.get(course_key)
        course = CourseOverview.get_from_id(course_key)
        serializer = DiscussionsConfigurationSerializer(
            configuration,
            context={
                'user_id': request.user.id,
            },
            data=request.data,
            partial=True,
        )
        if serializer.is_valid(raise_exception=True):
<<<<<<< HEAD
            if serializer.validated_data['provider_type'] != configuration.provider_type:
                check_course_permissions(course, request.user, 'change_provider')

            serializer.save()
        return Response(serializer.data)
=======
            new_provider_type = serializer.validated_data.get('provider_type', None)
            if new_provider_type is not None and new_provider_type != configuration.provider_type:
                check_course_permissions(course, request.user, 'change_provider')

            serializer.save()
        return serializer.data


class DiscussionsProvidersView(APIView):
    """
    Read only view that lists details of discussion providers available for a course.
    """
    authentication_classes = (
        JwtAuthentication,
        BearerAuthenticationAllowInactiveUser,
        SessionAuthenticationAllowInactiveUser
    )
    permission_classes = (IsStaffOrCourseTeam,)

    @apidocs.schema(
        parameters=[
            apidocs.string_parameter(
                'course_id',
                apidocs.ParameterLocation.PATH,
                description="The course for which to get provider list",
            )
        ],
        responses={
            200: DiscussionsProvidersSerializer,
            401: "The requester is not authenticated.",
            403: "The requester cannot access the specified course.",
            404: "The requested course does not exist.",
        },
    )
    def get(self, request, course_key_string: str, **_kwargs) -> Response:
        """
        Handle HTTP/GET requests
        """
        data = self.get_provider_data(course_key_string)
        return Response(data)

    @staticmethod
    def get_provider_data(course_key_string: str) -> Dict:
        """
        Get provider data for specified course
        Args:
            course_key_string (str): course key string

        Returns:
            Dict: course discussion providers
        """
        course_key = validate_course_key(course_key_string)
        configuration = DiscussionsConfiguration.get(course_key)
        hidden_providers = []
        # If the user is currently using the legacy provider, don't show the new provider
        # TODO: Allow switching between legacy and new providers
        if configuration.provider_type == Provider.LEGACY:
            hidden_providers.append(Provider.OPEN_EDX)
        # If the user is currently using the new provider, don't show the legacy provider
        elif configuration.provider_type == Provider.OPEN_EDX:
            hidden_providers.append(Provider.LEGACY)
        else:
            # If this is a new course, or some other provider is selected, the new provider
            # should only show up if the new structure for in context discussions flag is enabled
            if not ENABLE_NEW_STRUCTURE_DISCUSSIONS.is_enabled(course_key):
                hidden_providers.append(Provider.OPEN_EDX)
        serializer = DiscussionsProvidersSerializer(
            {
                'features': [
                    {'id': feature.value, 'feature_support_type': feature.feature_support_type}
                    for feature in Features
                ],
                'active': configuration.provider_type,
                'available': {
                    key: value
                    for key, value in AVAILABLE_PROVIDER_MAP.items()
                    if key not in hidden_providers
                },
            }
        )
        return serializer.data


class CombinedDiscussionsConfigurationView(DiscussionsConfigurationSettingsView):
    """
    Combined view that includes both provider data and discussion configuration.

    Note:
        This is temporary code for backwards-compatibility and will be removed soon
        after the frontend supports the new split APIs.
    """

    def get(self, request: Request, course_key_string: str, **_kwargs) -> Response:
        """
        Handle HTTP/GET requests
        """
        config_data = self.get_configuration_data(request, course_key_string)
        provider_data = DiscussionsProvidersView.get_provider_data(course_key_string)
        return Response({
            **config_data,
            "features": provider_data["features"],
            "providers": {
                "active": provider_data["active"],
                "available": provider_data["available"],
            },
        })

    def post(self, request, course_key_string: str, **_kwargs) -> Response:
        """
        Handle HTTP/POST requests
        """
        config_data = self.update_configuration_data(request, course_key_string)
        provider_data = DiscussionsProvidersView.get_provider_data(course_key_string)
        return Response(
            {
                **config_data,
                "features": provider_data["features"],
                "providers": {
                    "active": provider_data["active"],
                    "available": provider_data["available"],
                },
            }
        )
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

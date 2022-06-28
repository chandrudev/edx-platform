"""
The Python API layer of the country access settings. Essentially the middle tier of the project, responsible for all
business logic that is not directly tied to the data itself.

This API is exposed via the middleware(emabargo/middileware.py) layer but may be used directly in-process.

"""

import logging
<<<<<<< HEAD

from django.conf import settings
from django.core.cache import cache
from ipware.ip import get_client_ip
from rest_framework import status
from rest_framework.response import Response

from common.djangoapps.student.auth import has_course_author_access
from openedx.core.djangoapps.geoinfo.api import country_code_from_ip
=======
from typing import List, Optional

from django.conf import settings
from django.core.cache import cache
from opaque_keys.edx.keys import CourseKey
from rest_framework import status
from rest_framework.request import Request
from rest_framework.response import Response

from common.djangoapps.student.auth import has_course_author_access
from openedx.core import types
from openedx.core.djangoapps.geoinfo.api import country_code_from_ip
from openedx.core.djangoapps.util import ip
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

from .models import CountryAccessRule, RestrictedCourse

log = logging.getLogger(__name__)


<<<<<<< HEAD
def redirect_if_blocked(course_key, access_point='enrollment', **kwargs):
    """Redirect if the user does not have access to the course. In case of blocked if access_point
    is not enrollment and course has enabled is_disabled_access_check then user can view that course.

    Arguments:
        course_key (CourseKey): Location of the course the user is trying to access.

    Keyword Arguments:
        Same as `check_course_access` and `message_url_path`

    """
    if settings.FEATURES.get('EMBARGO'):
        is_blocked = not check_course_access(course_key, **kwargs)
=======
def redirect_if_blocked(
    request: Request,
    course_key: CourseKey,
    access_point: str = 'enrollment',
    user: Optional[types.User] = None,
) -> Optional[str]:
    """
    Redirect if the user does not have access to the course.

    Even if the user would normally be blocked, if the given access_point is 'courseware' and the course has enabled
    the `is_disabled_access_check` flag, then the user can still view that course.

    Arguments:
        request: The current request to be checked.
        course_key: Location of the course the user is trying to access.
        access_point: Type of page being accessed (e.g. 'courseware', 'enrollment', etc)
        user: User to check for (uses request.user if None)

    Returns:
        If blocked, a URL path to a page explaining why the user was blocked. Else None.
    """
    if settings.FEATURES.get('EMBARGO'):
        if ip.USE_LEGACY_IP.is_enabled():
            client_ips = [ip.get_legacy_ip(request)]
        else:
            client_ips = ip.get_all_client_ips(request)
        user = user or request.user
        is_blocked = not check_course_access(course_key, user=user, ip_addresses=client_ips, url=request.path)
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        if is_blocked:
            if access_point == "courseware":
                if not RestrictedCourse.is_disabled_access_check(course_key):
                    return message_url_path(course_key, access_point)
            else:
                return message_url_path(course_key, access_point)


<<<<<<< HEAD
def check_course_access(course_key, user=None, ip_address=None, url=None):
    """
    Check is the user with this ip_address has access to the given course

    Arguments:
        course_key (CourseKey): Location of the course the user is trying to access.

    Keyword Arguments:
        user (User): The user making the request.  Can be None, in which case
            the user's profile country will not be checked.
        ip_address (str): The IP address of the request.
        url (str): The URL the user is trying to access.  Used in
            log messages.

    Returns:
        Boolean: True if the user has access to the course; False otherwise
=======
def check_course_access(
        course_key: CourseKey,
        user: Optional[types.User] = None,
        ip_addresses: Optional[List[str]] = None,
        url: Optional[str] = None,
) -> bool:
    """
    Check is the user with this ip_addresses chain has access to the given course

    Arguments:
        course_key: Location of the course the user is trying to access.
        user: The user making the request. Can be None, in which case the user's profile country will not be checked.
        ip_addresses: The full external chain of IP addresses of the request.
        url: The URL the user is trying to access. Used in log messages.

    Returns:
        True if the user has access to the course; False otherwise
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

    """
    # No-op if the country access feature is not enabled
    if not settings.FEATURES.get('EMBARGO'):
        return True

    # First, check whether there are any restrictions on the course.
    # If not, then we do not need to do any further checks
    course_is_restricted = RestrictedCourse.is_restricted_course(course_key)

    if not course_is_restricted:
        return True

    # Always give global and course staff access, regardless of embargo settings.
    if user is not None and has_course_author_access(user, course_key):
        return True

<<<<<<< HEAD
    if ip_address is not None:
        # Retrieve the country code from the IP address
        # and check it against the allowed countries list for a course
        user_country_from_ip = country_code_from_ip(ip_address)

        if not CountryAccessRule.check_country_access(course_key, user_country_from_ip):
            log.info(
                (
                    "Blocking user %s from accessing course %s at %s "
                    "because the user's IP address %s appears to be "
                    "located in %s."
                ),
                getattr(user, 'id', '<Not Authenticated>'),
                course_key,
                url,
                ip_address,
                user_country_from_ip
            )
            return False
=======
    if ip_addresses is not None:
        # Check every IP address provided and deny access if ANY of them fail our country checks
        for ip_address in ip_addresses:
            # Retrieve the country code from the IP address
            # and check it against the allowed countries list for a course
            user_country_from_ip = country_code_from_ip(ip_address)

            if not CountryAccessRule.check_country_access(course_key, user_country_from_ip):
                log.info(
                    (
                        "Blocking user %s from accessing course %s at %s "
                        "because the user's IP address %s appears to be "
                        "located in %s."
                    ),
                    getattr(user, 'id', '<Not Authenticated>'),
                    course_key,
                    url,
                    ip_address,
                    user_country_from_ip
                )
                return False
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

    if user is not None:
        # Retrieve the country code from the user's profile
        # and check it against the allowed countries list for a course.
        user_country_from_profile = _get_user_country_from_profile(user)

        if not CountryAccessRule.check_country_access(course_key, user_country_from_profile):
            log.info(
                (
                    "Blocking user %s from accessing course %s at %s "
                    "because the user's profile country is %s."
                ),
                user.id, course_key, url, user_country_from_profile
            )
            return False

    return True


<<<<<<< HEAD
def message_url_path(course_key, access_point):
    """Determine the URL path for the message explaining why the user was blocked.
=======
def message_url_path(course_key: CourseKey, access_point: str) -> str:
    """
    Determine the URL path for the message explaining why the user was blocked.
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

    This is configured per-course.  See `RestrictedCourse` in the `embargo.models`
    module for more details.

    Arguments:
<<<<<<< HEAD
        course_key (CourseKey): The location of the course.
        access_point (str): How the user was trying to access the course.
            Can be either "enrollment" or "courseware".

    Returns:
        unicode: The URL path to a page explaining why the user was blocked.
=======
        course_key: The location of the course.
        access_point: How the user was trying to access the course. Can be either "enrollment" or "courseware".

    Returns:
        The URL path to a page explaining why the user was blocked.
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

    Raises:
        InvalidAccessPoint: Raised if access_point is not a supported value.

    """
    return RestrictedCourse.message_url_path(course_key, access_point)


<<<<<<< HEAD
def _get_user_country_from_profile(user):
=======
def _get_user_country_from_profile(user: types.User) -> str:
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    """
    Check whether the user is embargoed based on the country code in the user's profile.

    Args:
        user (User): The user attempting to access courseware.

    Returns:
        user country from profile.

    """
    cache_key = f'user.{user.id}.profile.country'
    profile_country = cache.get(cache_key)
    if profile_country is None:
        profile = getattr(user, 'profile', None)
        if profile is not None and profile.country.code is not None:
            profile_country = profile.country.code.upper()
        else:
            profile_country = ""
        cache.set(cache_key, profile_country)

    return profile_country


<<<<<<< HEAD
def get_embargo_response(request, course_id, user):
=======
def get_embargo_response(request: Request, course_key: CourseKey, user: types.User) -> Optional[Response]:
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    """
    Check whether any country access rules block the user from enrollment.

    Args:
<<<<<<< HEAD
        request (HttpRequest): The request object
        course_id (str): The requested course ID
        user (str): The current user object

    Returns:
        HttpResponse: Response of the embargo page if embargoed, None if not

    """
    redirect_url = redirect_if_blocked(
        course_id, user=user, ip_address=get_client_ip(request)[0], url=request.path)
=======
        request: The request object
        course_key: The requested course ID
        user: The current user object

    Returns:
        Response of the embargo page if embargoed, None if not

    """
    redirect_url = redirect_if_blocked(request, course_key, user=user)
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    if redirect_url:
        return Response(
            status=status.HTTP_403_FORBIDDEN,
            data={
                "message": (
                    "Users from this location cannot access the course '{course_id}'."
<<<<<<< HEAD
                ).format(course_id=course_id),
=======
                ).format(course_id=str(course_key)),
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
                "user_message_url": request.build_absolute_uri(redirect_url)
            }
        )

"""
Views for SSO records.
"""

from django.contrib.auth.models import User  # lint-amnesty, pylint: disable=imported-auth-user
from django.db.models import Q
from django.utils.decorators import method_decorator
from rest_framework.generics import GenericAPIView
from social_django.models import UserSocialAuth

from common.djangoapps.util.json_request import JsonResponse
from lms.djangoapps.support.decorators import require_support_permission
<<<<<<< HEAD
from lms.djangoapps.support.serializers import serialize_sso_records
=======
from lms.djangoapps.support.serializers import (
    serialize_sso_records,
)
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38


class SsoView(GenericAPIView):
    """
    Returns a list of SSO records for a given user.
<<<<<<< HEAD
=======
    Sample response:
    Sample response:
    [
        {
            "provider": "tpa-saml",
            "uid": "new-channel:testuser",
            "created": "2022-03-02T04:41:33.145Z",
            "modified": "2022-03-15T11:28:17.809Z",
            "extraData": "{}",
            "history":
            [
                {
                    "uid": "new-channel:testuser",
                    "provider": "tpa-saml",
                    "created": "2022-03-02T04:41:33.145Z",
                    "modified": "2022-03-15T11:28:17.809Z",
                    "extraData": "{}",
                    "history_date": "2022-03-15T11:28:17.832Z"
                },
                {
                    "uid": "default-channel:testuser",
                    "provider": "tpa-saml",
                    "created": "2022-03-02T04:41:33.145Z",
                    "modified": "2022-03-10T12:28:32.720Z",
                    "extraData": "{}",
                    "history_date": "2022-03-15T11:12:02.420Z"
                }
            ]
        }
    ]
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    """
    @method_decorator(require_support_permission)
    def get(self, request, username_or_email):  # lint-amnesty, pylint: disable=missing-function-docstring
        try:
            user = User.objects.get(Q(username=username_or_email) | Q(email=username_or_email))
        except User.DoesNotExist:
            return JsonResponse([])
        user_social_auths = UserSocialAuth.objects.filter(user=user)
<<<<<<< HEAD
        sso_records = serialize_sso_records(user_social_auths)
=======
        sso_records = []
        for user_social_auth in user_social_auths:
            user_social_auths_history = UserSocialAuth.history.filter(id=user_social_auth.id)
            sso_records.append(serialize_sso_records(user_social_auth, user_social_auths_history))
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        return JsonResponse(sso_records)

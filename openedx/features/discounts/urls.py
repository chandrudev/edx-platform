"""
Discount API URLs
"""


from django.conf import settings
<<<<<<< HEAD
from django.conf.urls import url
=======
from django.urls import re_path
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

from .views import CourseUserDiscount, CourseUserDiscountWithUserParam

urlpatterns = [
<<<<<<< HEAD
    url(fr'^course/{settings.COURSE_KEY_PATTERN}', CourseUserDiscount.as_view(), name='course_user_discount'),
    url(fr'^user/(?P<user_id>[^/]*)/course/{settings.COURSE_KEY_PATTERN}',
        CourseUserDiscountWithUserParam.as_view(),
        name='course_user_discount_with_param'),
=======
    re_path(fr'^course/{settings.COURSE_KEY_PATTERN}', CourseUserDiscount.as_view(), name='course_user_discount'),
    re_path(fr'^user/(?P<user_id>[^/]*)/course/{settings.COURSE_KEY_PATTERN}',
            CourseUserDiscountWithUserParam.as_view(),
            name='course_user_discount_with_param'),
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
]

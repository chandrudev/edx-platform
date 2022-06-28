"""
Defines URLs for the learner profile.
"""


from django.conf import settings
<<<<<<< HEAD
from django.conf.urls import url
=======
from django.urls import path, re_path
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

from openedx.features.learner_profile.views.learner_profile import learner_profile

from .views.learner_achievements import LearnerAchievementsFragmentView

urlpatterns = [
<<<<<<< HEAD
    url(
=======
    re_path(
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        r'^{username_pattern}$'.format(
            username_pattern=settings.USERNAME_PATTERN,
        ),
        learner_profile,
        name='learner_profile',
    ),
<<<<<<< HEAD
    url(
        r'^achievements$',
        LearnerAchievementsFragmentView.as_view(),
        name='openedx.learner_profile.learner_achievements_fragment_view',
    ),
=======
    path('achievements', LearnerAchievementsFragmentView.as_view(),
         name='openedx.learner_profile.learner_achievements_fragment_view',
         ),
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
]

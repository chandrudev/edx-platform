"""
Provide django models to back the discussions app
"""
from __future__ import annotations

import logging
<<<<<<< HEAD
from enum import Enum
from collections import namedtuple
=======
from collections import namedtuple
from typing import List, Type, TypeVar
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

from django.conf import settings
from django.core.exceptions import ValidationError
from django.db import models
from django.utils.translation import gettext_lazy as _
from django_mysql.models import ListCharField
<<<<<<< HEAD
from jsonfield import JSONField
from lti_consumer.models import LtiConfiguration
from model_utils.models import TimeStampedModel
from opaque_keys.edx.django.models import LearningContextKeyField
=======
from enum import Enum  # lint-amnesty, pylint: disable=wrong-import-order
from jsonfield import JSONField
from lti_consumer.models import LtiConfiguration
from model_utils.models import TimeStampedModel
from opaque_keys.edx.django.models import LearningContextKeyField, UsageKeyField
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
from opaque_keys.edx.keys import CourseKey
from simple_history.models import HistoricalRecords

from openedx.core.djangoapps.config_model_utils.models import StackedConfigurationModel
from openedx.core.djangoapps.content.course_overviews.models import CourseOverview
<<<<<<< HEAD
=======
from openedx.core.djangoapps.course_groups.models import CourseUserGroup
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
from openedx.core.djangoapps.site_configuration import helpers as configuration_helpers

log = logging.getLogger(__name__)

<<<<<<< HEAD
DEFAULT_PROVIDER_TYPE = 'legacy'
DEFAULT_CONFIG_ENABLED = True

=======
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
ProviderExternalLinks = namedtuple(
    'ProviderExternalLinks',
    ['learn_more', 'configuration', 'general', 'accessibility', 'contact_email']
)

<<<<<<< HEAD
ProviderFeature = namedtuple('ProviderFeature', ['id', 'feature_support_type'])
=======

class Provider:
    """
    List of Discussion providers.
    """
    LEGACY = 'legacy'
    ED_DISCUSS = 'ed-discuss'
    INSCRIBE = 'inscribe'
    PIAZZA = 'piazza'
    YELLOWDIG = 'yellowdig'
    OPEN_EDX = 'openedx'


DEFAULT_PROVIDER_TYPE = Provider.LEGACY
DEFAULT_CONFIG_ENABLED = True
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38


class Features(Enum):
    """
    Features to be used/mapped in discussion providers
    """

    # Basic Supported Features
<<<<<<< HEAD
    PRIMARY_DISCUSSION_APP_EXPERIENCE = ProviderFeature('primary-discussion-app-experience', 'basic')
    LTI_BASIC_CONFIGURATION = ProviderFeature('lti-basic-configuration', 'basic')
    # DISCUSSION_PAGE = ProviderFeature('discussion-page', 'basic')

    # Partially Supported Features
    QUESTION_DISCUSSION_SUPPORT = ProviderFeature('question-discussion-support', 'partial')
    COMMUNITY_TA_SUPPORT = ProviderFeature('community-ta-support', 'partial')
    REPORT_FLAG_CONTENT_TO_MODERATORS = ProviderFeature('report/flag-content-to-moderators', 'partial')
    LTI_ADVANCED_SHARING_MODE = ProviderFeature('lti-advanced-sharing-mode', 'partial')
    AUTOMATIC_LEARNER_ENROLLMENT = ProviderFeature('automatic-learner-enrollment', 'partial')
    ANONYMOUS_POSTING = ProviderFeature('anonymous-posting', 'partial')
    INTERNATIONALIZATION_SUPPORT = ProviderFeature('internationalization-support', 'partial')
    EMAIL_NOTIFICATIONS = ProviderFeature('email-notifications', 'partial')
    WCAG_2_0_SUPPORT = ProviderFeature('wcag-2.0-support', 'partial')
    BLACKOUT_DISCUSSION_DATES = ProviderFeature('blackout-discussion-dates', 'partial')
    # WCAG_2_1 = ProviderFeature('wcag-2.1', 'partial')
    # EMBEDDED_COURSE_SECTIONS = ProviderFeature('embedded-course-sections', 'basic')

    # Fully Supported Features
    COURSE_COHORT_SUPPORT = ProviderFeature('course-cohort-support', 'full')
    RESEARCH_DATA_EVENTS = ProviderFeature('research-data-events', 'full')

    # Commonly Requested Features
    IN_PLATFORM_NOTIFICATIONS = ProviderFeature('in-platform-notifications', 'common')
    DISCUSSION_CONTENT_PROMPTS = ProviderFeature('discussion-content-prompts', 'common')
    GRADED_DISCUSSIONS = ProviderFeature('graded-discussions', 'common')
    DIRECT_MESSAGES_FROM_INSTRUCTORS = ProviderFeature('direct-messages-from-instructors', 'common')
    USER_MENTIONS = ProviderFeature('user-mentions', 'common')
=======
    PRIMARY_DISCUSSION_APP_EXPERIENCE = ('primary-discussion-app-experience', 'basic')
    BASIC_CONFIGURATION = ('basic-configuration', 'basic')
    # DISCUSSION_PAGE = ('discussion-page', 'basic')

    # Partially Supported Features
    QUESTION_DISCUSSION_SUPPORT = ('question-discussion-support', 'partial')
    COMMUNITY_TA_SUPPORT = ('community-ta-support', 'partial')
    REPORT_FLAG_CONTENT_TO_MODERATORS = ('report/flag-content-to-moderators', 'partial')
    LTI_ADVANCED_SHARING_MODE = ('lti-advanced-sharing-mode', 'partial')
    AUTOMATIC_LEARNER_ENROLLMENT = ('automatic-learner-enrollment', 'partial')
    ANONYMOUS_POSTING = ('anonymous-posting', 'partial')
    INTERNATIONALIZATION_SUPPORT = ('internationalization-support', 'partial')
    EMAIL_NOTIFICATIONS = ('email-notifications', 'partial')
    WCAG_2_0_SUPPORT = ('wcag-2.0-support', 'partial')
    BLACKOUT_DISCUSSION_DATES = ('blackout-discussion-dates', 'partial')
    # WCAG_2_1 = ('wcag-2.1', 'partial')
    # EMBEDDED_COURSE_SECTIONS = ('embedded-course-sections', 'basic')

    # Fully Supported Features
    COURSE_COHORT_SUPPORT = ('course-cohort-support', 'full')
    RESEARCH_DATA_EVENTS = ('research-data-events', 'full')

    # Commonly Requested Features
    IN_PLATFORM_NOTIFICATIONS = ('in-platform-notifications', 'common')
    DISCUSSION_CONTENT_PROMPTS = ('discussion-content-prompts', 'common')
    GRADED_DISCUSSIONS = ('graded-discussions', 'common')
    DIRECT_MESSAGES_FROM_INSTRUCTORS = ('direct-messages-from-instructors', 'common')
    USER_MENTIONS = ('user-mentions', 'common')

    def __init__(self, feature_id, feature_support_type):
        self.feature_id = feature_id
        self.feature_support_type = feature_support_type

    @property
    def value(self):  # pylint: disable=invalid-overridden-method
        return self.feature_id

    @property
    def support(self):
        return self.feature_support_type
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38


def pii_sharing_required_message(provider_name):
    """
    Build an i18n'ed message stating PII sharing is required for the provider.
    """
    return _(
        '{provider} requires that LTI advanced sharing be enabled for your course,'
        ' as this provider uses email address and username to personalize'
        ' the experience. Please contact {support_contact} to enable this feature.'
    ).format(
        provider=provider_name,
        support_contact=(
            configuration_helpers.get_value(
                'CONTACT_EMAIL',
                getattr(settings, 'CONTACT_EMAIL', _('technical support'))
            )
        )
    )


AVAILABLE_PROVIDER_MAP = {
<<<<<<< HEAD
    'legacy': {
        'features': [
            Features.LTI_BASIC_CONFIGURATION.value.id,
            Features.PRIMARY_DISCUSSION_APP_EXPERIENCE.value.id,
            Features.QUESTION_DISCUSSION_SUPPORT.value.id,
            Features.COMMUNITY_TA_SUPPORT.value.id,
            Features.REPORT_FLAG_CONTENT_TO_MODERATORS.value.id,
            Features.AUTOMATIC_LEARNER_ENROLLMENT.value.id,
            Features.ANONYMOUS_POSTING.value.id,
            Features.INTERNATIONALIZATION_SUPPORT.value.id,
            Features.WCAG_2_0_SUPPORT.value.id,
            Features.BLACKOUT_DISCUSSION_DATES.value.id,
            Features.COURSE_COHORT_SUPPORT.value.id,
            Features.RESEARCH_DATA_EVENTS.value.id,
        ],
=======
    Provider.LEGACY: {
        'features': [
            Features.BASIC_CONFIGURATION.value,
            Features.PRIMARY_DISCUSSION_APP_EXPERIENCE.value,
            Features.QUESTION_DISCUSSION_SUPPORT.value,
            Features.COMMUNITY_TA_SUPPORT.value,
            Features.REPORT_FLAG_CONTENT_TO_MODERATORS.value,
            Features.AUTOMATIC_LEARNER_ENROLLMENT.value,
            Features.ANONYMOUS_POSTING.value,
            Features.INTERNATIONALIZATION_SUPPORT.value,
            Features.WCAG_2_0_SUPPORT.value,
            Features.BLACKOUT_DISCUSSION_DATES.value,
            Features.COURSE_COHORT_SUPPORT.value,
            Features.RESEARCH_DATA_EVENTS.value,
        ],
        'supports_lti': False,
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        'external_links': ProviderExternalLinks(
            learn_more='',
            configuration='',
            general='',
            accessibility='',
            contact_email='',
        )._asdict(),
        'messages': [],
<<<<<<< HEAD
        'has_full_support': True
    },
    'ed-discuss': {
        'features': [
            Features.PRIMARY_DISCUSSION_APP_EXPERIENCE.value.id,
            Features.LTI_BASIC_CONFIGURATION.value.id,
            Features.QUESTION_DISCUSSION_SUPPORT.value.id,
            Features.REPORT_FLAG_CONTENT_TO_MODERATORS.value.id,
            Features.LTI_ADVANCED_SHARING_MODE.value.id,
            Features.AUTOMATIC_LEARNER_ENROLLMENT.value.id,
            Features.ANONYMOUS_POSTING.value.id,
            Features.INTERNATIONALIZATION_SUPPORT.value.id,
            Features.EMAIL_NOTIFICATIONS.value.id,
            Features.WCAG_2_0_SUPPORT.value.id,
            Features.BLACKOUT_DISCUSSION_DATES.value.id,
            Features.IN_PLATFORM_NOTIFICATIONS.value.id,
            Features.USER_MENTIONS.value.id,
        ],
=======
        'has_full_support': True,
        'admin_only_config': False,
    },
    Provider.OPEN_EDX: {
        'features': [
            Features.BASIC_CONFIGURATION.value,
            Features.PRIMARY_DISCUSSION_APP_EXPERIENCE.value,
            Features.QUESTION_DISCUSSION_SUPPORT.value,
            Features.COMMUNITY_TA_SUPPORT.value,
            Features.REPORT_FLAG_CONTENT_TO_MODERATORS.value,
            Features.AUTOMATIC_LEARNER_ENROLLMENT.value,
            Features.ANONYMOUS_POSTING.value,
            Features.INTERNATIONALIZATION_SUPPORT.value,
            Features.WCAG_2_0_SUPPORT.value,
            Features.BLACKOUT_DISCUSSION_DATES.value,
            Features.COURSE_COHORT_SUPPORT.value,
            Features.RESEARCH_DATA_EVENTS.value,
        ],
        'supports_lti': False,
        'external_links': ProviderExternalLinks(
            learn_more='',
            configuration='',
            general='',
            accessibility='',
            contact_email='',
        )._asdict(),
        'messages': [],
        'has_full_support': True,
        'supports_in_context_discussions': True,
        'admin_only_config': False,
    },
    Provider.ED_DISCUSS: {
        'features': [
            Features.PRIMARY_DISCUSSION_APP_EXPERIENCE.value,
            Features.BASIC_CONFIGURATION.value,
            Features.QUESTION_DISCUSSION_SUPPORT.value,
            Features.REPORT_FLAG_CONTENT_TO_MODERATORS.value,
            Features.LTI_ADVANCED_SHARING_MODE.value,
            Features.AUTOMATIC_LEARNER_ENROLLMENT.value,
            Features.ANONYMOUS_POSTING.value,
            Features.INTERNATIONALIZATION_SUPPORT.value,
            Features.EMAIL_NOTIFICATIONS.value,
            Features.WCAG_2_0_SUPPORT.value,
            Features.BLACKOUT_DISCUSSION_DATES.value,
            Features.IN_PLATFORM_NOTIFICATIONS.value,
            Features.USER_MENTIONS.value,
        ],
        'supports_lti': True,
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        'external_links': ProviderExternalLinks(
            learn_more='',
            configuration='',
            general='https://edstem.org/us/',
            accessibility='',
            contact_email='',
        )._asdict(),
<<<<<<< HEAD
        'messages': [],
        'has_full_support': False
    },
    'inscribe': {
        'features': [
            Features.PRIMARY_DISCUSSION_APP_EXPERIENCE.value.id,
            Features.LTI_BASIC_CONFIGURATION.value.id,
            Features.QUESTION_DISCUSSION_SUPPORT.value.id,
            Features.COMMUNITY_TA_SUPPORT.value.id,
            Features.REPORT_FLAG_CONTENT_TO_MODERATORS.value.id,
            Features.LTI_ADVANCED_SHARING_MODE.value.id,
            Features.AUTOMATIC_LEARNER_ENROLLMENT.value.id,
            Features.ANONYMOUS_POSTING.value.id,
            Features.INTERNATIONALIZATION_SUPPORT.value.id,
            Features.EMAIL_NOTIFICATIONS.value.id,
            Features.WCAG_2_0_SUPPORT.value.id,
            Features.RESEARCH_DATA_EVENTS.value.id,
            Features.IN_PLATFORM_NOTIFICATIONS.value.id,
            Features.DISCUSSION_CONTENT_PROMPTS.value.id,
        ],
=======
        'messages': [pii_sharing_required_message('Ed Discussion')],
        'has_full_support': False,
        'admin_only_config': True,
    },
    Provider.INSCRIBE: {
        'features': [
            Features.PRIMARY_DISCUSSION_APP_EXPERIENCE.value,
            Features.BASIC_CONFIGURATION.value,
            Features.QUESTION_DISCUSSION_SUPPORT.value,
            Features.COMMUNITY_TA_SUPPORT.value,
            Features.REPORT_FLAG_CONTENT_TO_MODERATORS.value,
            Features.LTI_ADVANCED_SHARING_MODE.value,
            Features.AUTOMATIC_LEARNER_ENROLLMENT.value,
            Features.ANONYMOUS_POSTING.value,
            Features.INTERNATIONALIZATION_SUPPORT.value,
            Features.EMAIL_NOTIFICATIONS.value,
            Features.WCAG_2_0_SUPPORT.value,
            Features.RESEARCH_DATA_EVENTS.value,
            Features.IN_PLATFORM_NOTIFICATIONS.value,
            Features.DISCUSSION_CONTENT_PROMPTS.value,
        ],
        'supports_lti': True,
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        'external_links': ProviderExternalLinks(
            learn_more='',
            configuration='',
            general='https://www.inscribeapp.com/',
            accessibility='',
            contact_email='',
        )._asdict(),
        'messages': [pii_sharing_required_message('InScribe')],
<<<<<<< HEAD
        'has_full_support': False
    },
    'piazza': {
        'features': [
            Features.PRIMARY_DISCUSSION_APP_EXPERIENCE.value.id,
            Features.LTI_BASIC_CONFIGURATION.value.id,
            Features.QUESTION_DISCUSSION_SUPPORT.value.id,
            Features.COMMUNITY_TA_SUPPORT.value.id,
            Features.REPORT_FLAG_CONTENT_TO_MODERATORS.value.id,
            Features.LTI_ADVANCED_SHARING_MODE.value.id,
            Features.ANONYMOUS_POSTING.value.id,
            Features.EMAIL_NOTIFICATIONS.value.id,
            Features.WCAG_2_0_SUPPORT.value.id,
            Features.BLACKOUT_DISCUSSION_DATES.value.id,
        ],
=======
        'has_full_support': False,
        'admin_only_config': True,
    },
    Provider.PIAZZA: {
        'features': [
            Features.PRIMARY_DISCUSSION_APP_EXPERIENCE.value,
            Features.BASIC_CONFIGURATION.value,
            Features.QUESTION_DISCUSSION_SUPPORT.value,
            Features.COMMUNITY_TA_SUPPORT.value,
            Features.REPORT_FLAG_CONTENT_TO_MODERATORS.value,
            Features.LTI_ADVANCED_SHARING_MODE.value,
            Features.ANONYMOUS_POSTING.value,
            Features.EMAIL_NOTIFICATIONS.value,
            Features.WCAG_2_0_SUPPORT.value,
            Features.BLACKOUT_DISCUSSION_DATES.value,
        ],
        'supports_lti': True,
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        'external_links': ProviderExternalLinks(
            learn_more='https://piazza.com/product/overview',
            configuration='https://support.piazza.com/support/solutions/articles/48001065447-configure-piazza-within-edx',  # pylint: disable=line-too-long
            general='https://support.piazza.com/',
            accessibility='https://piazza.com/product/accessibility',
            contact_email='team@piazza.com',
        )._asdict(),
        'messages': [],
<<<<<<< HEAD
        'has_full_support': False
    },
    'yellowdig': {
        'features': [
            Features.PRIMARY_DISCUSSION_APP_EXPERIENCE.value.id,
            Features.LTI_BASIC_CONFIGURATION.value.id,
            Features.QUESTION_DISCUSSION_SUPPORT.value.id,
            Features.COMMUNITY_TA_SUPPORT.value.id,
            Features.REPORT_FLAG_CONTENT_TO_MODERATORS.value.id,
            Features.EMAIL_NOTIFICATIONS.value.id,
            Features.WCAG_2_0_SUPPORT.value.id,
            Features.RESEARCH_DATA_EVENTS.value.id,
            Features.IN_PLATFORM_NOTIFICATIONS.value.id,
            Features.GRADED_DISCUSSIONS.value.id,
            Features.DIRECT_MESSAGES_FROM_INSTRUCTORS.value.id,
            Features.USER_MENTIONS.value.id,
        ],
        'external_links': ProviderExternalLinks(
            learn_more='https://www.youtube.com/watch?v=ZACief-qMwY',
=======
        'has_full_support': False,
        'admin_only_config': True
    },
    Provider.YELLOWDIG: {
        'features': [
            Features.PRIMARY_DISCUSSION_APP_EXPERIENCE.value,
            Features.BASIC_CONFIGURATION.value,
            Features.QUESTION_DISCUSSION_SUPPORT.value,
            Features.COMMUNITY_TA_SUPPORT.value,
            Features.REPORT_FLAG_CONTENT_TO_MODERATORS.value,
            Features.EMAIL_NOTIFICATIONS.value,
            Features.WCAG_2_0_SUPPORT.value,
            Features.RESEARCH_DATA_EVENTS.value,
            Features.IN_PLATFORM_NOTIFICATIONS.value,
            Features.GRADED_DISCUSSIONS.value,
            Features.DIRECT_MESSAGES_FROM_INSTRUCTORS.value,
            Features.USER_MENTIONS.value,
        ],
        'supports_lti': True,
        'external_links': ProviderExternalLinks(
            learn_more='https://youtu.be/oOcvjjMVFAw',
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
            configuration='',
            general='https://hubs.ly/H0J5Bn70',
            accessibility='',
            contact_email='learnmore@yellowdig.com',
        )._asdict(),
        'messages': [pii_sharing_required_message('Yellowdig')],
        'has_full_support': False,
        'admin_only_config': True,
    },
}


<<<<<<< HEAD
def get_supported_providers() -> list[str]:
=======
def get_supported_providers() -> List[str]:
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    """
    Return the list of supported discussion providers

    TODO: Load this from entry points?
    """
<<<<<<< HEAD
    providers = [
        'legacy',
        'piazza',
    ]
    return providers
=======

    return list(AVAILABLE_PROVIDER_MAP.keys())
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38


class ProviderFilter(StackedConfigurationModel):
    """
    Associate allow/deny-lists of discussions providers with courses/orgs
    """

    allow = ListCharField(
        base_field=models.CharField(
            choices=[
                (provider, provider)
                for provider in get_supported_providers()
            ],
            max_length=20,
        ),
        blank=True,
        help_text=_("Comma-separated list of providers to allow, eg: {choices}").format(
            choices=','.join(get_supported_providers()),
        ),
        # max_length = (size * (max_length + len(','))
        # max_length = (   3 * (        20 +       1))
        max_length=63,
        # size = len(get_supported_providers())
        size=3,
        verbose_name=_('Allow List'),
    )
    deny = ListCharField(
        base_field=models.CharField(
            choices=[
                (provider, provider)
                for provider in get_supported_providers()
            ],
            max_length=20,
        ),
        blank=True,
        help_text=_("Comma-separated list of providers to deny, eg: {choices}").format(
            choices=','.join(get_supported_providers()),
        ),
        # max_length = (size * (max_length + len(','))
        # max_length = (   3 * (        20 +       1))
        max_length=63,
        # size = len(get_supported_providers())
        size=3,
        verbose_name=_('Deny List'),
    )

    STACKABLE_FIELDS = (
        'enabled',
        'allow',
        'deny',
    )

    def __str__(self):
        return 'ProviderFilter(org="{org}", course="{course}", allow={allow}, deny={deny})'.format(
            allow=self.allow,
            course=self.course or '',
            deny=self.deny,
            org=self.org or '',
        )

    @property
<<<<<<< HEAD
    def available_providers(self) -> list[str]:
=======
    def available_providers(self) -> List[str]:
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        """
        Return a filtered list of available providers
        """
        _providers = get_supported_providers()
        if self.allow:
            _providers = [
                provider
                for provider in _providers
                if provider in self.allow
            ]
        if self.deny:
            _providers = [
                provider
                for provider in _providers
                if provider not in self.deny
            ]
        return _providers

    @classmethod
<<<<<<< HEAD
    def get_available_providers(cls, course_key: CourseKey) -> list[str]:
=======
    def get_available_providers(cls, course_key: CourseKey) -> List[str]:
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        _filter = cls.current(course_key=course_key)
        providers = _filter.available_providers
        return providers


<<<<<<< HEAD
=======
T = TypeVar('T', bound='DiscussionsConfiguration')


>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
class DiscussionsConfiguration(TimeStampedModel):
    """
    Associates a learning context with discussion provider and configuration
    """

    context_key = LearningContextKeyField(
        primary_key=True,
        db_index=True,
        unique=True,
        max_length=255,
        # Translators: A key specifying a course, library, program,
        # website, or some other collection of content where learning
        # happens.
        verbose_name=_("Learning Context Key"),
    )
    enabled = models.BooleanField(
        default=True,
        help_text=_("If disabled, the discussions in the associated learning context/course will be disabled.")
    )
    lti_configuration = models.ForeignKey(
        LtiConfiguration,
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
        help_text=_("The LTI configuration data for this context/provider."),
    )
<<<<<<< HEAD
=======
    enable_in_context = models.BooleanField(
        default=True,
        help_text=_(
            "If enabled, discussion topics will be created for each non-graded unit in the course. "
            "A UI for discussions will show up with each unit."
        )
    )
    enable_graded_units = models.BooleanField(
        default=False,
        help_text=_("If enabled, discussion topics will be created for graded units as well.")
    )
    unit_level_visibility = models.BooleanField(
        default=False,
        help_text=_("If enabled, discussions will need to be manually enabled for each unit.")
    )
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    plugin_configuration = JSONField(
        blank=True,
        default={},
        help_text=_("The plugin configuration data for this context/provider."),
    )
    provider_type = models.CharField(
        blank=False,
        max_length=100,
        verbose_name=_("Discussion provider"),
        help_text=_("The discussion tool/provider's id"),
<<<<<<< HEAD
=======
        default=DEFAULT_PROVIDER_TYPE,
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    )
    history = HistoricalRecords()

    def clean(self):
        """
        Validate the model.
        Currently, this only support courses, this can be extended
        whenever discussions are available in other contexts
        """
        if not CourseOverview.course_exists(self.context_key):
            raise ValidationError('Context Key should be an existing learning context.')

    def __str__(self):
        return "DiscussionsConfiguration(context_key='{context_key}', provider='{provider}', enabled={enabled})".format(
            context_key=self.context_key,
            provider=self.provider_type,
            enabled=self.enabled,
        )

<<<<<<< HEAD
=======
    def supports_in_context_discussions(self):
        """
        Returns is the provider supports in-context discussions
        """
        return AVAILABLE_PROVIDER_MAP.get(self.provider_type, {}).get('supports_in_context_discussions', False)

>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    def supports(self, feature: str) -> bool:
        """
        Check if the provider supports some feature
        """
        features = AVAILABLE_PROVIDER_MAP.get(self.provider_type)['features'] or []
        has_support = bool(feature in features)
        return has_support

<<<<<<< HEAD
=======
    def supports_lti(self) -> bool:
        """Returns a boolean indicating if the provider supports lti discussion view."""
        return AVAILABLE_PROVIDER_MAP.get(self.provider_type, {}).get('supports_lti', False)

>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    @classmethod
    def is_enabled(cls, context_key: CourseKey) -> bool:
        """
        Check if there is an active configuration for a given course key

        Default to False, if no configuration exists
        """
        configuration = cls.get(context_key)
        return configuration.enabled

<<<<<<< HEAD
    # pylint: disable=undefined-variable
    @classmethod
    def get(cls, context_key: CourseKey) -> cls:
=======
    @classmethod
    def get(cls: Type[T], context_key: CourseKey) -> T:
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
        """
        Lookup a model by context_key
        """
        try:
            configuration = cls.objects.get(context_key=context_key)
        except cls.DoesNotExist:
            configuration = cls(
                context_key=context_key,
                enabled=DEFAULT_CONFIG_ENABLED,
                provider_type=DEFAULT_PROVIDER_TYPE,
            )
        return configuration

<<<<<<< HEAD
    # pylint: enable=undefined-variable

    @property
    def available_providers(self) -> list[str]:
        return ProviderFilter.current(course_key=self.context_key).available_providers

    @classmethod
    def get_available_providers(cls, context_key: CourseKey) -> list[str]:
        return ProviderFilter.current(course_key=context_key).available_providers


class ProgramDiscussionsConfiguration(TimeStampedModel):
    """
    Associates a program with a discussion provider and configuration
    """

    program_uuid = models.CharField(
        primary_key=True,
        db_index=True,
        max_length=50,
        verbose_name=_("Program UUID"),
    )
    enabled = models.BooleanField(
        default=True,
        help_text=_("If disabled, the discussions in the associated program will be disabled.")
    )
    lti_configuration = models.ForeignKey(
        LtiConfiguration,
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
        help_text=_("The LTI configuration data for this program/provider."),
    )
    provider_type = models.CharField(
        blank=False,
        max_length=50,
        verbose_name=_("Discussion provider"),
        help_text=_("The discussion provider's id"),
    )
    history = HistoricalRecords()

    def __str__(self):
        return f"Configuration(uuid='{self.program_uuid}', provider='{self.provider_type}', enabled={self.enabled})"

    @classmethod
    def is_enabled(cls, program_uuid) -> bool:
        """
        Check if there is an active configuration for a given program uuid

        Default to False, if no configuration exists
        """
        try:
            configuration = cls.objects.get(program_uuid=program_uuid)
            return configuration.enabled
        except cls.DoesNotExist:
            return False
=======
    @property
    def available_providers(self) -> List[str]:
        return ProviderFilter.current(course_key=self.context_key).available_providers

    @classmethod
    def get_available_providers(cls, context_key: CourseKey) -> List[str]:
        return ProviderFilter.current(course_key=context_key).available_providers

    @classmethod
    def lti_discussion_enabled(cls, course_key: CourseKey) -> bool:
        """
        Checks if LTI discussion is enabled for this course.

        Arguments:
            course_key: course locator.
        Returns:
            Boolean indicating weather or not this course has lti discussion enabled.
        """
        discussion_provider = cls.get(course_key)
        return (
            discussion_provider.enabled
            and discussion_provider.supports_lti()
            and discussion_provider.lti_configuration is not None
        )


class DiscussionTopicLink(models.Model):
    """
    A model linking discussion topics ids to the part of a course they are linked to.
    """
    context_key = LearningContextKeyField(
        db_index=True,
        max_length=255,
        # Translators: A key specifying a course, library, program,
        # website, or some other collection of content where learning
        # happens.
        verbose_name=_("Learning Context Key"),
        help_text=_("Context key for context in which this discussion topic exists.")
    )
    usage_key = UsageKeyField(
        db_index=True,
        max_length=255,
        null=True,
        blank=True,
        help_text=_("Usage key for in-context discussion topic. Set to null for course-level topics.")
    )
    title = models.CharField(
        max_length=255,
        help_text=_("Title for discussion topic.")
    )
    group = models.ForeignKey(
        CourseUserGroup,
        null=True,
        blank=True,
        on_delete=models.SET_NULL,
        help_text=_("Group for divided discussions.")
    )
    provider_id = models.CharField(
        max_length=32,
        help_text=_("Provider id for discussion provider.")
    )
    external_id = models.CharField(
        db_index=True,
        max_length=255,
        help_text=_("Discussion context ID in external forum provider. e.g. commentable_id for cs_comments_service.")
    )
    enabled_in_context = models.BooleanField(
        default=True,
        help_text=_("Whether this topic should be shown in-context in the course.")
    )
    ordering = models.PositiveIntegerField(
        null=True,
        help_text=_("Ordering of this topic in its learning context"),
    )

    def __str__(self):
        return (
            f'DiscussionTopicLink('
            f'context_key="{self.context_key}", usage_key="{self.usage_key}", title="{self.title}", '
            f'group={self.group}, provider_id="{self.provider_id}", external_id="{self.external_id}", '
            f'enabled_in_context={self.enabled_in_context}'
            f')'
        )
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

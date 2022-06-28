"""
<<<<<<< HEAD
Defines a form for providing validation of subsection grade templates.
=======
Defines a form for providing validation of waffle overrides.
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
"""

from django import forms

from openedx.core.lib.courses import clean_course_id

<<<<<<< HEAD
from .models import WaffleFlagCourseOverrideModel
=======
from .models import WaffleFlagCourseOverrideModel, WaffleFlagOrgOverrideModel
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38


class WaffleFlagCourseOverrideAdminForm(forms.ModelForm):
    """
<<<<<<< HEAD
    Input form for course override of waffle flags, allowing us to verify data.
=======
    Input form for course-level override of waffle flags, allowing us to verify data.
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    """
    class Meta:
        model = WaffleFlagCourseOverrideModel
        fields = '__all__'

    def clean_course_id(self):
        """
        Validate the course id
        """
        return clean_course_id(self)

    def clean_waffle_flag(self):
        """
<<<<<<< HEAD
        Validate the waffle flag is an existing flag.
        """
        cleaned_flag = self.cleaned_data['waffle_flag']
=======
        Validate the waffle flag is specified.
        """
        cleaned_flag = self.cleaned_data['waffle_flag'].strip()
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

        if not cleaned_flag:
            msg = 'Waffle flag must be supplied.'
            raise forms.ValidationError(msg)

<<<<<<< HEAD
        return cleaned_flag.strip()
=======
        return cleaned_flag


class WaffleFlagOrgOverrideAdminForm(forms.ModelForm):
    """
    Input form for org-level override of waffle flags, allowing us to verify data.
    """
    class Meta:
        model = WaffleFlagOrgOverrideModel
        fields = '__all__'

    def clean_org(self):
        """
        Validate the org.
        """
        cleaned_flag = self.cleaned_data['org'].strip()

        if not cleaned_flag:
            msg = 'Organization must be supplied.'
            raise forms.ValidationError(msg)

        return cleaned_flag

    def clean_waffle_flag(self):
        """
        Validate the waffle flag is specified.
        """
        cleaned_flag = self.cleaned_data['waffle_flag'].strip()

        if not cleaned_flag:
            msg = 'Waffle flag must be supplied.'
            raise forms.ValidationError(msg)

        return cleaned_flag
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38

from django.db import migrations

from lms.djangoapps.grades.config.waffle import (
    ENFORCE_FREEZE_GRADE_AFTER_COURSE_END,
    REJECTED_EXAM_OVERRIDES_GRADE,
    WRITABLE_GRADEBOOK,
<<<<<<< HEAD
    waffle_flags,
=======
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
)


def create_flag(apps, schema_editor):
    Flag = apps.get_model('waffle', 'Flag')
    # Replacement for flag_undefined_default=True on flag definition
    Flag.objects.get_or_create(
<<<<<<< HEAD
        name=waffle_flags()[REJECTED_EXAM_OVERRIDES_GRADE].name, defaults={'everyone': True}
    )
    Flag.objects.get_or_create(
        name=waffle_flags()[ENFORCE_FREEZE_GRADE_AFTER_COURSE_END].name, defaults={'everyone': True}
    )
    Flag.objects.get_or_create(
        name=waffle_flags()[WRITABLE_GRADEBOOK].name, defaults={'everyone': True}
=======
        name=REJECTED_EXAM_OVERRIDES_GRADE.name, defaults={'everyone': True}
    )
    Flag.objects.get_or_create(
        name=ENFORCE_FREEZE_GRADE_AFTER_COURSE_END.name, defaults={'everyone': True}
    )
    Flag.objects.get_or_create(
        name=WRITABLE_GRADEBOOK.name, defaults={'everyone': True}
>>>>>>> 295cf4fc64a17ee2e01e062ad782fcbe7b514c38
    )


class Migration(migrations.Migration):
    dependencies = [
        ('grades', '0017_delete_manual_psgoverride_table'),
        ('waffle', '0001_initial'),
    ]

    operations = [
        # Do not remove the flags for rollback.  We don't want to lose originals if
        # they already existed, and it won't hurt if they are created.
        migrations.RunPython(create_flag, reverse_code=migrations.RunPython.noop),
    ]

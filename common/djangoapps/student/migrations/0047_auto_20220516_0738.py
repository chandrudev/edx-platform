# Generated by Django 3.2.12 on 2022-05-16 07:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('student', '0046_auto_20220425_0434'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='courseenrollment',
            name='course_live_class',
        ),
        migrations.RemoveField(
            model_name='historicalcourseenrollment',
            name='course_live_class',
        ),
    ]

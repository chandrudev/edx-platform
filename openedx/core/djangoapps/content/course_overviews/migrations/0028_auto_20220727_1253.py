# Generated by Django 3.2.13 on 2022-07-27 12:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('course_overviews', '0027_liveclasses'),
    ]

    operations = [
        migrations.AddField(
            model_name='liveclasses',
            name='days',
            field=models.JSONField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='liveclasses',
            name='client_token',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='liveclasses',
            name='meeting_link',
            field=models.URLField(null=True),
        ),
        migrations.AlterField(
            model_name='liveclasses',
            name='topic_name',
            field=models.CharField(max_length=60, null=True, unique=True),
        ),
    ]

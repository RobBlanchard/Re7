# Generated by Django 3.0.5 on 2020-05-11 12:20

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import re7.authentication.models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('recipes', '0008_auto_20200511_1217'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recipe',
            name='creater',
            field=models.ForeignKey(default=re7.authentication.models.deleted_user, on_delete=django.db.models.deletion.SET_DEFAULT, related_name='recipes', to=settings.AUTH_USER_MODEL, to_field='username'),
        ),
    ]
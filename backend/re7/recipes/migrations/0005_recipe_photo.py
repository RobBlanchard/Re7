# Generated by Django 3.0.5 on 2020-05-04 15:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipes', '0004_auto_20200430_1531'),
    ]

    operations = [
        migrations.AddField(
            model_name='recipe',
            name='photo',
            field=models.ImageField(default='static/recipe-default-image.jpg', upload_to='photos'),
        ),
    ]
# Generated by Django 3.1.1 on 2021-05-06 13:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authentication', '0002_auto_20210506_1546'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='avatar',
            field=models.ImageField(default='/static/default/profile.PNG', upload_to='avatars'),
        ),
    ]
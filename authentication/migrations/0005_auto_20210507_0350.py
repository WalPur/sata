# Generated by Django 3.1.1 on 2021-05-06 18:50

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('webpage', '0001_initial'),
        ('authentication', '0004_auto_20210506_2238'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='subs',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='webpage.masterclass'),
        ),
        migrations.RemoveField(
            model_name='user',
            name='groups',
        ),
        migrations.AddField(
            model_name='user',
            name='groups',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='webpage.group'),
        ),
    ]
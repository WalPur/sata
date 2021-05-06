# Generated by Django 3.1.1 on 2021-05-06 18:52

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('webpage', '0001_initial'),
        ('authentication', '0005_auto_20210507_0350'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='groups',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='webpage.group'),
        ),
        migrations.AlterField(
            model_name='user',
            name='subs',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='webpage.masterclass'),
        ),
    ]
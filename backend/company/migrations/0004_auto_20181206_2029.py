# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2018-12-06 20:29
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('company', '0003_auto_20181203_2110'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='company',
            name='geolocation',
        ),
        migrations.AlterField(
            model_name='company',
            name='latitude',
            field=models.DecimalField(decimal_places=6, max_digits=9),
        ),
        migrations.AlterField(
            model_name='company',
            name='longitude',
            field=models.DecimalField(decimal_places=6, max_digits=9),
        ),
    ]

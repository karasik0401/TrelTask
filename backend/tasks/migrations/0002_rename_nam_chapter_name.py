# Generated by Django 5.0.4 on 2024-04-23 20:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='chapter',
            old_name='nam',
            new_name='name',
        ),
    ]

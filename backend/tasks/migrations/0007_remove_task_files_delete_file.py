# Generated by Django 5.0.4 on 2024-04-26 21:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0006_alter_task_description'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='task',
            name='files',
        ),
        migrations.DeleteModel(
            name='File',
        ),
    ]
# Generated by Django 5.0.4 on 2024-05-01 14:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tasks', '0007_remove_task_files_delete_file'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='priority',
            field=models.IntegerField(choices=[(0, '#7BB558'), (1, '#ED863B'), (2, '#E55050')], default=1, verbose_name='Приоритет'),
        ),
    ]
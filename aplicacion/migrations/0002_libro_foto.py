# Generated by Django 3.1.5 on 2021-01-08 21:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('aplicacion', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='libro',
            name='foto',
            field=models.ImageField(default='', height_field=100, upload_to='static/pictures', width_field=100),
        ),
    ]

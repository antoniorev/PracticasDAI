# Generated by Django 3.1.5 on 2021-01-08 22:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('aplicacion', '0005_auto_20210108_2224'),
    ]

    operations = [
        migrations.AlterField(
            model_name='libro',
            name='foto',
            field=models.FileField(blank=True, upload_to='libros/'),
        ),
    ]

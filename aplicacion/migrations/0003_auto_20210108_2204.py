# Generated by Django 3.1.5 on 2021-01-08 22:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('aplicacion', '0002_libro_foto'),
    ]

    operations = [
        migrations.AlterField(
            model_name='libro',
            name='foto',
            field=models.ImageField(blank=True, default='', height_field=100, upload_to='libros', width_field=100),
        ),
    ]

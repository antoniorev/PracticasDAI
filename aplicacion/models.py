# mi_aplicacion/models.py
from django.db import models
from django.utils import timezone
from django.urls import reverse
from django.contrib.auth.models import User


class Libro(models.Model):
  titulo          = models.CharField(max_length=200)
  autorPrincipal  = models.CharField(max_length=100)
  genero          = models.CharField(max_length=50)
  editorial       = models.CharField(max_length=100)
  fecha           = models.DateField(default=timezone.now)
  foto            = models.ImageField(upload_to='libros/', blank=True)

  def get_absolute_url(self):
        return reverse('libro', kwargs={'pk': self.pk})

  def __str__(self):
    return self.titulo

class Prestamo(models.Model):
  libro       = models.ForeignKey(Libro, on_delete=models.CASCADE)
  usuario     = models.ForeignKey(User, on_delete=models.CASCADE)
  fecha       = models.DateField(default=timezone.now)

  def get_absolute_url(self):
        return reverse('prestamo', kwargs={'pk': self.pk})

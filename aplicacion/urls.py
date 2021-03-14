# mi_aplicacion/urls.py

from django.urls import path, re_path
from django.conf.urls.static import static
from django.conf import settings
from . import views
from .views import *
urlpatterns = [
  path('', views.index, name='index'),
  path('grafica', views.grafica, name='index'),
  path('amigos', views.amigos, name='amigos'),
  path('prestamos', MostrarPrestamos.as_view(), name='prestamos'),
  path('prestamo/<int:pk>/', EditarPrestamo.as_view(), name='editar prestamo'),
  path('prestamo/add/', CrearPrestamo.as_view(), name='añadir prestamo'),
  path('prestamo/<int:pk>/delete/', BorrarPrestamo.as_view(), name='borrar prestamo'),
  path('libro/<int:pk>/', EditarLibro.as_view(), name='editar libro'),
  path('libro/add/', CrearLibro.as_view(), name='añadir libro'),
  path('libro/<int:pk>/delete/', BorrarLibro.as_view(), name='borrar libro'),
  path('libros', MostrarLibros.as_view(), name='libros'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
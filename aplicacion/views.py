# mi_aplicacion/views.py

from django.views.generic import CreateView, UpdateView, DeleteView, ListView
from django.shortcuts import render, HttpResponse
from django.views.decorators.http import require_http_methods
from django.utils import timezone
from .models import Prestamo, Libro
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.mixins import PermissionRequiredMixin
from django.contrib.admin.views.decorators import staff_member_required
from django.urls import reverse_lazy

# Create your views here.

def index(request):
    return render(request,'index.html')

def amigos(request):
    return render(request,'amigos.html')

def grafica(request):
    return render(request,'grafica.html')
    
class MostrarPrestamos(LoginRequiredMixin, ListView):
    template_name = 'prestamos.html'
    model = Prestamo
    def get_queryset(self):
        if self.request.user.is_staff:
            return Prestamo.objects.all()
        else:
            return Prestamo.objects.filter(usuario=self.request.user)

class CrearPrestamo(LoginRequiredMixin, CreateView):
    template_name = 'prestamo_form.html'
    success_url = '/prestamos'
    model = Prestamo
    fields = ('libro',)
    
    def form_valid(self, form):
        form.instance.usuario = self.request.user
        return super(CrearPrestamo, self).form_valid(form)

class EditarPrestamo(LoginRequiredMixin, UpdateView):
    template_name = 'prestamo_form.html'
    success_url = '/prestamos'
    model = Prestamo
    fields = ('libro',)
    
    def form_valid(self, form):
        form.instance.usuario = self.request.user
        return super(EditarPrestamo, self).form_valid(form)

class BorrarPrestamo(LoginRequiredMixin, DeleteView):
    template_name = 'prestamo_confirm_delete.html'
    success_url = reverse_lazy('prestamos')
    model = Prestamo
    



class MostrarLibros(ListView):
    template_name = 'libros.html'
    model = Libro

class CrearLibro(PermissionRequiredMixin, CreateView):
    permission_required = 'is_staff'
    template_name = 'libro_form.html'
    success_url = '/libros'
    model = Libro
    fields = ('titulo', 'autorPrincipal', 'genero', 'editorial', 'fecha', 'foto')

class EditarLibro(PermissionRequiredMixin, UpdateView):
    permission_required = 'is_staff'
    template_name = 'libro_form.html'
    success_url = '/libros'
    model = Libro
    fields = ('titulo', 'autorPrincipal', 'genero', 'editorial', 'fecha', 'foto')

class BorrarLibro(PermissionRequiredMixin, DeleteView):
    permission_required = 'is_staff'
    template_name = 'libro_confirm_delete.html'
    success_url = reverse_lazy('libros')
    model = Libro
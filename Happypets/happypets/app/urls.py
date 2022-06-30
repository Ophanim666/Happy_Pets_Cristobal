from django.urls import path, include 
from .views import home, productos, contacto, comentarios, blog, agregar_producto, listar_productos, modificar_producto, eliminar_producto, registro, ProductoViewset
from rest_framework import routers

### ACUERDATE DE GUARDAR AQUI, EL PROGRAMA NO ESTA AVISANDO CUANDO NO GUARDAS AQUI Y ESTO NO PERMITE QUE SE EJECUTEN LOS VIEWS.


router = routers.DefaultRouter()
router.register('producto', ProductoViewset)



urlpatterns = [
    path('', home, name="home"),
    path('productos/', productos, name="productos"),
    path('contacto/', contacto, name="contacto"),
    path('comentarios/', comentarios, name="comentarios"),
    path('blog/', blog, name="blog"),
    path('agregar-producto/', agregar_producto, name="agregar_producto"),
    path('listar-productos/', listar_productos, name="listar_productos"),
    path('modificar-producto/<id>/', modificar_producto, name="modificar_productos"),
    path('eliminar-producto/<id>/', eliminar_producto, name="eliminar_producto"),
    path('registro/', registro, name="registro"),
    path('api/', include(router.urls)),




]
# Web de Bekuro

Las páginas públicas son HTML y CSS estáticos; no requieren compilación ni framework. Publica el contenido de esta carpeta desde la raíz del dominio:

- `index.html`: inicio y sección acerca de Bekuro.
- `paginas/servicios.html`: productos e información sobre cómo los creamos. `paginas/acerca.html` conserva su dirección anterior.
- `paginas/productos/`: páginas de Fluu y Kuento.
- `paginas/legal/`: políticas, términos y eliminación de cuenta.
- `assets/css/site.css`: estilos del sitio y de las páginas de productos.
- `assets/css/styles.css`, `legal-fluu.css` y `kuento.css`: estilos de las páginas legales. `Bekuro.css` conserva estilos antiguos y no está enlazado actualmente.
- `assets/js/redireccion.js`: redirección de las direcciones anteriores.
- `assets/`: iconos e imágenes.

Los archivos HTML de Fluu, Kuento y sus documentos legales que siguen en la raíz son redirecciones de compatibilidad; no contienen las páginas que se editan. Conservan los parámetros y fragmentos cuando JavaScript está habilitado. Sin JavaScript redirigen a la página nueva sin conservarlos.

Para revisar el sitio localmente, inicia un servidor estático desde esta carpeta, por ejemplo `python -m http.server 8000`, y abre `http://localhost:8000`.

## Futuro centro de control

El centro de control se desarrollará por separado de las páginas públicas, bajo el dominio de Bekuro. Las áreas previstas son proyectos y tareas, productos y aplicaciones, ingresos y gastos, equipo y documentos.

Todavía no existe un panel privado ni se ha elegido el proveedor de autenticación o almacenamiento. Antes de publicar el centro de control se deben definir los usuarios y sus permisos, habilitar autenticación real y aplicar autorización en el servidor y en la base de datos para cada operación y archivo. Una ruta discreta, una contraseña en JavaScript o esconder enlaces no protegen información privada. No se deben incluir datos empresariales ni claves secretas en archivos públicos.

Supabase y Firebase son opciones para evaluar cuando se definan los requisitos y límites de uso; no es necesario elegir una para el rediseño público. La configuración existente de Kuento es independiente de esa decisión.

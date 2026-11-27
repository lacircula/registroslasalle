# SIGE — prototipo inicial

Interfaz de demostración para el Sistema de Incidencias y Gestión Escolar.

## Archivos
- `index.html`: estructura de las pantallas.
- `styles.css`: identidad visual azul y blanco, diseño adaptable.
- `app.js`: navegación y comportamientos de demostración.

## Probar
Abre `index.html` en un navegador. No requiere instalación.

## Publicar como prototipo en GitHub Pages
1. Crea un repositorio nuevo en GitHub.
2. Sube los tres archivos a la raíz del repositorio.
3. En Settings → Pages, selecciona Deploy from a branch y la rama `main`, carpeta `/root`.
4. Guarda y espera a que GitHub publique la página.

## Importante: límites de esta versión
Esta es únicamente una maqueta visual. No implementa inicio de sesión, persistencia, base de datos, importación real de Excel ni controles de acceso. No introduzcas nombres, matrículas ni información real de estudiantes. Antes de usarla en la escuela conectaremos Supabase Auth y una base de datos con políticas RLS, y probaremos los permisos de cada rol.

## Catálogo inicial de materias
Español, Matemáticas, Biología, Historia, Formación Cívica y Ética, Geografía, Tecnología, Música, Artes, Socioemocional, Curricular, Deportes e Inglés.

En esta etapa las materias son un catálogo general; todavía no están asignadas a cuentas docentes específicas.

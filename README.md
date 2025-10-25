# Portafolio — Proyecto estático

Pequeño portafolio estático que contiene una página principal, estilos y scripts.

![Vista previa del proyecto](./img/demo.gif)

## Descripción

Este repositorio contiene una página web de portafolio simple (HTML/CSS/JS) que puedes abrir localmente para revisar el diseño y la interactividad.

Contenido principal:
- `index.html` — Página principal.
- `javaScript.js` — Lógica JavaScript del sitio.
- `css/` — Estilos del proyecto:
  - `reset.css` — Reset de estilos base.
  - `styles.css` — Estilos personalizados.
- `img/` — Carpeta con imágenes del portafolio.

## Estructura de archivos

```
/ (raíz)
├─ index.html
├─ javaScript.js
├─ css/
│  ├─ reset.css
│  └─ styles.css
└─ img/
```

## Tecnologías

- HTML5
- CSS3
- JavaScript (vanilla)

No hay dependencias externas ni compilación necesaria.

## Cómo ejecutar / Previsualizar (macOS / zsh)

Opciones rápidas:

- Abrir en el navegador (doble clic):
  - En Finder, doble clic en `index.html` o arrastra `index.html` a tu navegador.

- Servidor HTTP simple (recomendado para probar rutas relativas y fetch):

```zsh
# desde la raíz del proyecto
cd /Volumes/SSD_EXTERNO/tripleten/2025/portafolio
python3 -m http.server 8000
# luego abrir http://localhost:8000 en tu navegador
```

- Usar la extensión Live Server de VS Code:
  - Instala Live Server y haz click en "Go Live" en la esquina inferior derecha.

## Notas para desarrollo

- Cambios en `javaScript.js` y `css/styles.css` se reflejan al recargar la página.
- Si añades imágenes, colócalas en la carpeta `img/` y usa rutas relativas.

### Buenas prácticas
- Mantén los scripts separados del HTML (ya está en `javaScript.js`).
- Para nuevas funcionalidades, documenta en comentarios y agrega tests ligeros si corresponde.

## Contribuciones

Este proyecto es personal; si quieres proponer cambios, crea un fork y un pull request con una descripción clara de la modificación.

## Licencia

Si quieres aplicar una licencia oficial, añade un archivo `LICENSE`. Por defecto, este repositorio no incluye una licencia explícita.

## Contacto

Autor: luuzuriaga

Si quieres contactarme, añade tu email o perfil en la sección `Contacto` del repositorio o abre un issue.

---

Archivo generado automáticamente: `README.md` — creado para ayudar a previsualizar y contribuir al proyecto.

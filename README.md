# Portfolio React - Desarrollo Web Profesional

Portfolio profesional desarrollado con React 18 + Vite para mostrar proyectos de desarrollo web.

## 🚀 Características

- **React 18** con hooks modernos
- **React Router v6** para navegación entre páginas
- **Vite** como bundler ultrarrápido
- **Diseño responsive** adaptado a todos los dispositivos
- **Carrusel de imágenes** interactivo con auto-play
- **Animaciones suaves** y transiciones elegantes
- **Rutas dinámicas** para cada proyecto

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar build de producción
npm run preview
```

## 🏗️ Estructura del Proyecto

```
portfolio-react/
├── src/
│   ├── components/
│   │   ├── Home.jsx          # Página principal
│   │   ├── Home.css          # Estilos de la página principal
│   │   ├── ProjectDetail.jsx # Página de detalle del proyecto
│   │   ├── ProjectDetail.css # Estilos del detalle
│   │   ├── Carousel.jsx      # Componente de carrusel
│   │   └── Carousel.css      # Estilos del carrusel
│   ├── data/
│   │   └── projects.js       # Datos de los proyectos
│   ├── App.jsx               # Componente principal con rutas
│   ├── App.css               # Estilos globales de la app
│   ├── main.jsx              # Punto de entrada
│   └── index.css             # Estilos base
├── index.html                # HTML principal
├── vite.config.js            # Configuración de Vite
└── package.json              # Dependencias del proyecto
```

## 🎨 Personalización

### Añadir tus propios proyectos

Edita el archivo `src/data/projects.js` y modifica el array `projectsData`:

```javascript
{
  id: 7,
  title: "Tu Proyecto",
  icon: "🎨",
  gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  shortDescription: "Descripción corta para la tarjeta",
  fullDescription: "Descripción completa del proyecto",
  tags: ["Tag1", "Tag2"],
  images: [
    { icon: "🎨", gradient: "...", text: "Imagen 1" },
    // Más imágenes...
  ],
  technologies: ["React", "Node.js"],
  features: ["Característica 1", "Característica 2"]
}
```

### Cambiar colores

Edita las variables CSS en `src/index.css`:

```css
:root {
  --primary: #0a0e27;
  --secondary: #1a1f3a;
  --accent: #4a90e2;
  --gold: #d4af37;
  /* ... más variables */
}
```

### Añadir imágenes reales

Para usar imágenes reales en lugar de emojis:

1. Coloca tus imágenes en `public/images/`
2. Modifica el array de imágenes en los proyectos:

```javascript
images: [
  { url: "/images/proyecto1-hero.jpg", text: "Vista Principal" },
  { url: "/images/proyecto1-mobile.jpg", text: "Versión Móvil" }
]
```

3. Actualiza el componente Carousel para renderizar `<img>` en lugar de emojis

### Actualizar información de contacto

En `src/components/Home.jsx`, busca la sección de contacto y actualiza:

```jsx
<div className="contact-text">tu.email@ejemplo.com</div>
<div className="contact-text">+34 XXX XXX XXX</div>
```

## 🌐 Despliegue

### Netlify / Vercel

1. Conecta tu repositorio
2. El comando de build es: `npm run build`
3. El directorio de publicación es: `dist`

### GitHub Pages

```bash
npm run build
# Sube el contenido de la carpeta 'dist' a tu repositorio
```

## 📱 Responsive

El portfolio está completamente optimizado para:
- 📱 Móviles (320px - 768px)
- 📲 Tablets (768px - 1024px)
- 💻 Desktop (1024px+)

## ⚡ Performance

- Carga inicial optimizada
- Code splitting automático con Vite
- Imágenes y assets optimizados
- CSS modular por componente

## 🛠️ Tecnologías

- React 18.2.0
- React Router DOM 6.22.0
- Vite 5.1.4
- CSS3 con variables y animaciones

## 📄 Licencia

Este proyecto es de código abierto y está disponible para uso personal y comercial.

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si encuentras algún bug o tienes sugerencias de mejora, no dudes en abrir un issue o pull request.

---

Desarrollado con ❤️ para mostrar proyectos web profesionales

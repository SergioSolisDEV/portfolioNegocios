# 📸 Guía para Añadir Imágenes Reales al Portfolio

## 📁 Estructura de Carpetas

Crea la siguiente estructura dentro de tu proyecto:

```
portfolio-react/
├── public/
│   └── images/
│       ├── projects/
│       │   ├── corporativo/
│       │   │   ├── hero.jpg
│       │   │   ├── mobile.jpg
│       │   │   ├── admin.jpg
│       │   │   └── dashboard.jpg
│       │   ├── ecommerce/
│       │   │   ├── tienda.jpg
│       │   │   ├── carrito.jpg
│       │   │   ├── checkout.jpg
│       │   │   └── pedidos.jpg
│       │   ├── restaurante/
│       │   │   ├── inicio.jpg
│       │   │   ├── menu.jpg
│       │   │   ├── reservas.jpg
│       │   │   └── galeria.jpg
│       │   ├── landing/
│       │   │   ├── hero.jpg
│       │   │   ├── beneficios.jpg
│       │   │   ├── formulario.jpg
│       │   │   └── confirmacion.jpg
│       │   ├── clinica/
│       │   │   ├── portal.jpg
│       │   │   ├── especialistas.jpg
│       │   │   ├── agendar.jpg
│       │   │   └── blog.jpg
│       │   └── app/
│       │       ├── app.jpg
│       │       ├── notificaciones.jpg
│       │       ├── offline.jpg
│       │       └── sincronizacion.jpg
│       └── thumbnails/
│           ├── corporativo.jpg
│           ├── ecommerce.jpg
│           ├── restaurante.jpg
│           ├── landing.jpg
│           ├── clinica.jpg
│           └── app.jpg
```

## 🎨 Resoluciones Recomendadas

### Para el Carrusel (imágenes principales)
- **Resolución:** 1920x1080px (16:9)
- **Peso máximo:** 300-500 KB por imagen
- **Formato:** JPG o WebP (preferiblemente WebP para mejor compresión)

### Para las Tarjetas de Proyecto (thumbnails)
- **Resolución:** 800x600px o 1000x750px
- **Peso máximo:** 150-250 KB
- **Formato:** JPG o WebP

### Tips de Optimización
- Usa **TinyPNG** o **Squoosh** para comprimir sin perder calidad
- Considera usar **WebP** en lugar de JPG (mejor compresión)
- Para Retina displays, puedes usar imágenes 2x pero comprimidas

## 🔧 Modificar el Código

### 1. Actualizar el archivo `src/data/projects.js`

Cambia esto:

```javascript
images: [
  { icon: "🏢", gradient: "linear-gradient(...)", text: "Vista Principal" },
  { icon: "📱", gradient: "linear-gradient(...)", text: "Versión Móvil" },
  // ...
]
```

Por esto:

```javascript
images: [
  { url: "/images/projects/corporativo/hero.jpg", alt: "Vista Principal" },
  { url: "/images/projects/corporativo/mobile.jpg", alt: "Versión Móvil" },
  { url: "/images/projects/corporativo/admin.jpg", alt: "Panel Admin" },
  { url: "/images/projects/corporativo/dashboard.jpg", alt: "Dashboard" }
]
```

### 2. Actualizar el componente `src/components/Carousel.jsx`

Reemplaza la sección del slide:

```jsx
// ANTES (con emojis)
<div 
  key={index} 
  className="carousel-slide"
  style={{ background: image.gradient }}
>
  <div style={{ textAlign: 'center' }}>
    <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>
      {image.icon}
    </div>
    <div style={{ fontSize: '1.5rem', fontWeight: '300' }}>
      {image.text}
    </div>
  </div>
</div>
```

Por esto:

```jsx
// DESPUÉS (con imágenes reales)
<div 
  key={index} 
  className="carousel-slide"
>
  <img 
    src={image.url} 
    alt={image.alt}
    className="carousel-image"
  />
  <div className="carousel-caption">
    {image.alt}
  </div>
</div>
```

### 3. Actualizar estilos en `src/components/Carousel.css`

Añade estos estilos:

```css
.carousel-slide {
  min-width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--secondary);
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.carousel-caption {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-size: 1.125rem;
  font-weight: 500;
  backdrop-filter: blur(10px);
}
```

### 4. Actualizar thumbnails en tarjetas (Opcional)

En `src/components/Home.jsx`, cambia:

```jsx
<div className="project-image" style={{ background: project.gradient }}>
  {project.icon}
</div>
```

Por:

```jsx
<div className="project-image">
  <img 
    src={`/images/thumbnails/${project.id === 1 ? 'corporativo' : 
          project.id === 2 ? 'ecommerce' : 
          project.id === 3 ? 'restaurante' : 
          project.id === 4 ? 'landing' : 
          project.id === 5 ? 'clinica' : 'app'}.jpg`}
    alt={project.title}
    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
  />
</div>
```

O mejor aún, añade un campo `thumbnail` en los datos:

```javascript
// En projects.js
{
  id: 1,
  title: "Sitio Corporativo",
  thumbnail: "/images/thumbnails/corporativo.jpg",
  // ... resto de datos
}
```

Y usa:

```jsx
<div className="project-image">
  <img 
    src={project.thumbnail}
    alt={project.title}
    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
  />
</div>
```

## 📸 Cómo Obtener Screenshots de tus Proyectos

### Opción 1: Screenshots Manuales
1. Abre el sitio web en resolución 1920x1080
2. Usa **Chrome DevTools** → toma screenshot de página completa
3. Recorta las secciones importantes

### Opción 2: Herramientas Automatizadas
- **Screely** (screely.com) - Añade mockups bonitos
- **Browserframe** (browserframe.com) - Frames de navegador
- **Shot.so** - Screenshots con gradientes

### Opción 3: Mockups
- **Mockuper** (mockuper.net)
- **Smartmockups** (smartmockups.com)
- Genera vistas desktop, mobile, tablet

## ⚡ Performance Tips

### Lazy Loading
Añade lazy loading para las imágenes:

```jsx
<img 
  src={image.url} 
  alt={image.alt}
  loading="lazy"
  className="carousel-image"
/>
```

### WebP con Fallback
```jsx
<picture>
  <source srcSet={image.url.replace('.jpg', '.webp')} type="image/webp" />
  <img src={image.url} alt={image.alt} />
</picture>
```

### Preload para Primera Imagen
En `index.html`:

```html
<link rel="preload" as="image" href="/images/projects/corporativo/hero.jpg">
```

## 📝 Ejemplo Completo

Archivo `src/data/projects.js` actualizado:

```javascript
export const projectsData = [
  {
    id: 1,
    title: "Sitio Corporativo",
    icon: "🏢",
    thumbnail: "/images/thumbnails/corporativo.jpg",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    shortDescription: "Página web empresarial...",
    fullDescription: "Desarrollo completo...",
    tags: ["Responsive", "CMS", "SEO"],
    images: [
      { url: "/images/projects/corporativo/hero.jpg", alt: "Vista Principal" },
      { url: "/images/projects/corporativo/mobile.jpg", alt: "Versión Móvil" },
      { url: "/images/projects/corporativo/admin.jpg", alt: "Panel Admin" },
      { url: "/images/projects/corporativo/dashboard.jpg", alt: "Dashboard" }
    ],
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    features: [
      "Sistema de gestión de contenidos personalizado",
      "Optimización SEO on-page y técnico",
      // ...
    ]
  },
  // ... resto de proyectos
];
```

## ✅ Checklist Final

- [ ] Crear carpeta `public/images/projects/`
- [ ] Optimizar todas las imágenes (< 500KB)
- [ ] Usar nombres descriptivos y consistentes
- [ ] Actualizar `projects.js` con rutas de imágenes
- [ ] Modificar componente `Carousel.jsx`
- [ ] Añadir estilos CSS para imágenes
- [ ] Probar en diferentes resoluciones
- [ ] Añadir lazy loading
- [ ] Verificar que las imágenes se cargan correctamente

---

¡Con esto tu portfolio tendrá imágenes profesionales y optimizadas! 🚀

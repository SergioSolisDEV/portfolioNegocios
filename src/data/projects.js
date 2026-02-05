export const projectsData = [
  {
    id: 1,
    title: "Sitio Corporativo",
    icon: "🏢",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    shortDescription:
      "Página web empresarial con diseño moderno, sistema de gestión de contenidos y formulario de contacto integrado.",
    fullDescription:
      "Desarrollo completo de sitio web corporativo para empresa líder en su sector. Incluye diseño responsive, panel de administración personalizado, y optimización SEO avanzada. La plataforma permite gestionar todo el contenido de manera intuitiva sin necesidad de conocimientos técnicos.",
    tags: ["Responsive", "LandingPage", "SEO"],
    thumbnail: "/images/projects/coorporativo/hero.jpg",
    images: [
      { url: "/images/projects/coorporativo/hero.jpg", alt: "Vista Principal" },
      { url: "/images/projects/coorporativo/services.jpg", alt: "Servicios" },
      { url: "/images/projects/coorporativo/info.jpg", alt: "Nosotros" },
      {
        url: "/images/projects/coorporativo/testimonios.jpg",
        alt: "Testimonios",
      },
      { url: "/images/projects/coorporativo/contact.jpg", alt: "Contacto" },
    ],
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    features: [
      "Optimización SEO on-page y técnico",
      "Formularios de contacto inteligentes",
    ],
  },
  {
    id: 2,
    title: "E-commerce",
    icon: "🛍️",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    shortDescription:
      "Tienda online completa con catálogo de productos, carrito de compras, pasarela de pago y panel de administración.",
    fullDescription:
      "Plataforma de comercio electrónico robusta y escalable. Incluye gestión completa de inventario, múltiples métodos de pago, sistema de cupones y descuentos, y análisis de ventas en tiempo real. Diseñada para ofrecer una experiencia de compra excepcional.",
    tags: ["E-commerce", "Pagos Online", "Dashboard"],
    thumbnail: "/images/projects/ecommerce/hero.jpg",
    images: [
      { url: "/images/projects/ecommerce/hero.jpg", alt: "Vista Principal" },
      { url: "/images/projects/ecommerce/destacados.jpg", alt: "Destacados" },
      { url: "/images/projects/ecommerce/productos.jpg", alt: "Productos" },
      { url: "/images/projects/ecommerce/carrtio.jpg", alt: "Carrito" },
      { url: "/images/projects/ecommerce/pago.jpg", alt: "Pago" },
      { url: "/images/projects/ecommerce/dashboard.jpg", alt: "Panel Admin" },
    ],
    technologies: ["React", "Stripe", "PostgreSQL", "Express"],
    features: [
      "Catálogo de productos dinámico",
      "Pasarela de pago segura",
      "Gestión de inventario en tiempo real",
      "Sistema de cupones y descuentos",
      "Notificaciones por email automáticas",
    ],
  },
  {
    id: 3,
    title: "Restaurante",
    icon: "🍴",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    shortDescription:
      "Sitio web para restaurante con menú digital interactivo, sistema de reservas online y galería de fotos.",
    fullDescription:
      "Solución web completa para restaurante que permite a los clientes explorar el menú, hacer reservas en línea y conocer el establecimiento.",
    tags: ["Reservas", "Menú Digital", "Móvil First"],
    thumbnail: "/images/projects/restaurante/restauranteHero.jpg",
    images: [
      {
        url: "/images/projects/restaurante/restauranteHero.jpg",
        alt: "Vista Principal",
      },
      {
        url: "/images/projects/restaurante/restauranteMenu.jpg",
        alt: "Menú Digital",
      },
      {
        url: "/images/projects/restaurante/restauranteContact.jpg",
        alt: "Contacto",
      },
    ],
    technologies: ["ReactJS", "Supabase", "CSS"],
    features: [
      "Menú digital",
      "Sistema de reservas",
      "Galería de fotos",
      "Integración con Google Maps",
      "Versión optimizada para móviles",
    ],
  },
  {
    id: 4,
    title: "Landing Page",
    icon: "💼",
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    shortDescription:
      "Página de destino optimizada para conversión con diseño persuasivo, llamadas a la acción estratégicas y formularios.",
    fullDescription:
      "Landing page de alta conversión diseñada específicamente para campañas de marketing digital.",
    tags: ["Alta Conversión", "Analytics", "Formularios"],
    thumbnail: "/images/projects/landing/landingHero.jpg",
    images: [
      {
        url: "/images/projects/landing/landingHero.jpg",
        alt: "Vista Principal",
      },
      {
        url: "/images/projects/landing/landingServicios.jpg",
        alt: "Servicios",
      },
      {
        url: "/images/projects/landing/landingInfo.jpg",
        alt: "Información",
      },
      {
        url: "/images/projects/landing/landingReviews.jpg",
        alt: "Reseñas",
      },
      {
        url: "/images/projects/landing/landingContact.jpg",
        alt: "Contacto",
      },
    ],
    technologies: ["HTML5", "CSS3", "JavaScript"],
    features: [
      "Diseño enfocado en conversión",
      "Formularios optimizados",
      "Carga ultrarrápida",
    ],
  },
  {
    id: 5,
    title: "Clínica Médica",
    icon: "🏥",
    gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
    shortDescription:
      "Portal web para clínica con sistema de citas online, información de servicios y blog de salud.",
    fullDescription:
      "Plataforma integral para clínica médica que facilita la gestión de citas, información de servicios médicos y contenido educativo. Incluye calendario de disponibilidad de doctores, recordatorios automáticos y portal del paciente.",
    tags: ["Reserva de citas", "Multiidioma"],
    thumbnail: "/images/projects/medico/hero.jpg",
    images: [
      { url: "/images/projects/medico/hero.jpg", alt: "Vista Principal" },
      { url: "/images/projects/medico/servicios.jpg", alt: "Servicios" },
      { url: "/images/projects/medico/citas.jpg", alt: "Sistema de Citas" },
      { url: "/images/projects/medico/testimonios.jpg", alt: "Testimonios" },
      {
        url: "/images/projects/medico/agendar.jpg",
        alt: "Reservar Cita",
      },
    ],
    technologies: ["React", "Node.js", "MySQL", "i18n"],
    features: [
      "Sistema de agendamiento online",
      "Perfil de médicos y especialidades",
      "Portal del paciente",
      "Soporte multiidioma",
    ],
  },
  {
    id: 6,
    title: "App Web",
    icon: "📱",
    gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    shortDescription:
      "Aplicación web progresiva, notificaciones push y experiencia de usuario optimizada.",
    fullDescription:
      "Aplicación web progresiva de última generación que funciona como una app nativa. Incluye capacidades offline, sincronización en segundo plano, notificaciones push y una experiencia de usuario fluida en cualquier dispositivo.",
    tags: ["PWA", "Real-time", "API Rest"],
    thumbnail: "/images/projects/webapp/webappHero.jpg",
    images: [
      { url: "/images/projects/webapp/webappHero.jpg", alt: "Vista Principal" },
      { url: "/images/projects/webapp/webappBlog.jpg", alt: "Blog" },
      { url: "/images/projects/webapp/webappLibrary.jpg", alt: "Biblioteca" },
      { url: "/images/projects/webapp/webappFav.jpg", alt: "Favoritos" },
      { url: "/images/projects/webapp/webappProfile.jpg", alt: "Perfil" },
      { url: "/images/projects/webapp/webappLogin.jpg", alt: "Login" },
    ],
    technologies: ["React", "Tailwind CSS", "Supabase"],
    features: [
      "Notificaciones push",
      "Actualización en segundo plano",
      "Integración con base de datos",
      "Sincronización automática",
    ],
  },
];

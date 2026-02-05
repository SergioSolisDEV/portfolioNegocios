import { useNavigate } from "react-router-dom";
import { projectsData } from "../data/projects";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  const handleProjectClick = (projectId) => {
    navigate(`/project/${projectId}`);
  };

  return (
    <>
      <header>
        <div className="header-bg"></div>
        <div className="hero-content">
          <div className="hero-label">Desarrollo Web Premium</div>
          <h1>Transformo Ideas en Experiencias Digitales</h1>
          <p className="hero-subtitle">
            Sitios web profesionales que impulsan tu negocio y convierten
            visitantes en clientes
          </p>
          <a href="#portfolio" className="cta-button">
            Ver Proyectos
          </a>
        </div>
        <div className="scroll-indicator">Explora ↓</div>
      </header>

      <section className="section" id="portfolio">
        <div className="section-header">
          <div className="section-label">Portfolio</div>
          <h2 className="section-title">Proyectos Destacados</h2>
          <p className="section-subtitle">
            Una selección de los sitios web que he desarrollado para distintos
            tipos de negocio
          </p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => handleProjectClick(project.id)}
            >
              <div className="project-image">
                {project.thumbnail ? (
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <div
                    style={{
                      background: project.gradient,
                      width: "100%",
                      height: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "3rem",
                      color: "white",
                    }}
                  >
                    {project.icon}
                  </div>
                )}
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">
                  {project.shortDescription}
                </p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section services">
        <div className="section-header">
          <div className="section-label">Servicios</div>
          <h2 className="section-title">Lo Que Ofrezco</h2>
          <p className="section-subtitle">
            Soluciones completas de desarrollo web adaptadas a las necesidades
            de tu negocio
          </p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🎨</div>
            <h3 className="service-title">Diseño Web</h3>
            <p className="service-description">
              Interfaces modernas y atractivas que reflejan la identidad de tu
              marca y cautivan a tus visitantes.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">⚡</div>
            <h3 className="service-title">Desarrollo</h3>
            <p className="service-description">
              Código limpio, optimizado y escalable utilizando las últimas
              tecnologías y mejores prácticas.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">📱</div>
            <h3 className="service-title">Responsive</h3>
            <p className="service-description">
              Sitios que se adaptan perfectamente a cualquier dispositivo:
              móvil, tablet y escritorio.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">🚀</div>
            <h3 className="service-title">SEO & Performance</h3>
            <p className="service-description">
              Optimización para buscadores y velocidad de carga para maximizar
              tu visibilidad online.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">🛠️</div>
            <h3 className="service-title">Mantenimiento</h3>
            <p className="service-description">
              Soporte continuo, actualizaciones y mejoras para mantener tu sitio
              siempre al día.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">📊</div>
            <h3 className="service-title">Analytics</h3>
            <p className="service-description">
              Integración de herramientas de análisis para medir y mejorar el
              rendimiento de tu sitio.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="section-header">
          <div className="section-label">Contacto</div>
          <h2 className="section-title">Trabajemos Juntos</h2>
          <p className="section-subtitle">
            ¿Listo para llevar tu negocio al siguiente nivel? Contáctame para
            una consulta gratuita
          </p>
        </div>

        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-icon">📧</div>
            <div className="contact-text">sergiosolis1555@gmail.com</div>
          </div>
        </div>

        <div
          style={{
            marginTop: "3rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <a href="mailto:sergiosolis1555@gmail.com" className="cta-button">
            Enviar Mensaje
          </a>
        </div>
      </section>

      <footer>
        <p>
          &copy; 2026 Portfolio de Desarrollo Web. Todos los derechos
          reservados.
        </p>
      </footer>
    </>
  );
}

export default Home;

import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Carousel from "./Carousel";
import { projectsData } from "../data/projects";
import "./ProjectDetail.css";

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find((p) => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="project-detail">
        <div className="project-detail-content">
          <h2>Proyecto no encontrado</h2>
          <button className="back-button" onClick={() => navigate("/")}>
            ← Volver al Portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <button className="back-button" onClick={() => navigate("/")}>
        ← Volver al Portfolio
      </button>

      <div className="project-detail-content">
        <div className="project-detail-header">
          <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>
            {project.icon}
          </div>
          <h2 className="project-detail-title">{project.title}</h2>
          <p className="project-detail-description">
            {project.fullDescription}
          </p>
        </div>

        <Carousel images={project.images} />

        <div className="project-tags-wrapper">
          <div className="project-tags">
            {project.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="project-info-grid">
          <div className="info-card">
            <h3>Tecnologías</h3>
            <ul>
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>

          <div className="info-card">
            <h3>Características</h3>
            <ul>
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;

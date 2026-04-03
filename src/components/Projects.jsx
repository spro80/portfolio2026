import { useEffect, useState } from 'react';
import useFadeIn from './useFadeIn';
import { getProjects } from '../api';

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        background: 'var(--card-bg)',
        border: `1px solid ${hovered ? 'rgba(0,201,255,0.35)' : 'var(--card-border)'}`,
        borderRadius: 8, overflow: 'hidden', height: '100%',
        transition: 'border-color 0.25s, transform 0.25s',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        display: 'flex', flexDirection: 'column',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Code preview */}
      <div style={{
        height: 180, position: 'relative',
        background: '#0d1117',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden',
      }}>
        <pre style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.72rem',
          color: 'rgba(255,255,255,0.18)',
          lineHeight: 1.6, padding: '1rem', margin: 0,
          whiteSpace: 'pre',
        }}>
          {project.code}
        </pre>
        <div style={{
          position: 'absolute', top: '1rem', right: '1rem',
          background: 'rgba(0,201,255,0.1)',
          border: `1px solid rgba(0,201,255,0.3)`,
          color: project.labelColor,
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '0.65rem', padding: '0.2rem 0.6rem',
          borderRadius: 2, letterSpacing: '0.1em',
        }}>
          {project.label}
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff', marginBottom: '0.4rem' }}>
          {project.title}
        </div>
        <div style={{ color: 'var(--muted)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '1rem', flex: 1 }}>
          {project.desc}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
          {project.stack.map(t => (
            <span key={t} style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.68rem', color: 'var(--muted)',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid var(--card-border)',
              padding: '0.2rem 0.55rem', borderRadius: 2,
            }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCol({ project }) {
  const ref = useFadeIn();
  return (
    <div className="col-md-6 col-lg-4 fade-in" ref={ref}>
      <ProjectCard project={project} />
    </div>
  );
}

export default function Projects() {
  const headRef = useFadeIn();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then(setProjects);
  }, []);

  return (
    <section id="projects" style={{ padding: '6rem 0' }}>
      <div className="container">
        <div className="text-center mb-5 fade-in" ref={headRef}>
          <p className="section-tag">proyectos</p>
          <h2 className="section-title">Trabajo seleccionado</h2>
          <p className="section-sub mx-auto">
            Proyectos que demuestran mi rango técnico y capacidad de entrega
            en distintos contextos y tecnologías.
          </p>
        </div>

        <div className="row g-4">
          {projects.map((p, i) => (
            <ProjectCol key={i} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

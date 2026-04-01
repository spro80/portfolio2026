import { useState } from 'react';
import useFadeIn from './useFadeIn';

const services = [
  {
    title: 'Desarrollo Frontend',
    desc: 'Interfaces modernas, responsivas y de alto rendimiento con React, Vue o Angular. UX excepcional con código limpio y accesible.',
    tags: ['React', 'Vue', 'Angular', 'Bootstrap'],
    icon: (
      <svg viewBox="0 0 24 24" width={22} height={22} stroke="var(--accent)" fill="none" strokeWidth={2}>
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
  },
  {
    title: 'Desarrollo Backend',
    desc: 'APIs robustas y microservicios escalables. Diseño de bases de datos, autenticación, integración de servicios y optimización de rendimiento.',
    tags: ['Node.js', 'Python', 'Java', 'REST/GraphQL'],
    icon: (
      <svg viewBox="0 0 24 24" width={22} height={22} stroke="var(--accent)" fill="none" strokeWidth={2}>
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
  {
    title: 'Cloud & DevOps',
    desc: 'Arquitectura cloud en AWS, Azure o GCP. CI/CD pipelines, containerización con Docker/Kubernetes e infraestructura como código con Terraform.',
    tags: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
    icon: (
      <svg viewBox="0 0 24 24" width={22} height={22} stroke="var(--accent)" fill="none" strokeWidth={2}>
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
      </svg>
    ),
  },
  {
    title: 'Consultoría Técnica',
    desc: 'Revisión de arquitectura, code reviews, selección de stack tecnológico y roadmap técnico. Apoyo en decisiones estratégicas de producto.',
    tags: ['Arquitectura', 'Code Review', 'Tech Lead'],
    icon: (
      <svg viewBox="0 0 24 24" width={22} height={22} stroke="var(--accent)" fill="none" strokeWidth={2}>
        <path d="M12 20h9"/>
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
  },
  {
    title: 'Auditoría & Performance',
    desc: 'Diagnóstico de sistemas existentes, detección de cuellos de botella, seguridad, optimización de queries y mejora de tiempos de respuesta.',
    tags: ['Performance', 'Seguridad', 'Optimización'],
    icon: (
      <svg viewBox="0 0 24 24" width={22} height={22} stroke="var(--accent)" fill="none" strokeWidth={2}>
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
  },
  {
    title: 'MVP & Startups',
    desc: 'Desarrollo ágil de productos mínimos viables. Stack correcto, tiempo al mercado rápido y base de código escalable desde el día uno.',
    tags: ['MVP', 'Agile', 'Full Stack'],
    icon: (
      <svg viewBox="0 0 24 24" width={22} height={22} stroke="var(--accent)" fill="none" strokeWidth={2}>
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
  },
];

function ServiceCard({ service }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{
        background: 'var(--card-bg)',
        border: `1px solid ${hovered ? 'rgba(0,255,136,0.35)' : 'var(--card-border)'}`,
        borderRadius: 8, padding: '2rem', height: '100%',
        transition: 'border-color 0.25s, transform 0.25s',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        cursor: 'default',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{
        width: 48, height: 48, borderRadius: 6,
        background: 'rgba(0,255,136,0.1)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '1.25rem',
      }}>
        {service.icon}
      </div>
      <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', marginBottom: '0.5rem' }}>
        {service.title}
      </div>
      <div style={{ color: 'var(--muted)', fontSize: '0.88rem', lineHeight: 1.65 }}>
        {service.desc}
      </div>
      <div style={{ marginTop: '1.25rem' }}>
        {service.tags.map(t => <span key={t} className="tech-pill">{t}</span>)}
      </div>
    </div>
  );
}

export default function Services() {
  const headRef = useFadeIn();

  return (
    <section
      id="services"
      style={{
        padding: '6rem 0',
        background: 'rgba(255,255,255,0.01)',
        borderTop: '1px solid var(--card-border)',
        borderBottom: '1px solid var(--card-border)',
      }}
    >
      <div className="container">
        <div className="text-center mb-5 fade-in" ref={headRef}>
          <p className="section-tag">servicios</p>
          <h2 className="section-title">¿En qué puedo ayudarte?</h2>
          <p className="section-sub mx-auto">
            Ofrezco servicios de desarrollo de software end-to-end adaptados
            a las necesidades de tu proyecto o empresa.
          </p>
        </div>

        <div className="row g-4">
          {services.map((s, i) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const ref = useFadeIn();
            return (
              <div key={i} className="col-md-6 col-lg-4 fade-in" ref={ref}>
                <ServiceCard service={s} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

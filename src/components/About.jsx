import { useEffect, useState } from 'react';
import useFadeIn from './useFadeIn';
import { getSkills, getTimeline } from '../api';

const cardStyle = {
  background: 'var(--card-bg)',
  border: '1px solid var(--card-border)',
  borderRadius: 8, padding: '2.5rem',
};

export default function About() {
  const leftRef  = useFadeIn();
  const rightRef = useFadeIn();

  const [skills,   setSkills]   = useState([]);
  const [timeline, setTimeline] = useState([]);

  useEffect(() => {
    getSkills().then(setSkills);
    getTimeline().then(setTimeline);
  }, []);

  return (
    <section id="about" style={{ padding: '6rem 0' }}>
      <div className="container">
        <div className="row align-items-center g-5">

          {/* Left — bio & skills */}
          <div className="col-lg-5 fade-in" ref={leftRef}>
            <p className="section-tag">sobre mí</p>
            <h2 className="section-title">Senior Software Engineer & AI Engineer</h2>
            <p className="section-sub mb-4">
              Soy Spiro, ingeniero de software con más de 15 años construyendo
              aplicaciones backend, frontend, inteligencia artificial.
            </p>
            <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Especializado en tecnologías de Inteligencia Artificial: Diseño y despliegue de agentes inteligentes,
              soluciones de IA Generativa y aplicaciones LLM usando LangChain, LangGraph
              y arquitecturas RAG. Amplia experiencia en arquitecturas de microservicios,
              event-driven, DevOps cloud-native en AWS.
            </p>
            <div>
              {skills.map(s => (
                <span key={s} className="tech-pill">{s}</span>
              ))}
            </div>
          </div>

          {/* Right — timeline */}
          <div className="col-lg-7 fade-in" ref={rightRef}>
            <div style={cardStyle}>
              <p className="section-tag mb-3">experiencia</p>
              {timeline.map((item, i) => (
                <div key={i} style={{
                  position: 'relative',
                  paddingLeft: '1.5rem',
                  marginBottom: i < timeline.length - 1 ? '1.5rem' : 0,
                }}>
                  {/* dot */}
                  <span style={{
                    position: 'absolute', left: 0, top: 8,
                    width: 8, height: 8, borderRadius: '50%',
                    background: 'var(--accent)', display: 'block',
                  }} />
                  {/* line */}
                  {i < timeline.length - 1 && (
                    <span style={{
                      position: 'absolute', left: 3, top: 18,
                      width: 1, height: 'calc(100% + 8px)',
                      background: 'var(--card-border)', display: 'block',
                    }} />
                  )}
                  <div style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.72rem', color: 'var(--accent)',
                  }}>{item.year}</div>
                  <div style={{ fontWeight: 600, fontSize: '1rem', color: '#fff' }}>{item.role}</div>
                  <div style={{ color: 'var(--muted)', fontSize: '0.88rem' }}>{item.company}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

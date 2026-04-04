import { useEffect, useState } from 'react';
import useFadeIn from './useFadeIn';
import { getSkills, getTimeline } from '../api';
import t from '../i18n';

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
    <section id="about" style={{ padding: '6rem 0', borderTop: '1px solid var(--card-border)' }}>
      <div className="container">
        <div className="row align-items-center g-5">

          {/* Left — bio & skills */}
          <div className="col-lg-5 fade-in" ref={leftRef}>
            <p className="section-tag">{t.about.tag}</p>
            <h2 className="section-title">{t.about.title}</h2>
            <p className="section-sub mb-4">{t.about.bio1}</p>
            <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              {t.about.bio2}
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
              <p className="section-tag mb-3">{t.about.expTag}</p>
              {timeline.map((item, i) => (
                <div key={i} style={{
                  position: 'relative',
                  paddingLeft: '1.5rem',
                  marginBottom: i < timeline.length - 1 ? '1.5rem' : 0,
                }}>
                  <span style={{
                    position: 'absolute', left: 0, top: 8,
                    width: 8, height: 8, borderRadius: '50%',
                    background: 'var(--accent)', display: 'block',
                  }} />
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

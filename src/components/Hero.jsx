import { useEffect, useRef, useState } from 'react';
import { getStats } from '../api';


export default function Hero() {
  const contentRef = useRef(null);
  const [stats, setStats] = useState([]);

  useEffect(() => {
    getStats().then(setStats);
  }, []);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    requestAnimationFrame(() => {
      el.style.transition = 'opacity 0.9s ease, transform 0.9s ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
  }, []);

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="home"
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '120px 1.5rem 80px',
        position: 'relative', overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      {/* Grid bg */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(0,255,136,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,255,136,0.04) 1px, transparent 1px)`,
        backgroundSize: '48px 48px',
      }} />

      {/* Radial glow */}
      <div style={{
        position: 'absolute',
        width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,255,136,0.08) 0%, transparent 70%)',
        top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div ref={contentRef} style={{
        position: 'relative', maxWidth: 1100, width: '100%',
        display: 'flex', alignItems: 'center', gap: '4rem', flexWrap: 'wrap',
      }}>

        {/* Left: text */}
        <div style={{ flex: '1 1 420px', textAlign: 'left' }}>

          {/* Availability badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'rgba(0,255,136,0.08)', border: '1px solid rgba(0,255,136,0.25)',
            padding: '0.4rem 1rem', borderRadius: 2, marginBottom: '1.5rem',
          }}>
            <span style={{
              width: 7, height: 7, borderRadius: '50%',
              background: 'var(--accent)',
              animation: 'pulse 1.5s infinite',
              display: 'inline-block',
            }} />
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.72rem', color: 'var(--accent)', letterSpacing: '0.08em',
            }}>
              Disponible para proyectos
            </span>
          </div>

          {/* Badge */}
          <div style={{
            display: 'inline-block',
            background: 'rgba(0,255,136,0.1)', border: '1px solid rgba(0,255,136,0.3)',
            color: 'var(--accent)',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '0.75rem', padding: '0.35rem 1rem', borderRadius: 2,
            marginBottom: '2rem', letterSpacing: '0.1em',
          }}>
            Software Engineer &nbsp;·&nbsp; Full Stack &nbsp;·&nbsp; Cloud
          </div>

          <h1 style={{
            fontSize: 'clamp(2.8rem, 6vw, 5rem)',
            fontWeight: 800, lineHeight: 1.0,
            color: '#fff', marginBottom: '1.5rem', letterSpacing: '-2px',
          }}>
            Hola, soy<br />
            <span style={{ color: 'var(--accent)' }}>Spiro.</span>
          </h1>

          <p style={{
            fontSize: '1.05rem', color: 'var(--muted)',
            maxWidth: 480, margin: '0 0 2.5rem', lineHeight: 1.7,
          }}>
            Ingeniero de software especializado en arquitecturas escalables,
            desarrollo Full Stack y soluciones Cloud. Convierto ideas complejas
            en productos digitales de alto rendimiento.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button className="btn-primary-custom" onClick={() => scrollTo('#projects')}>
              Ver proyectos
            </button>
            <button className="btn-outline-custom" onClick={() => scrollTo('#contact')}>
              Hablemos
            </button>
          </div>

          {/* Stats */}
          <div style={{
            display: 'flex', gap: '2.5rem',
            marginTop: '3.5rem', paddingTop: '2rem',
            borderTop: '1px solid var(--card-border)',
            flexWrap: 'wrap',
          }}>
            {stats.map(s => (
              <div key={s.label}>
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: '1.8rem', fontWeight: 700, color: 'var(--accent)',
                }}>{s.num}</div>
                <div style={{
                  fontSize: '0.75rem', color: 'var(--muted)',
                  textTransform: 'uppercase', letterSpacing: '0.08em',
                }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: photo */}
        <div style={{ flex: '0 0 auto', display: 'flex', justifyContent: 'center' }}>
          {/* Decorative glow behind photo */}
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute', inset: -24,
              background: 'radial-gradient(circle, rgba(0,255,136,0.12) 0%, transparent 70%)',
              borderRadius: '50%', pointerEvents: 'none',
            }} />
            {/* Gradient border wrapper */}
            <div style={{
              padding: '2px',
              background: 'linear-gradient(135deg, var(--accent), var(--accent2))',
              borderRadius: 20,
            }}>
              <img
                src="/avatars/hud.svg"
                alt="Spiro - AI Engineer"
                style={{ width: 300, height: 370, borderRadius: 18, display: 'block' }}
              />
            </div>
            {/* Floating badge */}
            <div style={{
              position: 'absolute', bottom: -16, right: -16,
              background: 'var(--card-bg)', border: '1px solid var(--card-border)',
              borderRadius: 8, padding: '0.5rem 0.85rem',
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '0.68rem', color: 'var(--accent)',
              backdropFilter: 'blur(8px)',
            }}>
              AI Engineer
            </div>
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '2rem', left: '50%',
        animation: 'bounce 2s infinite',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
        color: 'var(--muted)',
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '0.65rem', letterSpacing: '0.1em',
      }}>
        <div style={{
          width: 1, height: 32,
          background: 'linear-gradient(to bottom, var(--accent), transparent)',
        }} />
        <span>scroll</span>
      </div>
    </section>
  );
}

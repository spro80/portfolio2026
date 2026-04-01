import { useState, useEffect } from 'react';

const links = [
  { label: 'Sobre mí',  href: '#about'    },
  { label: 'Servicios', href: '#services'  },
  { label: 'Proyectos', href: '#projects'  },
  { label: 'Contacto',  href: '#contact'   },
];

const styles = {
  nav: {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999,
    background: 'rgba(10,10,15,0.92)',
    backdropFilter: 'blur(12px)',
    borderBottom: '1px solid var(--card-border)',
    padding: '0 2rem',
    height: 64,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  },
  logo: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '1.1rem', fontWeight: 700,
    color: 'var(--accent)', textDecoration: 'none',
  },
  ul: { display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 },
  link: {
    color: 'var(--muted)', textDecoration: 'none',
    fontSize: '0.85rem', letterSpacing: '0.05em', textTransform: 'uppercase',
    transition: 'color 0.2s',
  },
  cta: {
    background: 'var(--accent)', color: '#0a0a0f',
    border: 'none', padding: '0.5rem 1.25rem',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '0.8rem', fontWeight: 700,
    borderRadius: 4, cursor: 'pointer', textDecoration: 'none',
    transition: 'opacity 0.2s',
  },
  hamburger: {
    display: 'none', background: 'none', border: 'none',
    color: 'var(--text)', fontSize: '1.5rem', cursor: 'pointer',
  },
  mobileMenu: {
    position: 'fixed', top: 64, left: 0, right: 0,
    background: 'var(--dark)',
    borderBottom: '1px solid var(--card-border)',
    padding: '1.5rem 2rem',
    display: 'flex', flexDirection: 'column', gap: '1.25rem',
    zIndex: 998,
  },
};

export default function Navbar() {
  const [open, setOpen]     = useState(false);
  const [mobile, setMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const onResize = () => setMobile(window.innerWidth < 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleNav = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <nav style={styles.nav}>
        <a href="#home" style={styles.logo} onClick={e => { e.preventDefault(); handleNav('#home'); }}>
          david.dev
        </a>

        {/* Desktop links */}
        {!mobile && (
          <ul style={styles.ul}>
            {links.map(l => (
              <li key={l.href}>
                <a
                  href={l.href}
                  style={styles.link}
                  onClick={e => { e.preventDefault(); handleNav(l.href); }}
                  onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                  onMouseLeave={e => e.target.style.color = 'var(--muted)'}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        )}

        {!mobile && (
          <a
            href="#contact"
            style={styles.cta}
            onClick={e => { e.preventDefault(); handleNav('#contact'); }}
            onMouseEnter={e => e.target.style.opacity = '0.85'}
            onMouseLeave={e => e.target.style.opacity = '1'}
          >
            Contratar
          </a>
        )}

        {mobile && (
          <button
            style={{ ...styles.hamburger, display: 'block' }}
            onClick={() => setOpen(o => !o)}
            aria-label="Menú"
          >
            {open ? '✕' : '☰'}
          </button>
        )}
      </nav>

      {/* Mobile menu */}
      {mobile && open && (
        <div style={styles.mobileMenu}>
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              style={{ ...styles.link, fontSize: '1rem' }}
              onClick={e => { e.preventDefault(); handleNav(l.href); }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary-custom"
            style={{ textAlign: 'center' }}
            onClick={e => { e.preventDefault(); handleNav('#contact'); }}
          >
            Contratar
          </a>
        </div>
      )}
    </>
  );
}

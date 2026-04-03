import { useEffect, useState } from 'react';
import useFadeIn from './useFadeIn';
import { getContact } from '../api';

const ICONS = {
  mail: (
    <svg viewBox="0 0 24 24" width={16} height={16} stroke="var(--accent)" fill="none" strokeWidth={2}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  ),
  location: (
    <svg viewBox="0 0 24 24" width={16} height={16} stroke="var(--accent)" fill="none" strokeWidth={2}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" width={16} height={16} stroke="var(--accent)" fill="none" strokeWidth={2}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" width={16} height={16} stroke="var(--accent)" fill="none" strokeWidth={2}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
    </svg>
  ),
};

const inputStyle = {
  width: '100%',
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid var(--card-border)',
  borderRadius: 4,
  color: 'var(--text)',
  fontFamily: "'Syne', sans-serif",
  fontSize: '0.9rem',
  padding: '0.85rem 1rem',
  marginBottom: '1rem',
  outline: 'none',
  transition: 'border-color 0.2s',
  WebkitAppearance: 'none',
};

export default function Contact() {
  const headRef = useFadeIn();
  const bodyRef = useFadeIn();

  const [contactInfo, setContactInfo] = useState([]);
  const [form, setForm]       = useState({ name: '', email: '', service: '', msg: '' });
  const [sent, setSent]       = useState(false);
  const [focused, setFocused] = useState('');

  useEffect(() => {
    getContact().then(setContactInfo);
  }, []);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.msg) {
      alert('Por favor completa nombre, email y mensaje.');
      return;
    }
    const subject = encodeURIComponent(`[Portfolio] ${form.service || 'Consulta'} — ${form.name}`);
    const body = encodeURIComponent(
      `Nombre: ${form.name}\nEmail: ${form.email}\nServicio: ${form.service}\n\n${form.msg}`
    );
    window.open(`mailto:spyrodiazsierra@gmail.com?subject=${subject}&body=${body}`);
    setSent(true);
    setForm({ name: '', email: '', service: '', msg: '' });
  };

  return (
    <section
      id="contact"
      style={{
        padding: '6rem 0',
        background: 'rgba(255,255,255,0.01)',
        borderTop: '1px solid var(--card-border)',
      }}
    >
      <div className="container">
        <div className="text-center mb-5 fade-in" ref={headRef}>
          <p className="section-tag">contacto</p>
          <h2 className="section-title">¿Tienes un proyecto?</h2>
          <p className="section-sub mx-auto">Cuéntame sobre tu idea. Respondo en menos de 24 horas.</p>
        </div>

        <div className="row g-5 fade-in" ref={bodyRef}>
          {/* Form */}
          <div className="col-lg-7">
            <div style={{
              background: 'var(--card-bg)',
              border: '1px solid var(--card-border)',
              borderRadius: 8, padding: '2.5rem',
            }}>
              {sent ? (
                <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✓</div>
                  <div style={{ fontWeight: 700, fontSize: '1.2rem', color: 'var(--accent)', marginBottom: '0.5rem' }}>
                    ¡Mensaje enviado!
                  </div>
                  <div style={{ color: 'var(--muted)' }}>Te respondo en menos de 24 horas.</div>
                  <button
                    className="btn-outline-custom"
                    style={{ marginTop: '1.5rem' }}
                    onClick={() => setSent(false)}
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <>
                  <div className="row g-3">
                    <div className="col-sm-6">
                      <input
                        style={{ ...inputStyle, borderColor: focused === 'name' ? 'rgba(0,255,136,0.4)' : 'var(--card-border)' }}
                        type="text" name="name" placeholder="Tu nombre"
                        value={form.name} onChange={handleChange}
                        onFocus={() => setFocused('name')} onBlur={() => setFocused('')}
                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        style={{ ...inputStyle, borderColor: focused === 'email' ? 'rgba(0,255,136,0.4)' : 'var(--card-border)' }}
                        type="email" name="email" placeholder="tu@email.com"
                        value={form.email} onChange={handleChange}
                        onFocus={() => setFocused('email')} onBlur={() => setFocused('')}
                      />
                    </div>
                  </div>
                  <select
                    name="service" value={form.service} onChange={handleChange}
                    style={{ ...inputStyle, color: form.service ? 'var(--text)' : 'var(--muted)' }}
                  >
                    <option value="" disabled>Tipo de proyecto</option>
                    <option>Desarrollo Frontend</option>
                    <option>Desarrollo Backend</option>
                    <option>Full Stack</option>
                    <option>Cloud / DevOps</option>
                    <option>Consultoría Técnica</option>
                    <option>Auditoría / Performance</option>
                    <option>MVP / Startup</option>
                    <option>Inteligencia Artificial</option>
                    <option>Otros</option>
                  </select>
                  <textarea
                    name="msg" value={form.msg} onChange={handleChange}
                    placeholder="Cuéntame sobre tu proyecto. ¿Qué quieres construir?"
                    style={{
                      ...inputStyle,
                      resize: 'vertical', minHeight: 130,
                      borderColor: focused === 'msg' ? 'rgba(0,255,136,0.4)' : 'var(--card-border)',
                    }}
                    onFocus={() => setFocused('msg')} onBlur={() => setFocused('')}
                  />
                  <button className="btn-primary-custom w-100" onClick={handleSubmit}>
                    Enviar mensaje →
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Info */}
          <div className="col-lg-5">
            <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '2rem' }}>
              Trabajo con clientes en Chile y Latinoamérica. Disponible para
              proyectos freelance, contratos long-term y consultoría puntual.
            </p>
            {contactInfo.map(info => (
              <div key={info.label} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 6,
                  background: 'rgba(0,255,136,0.08)', border: '1px solid rgba(0,255,136,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  {ICONS[info.iconType]}
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    {info.label}
                  </div>
                  <div style={{ fontSize: '0.95rem', color: 'var(--text)' }}>{info.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

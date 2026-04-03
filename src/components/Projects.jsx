import { useEffect, useState } from 'react';
import useFadeIn from './useFadeIn';
import { getProjects } from '../api';

/* ── Ilustración 1: Terapeuta Virtual ── */
function IllustrationChat() {
  return (
    <svg viewBox="0 0 320 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="glowT" cx="25%" cy="55%" r="38%">
          <stop offset="0%" stopColor="rgba(0,201,255,0.1)"/>
          <stop offset="100%" stopColor="rgba(0,201,255,0)"/>
        </radialGradient>
        <radialGradient id="glowP" cx="75%" cy="65%" r="42%">
          <stop offset="0%" stopColor="rgba(167,139,250,0.12)"/>
          <stop offset="100%" stopColor="rgba(167,139,250,0)"/>
        </radialGradient>
        <radialGradient id="lampGlow" cx="50%" cy="55%" r="20%">
          <stop offset="0%" stopColor="rgba(255,220,100,0.12)"/>
          <stop offset="100%" stopColor="rgba(255,220,100,0)"/>
        </radialGradient>
      </defs>

      <rect width="320" height="180" fill="#0d1117"/>
      <rect width="320" height="180" fill="url(#glowT)"/>
      <rect width="320" height="180" fill="url(#glowP)"/>
      <rect width="320" height="180" fill="url(#lampGlow)"/>

      {/* ══ PISO ══ */}
      <line x1="16" y1="145" x2="304" y2="145" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>

      {/* ══ TERAPEUTA — izquierda, sentado erguido ══ */}
      {/* Sillón: respaldo */}
      <rect x="30" y="75" width="58" height="62" rx="7"
        fill="rgba(0,201,255,0.06)" stroke="rgba(0,201,255,0.25)" strokeWidth="1.2"/>
      {/* Sillón: asiento */}
      <rect x="26" y="122" width="66" height="14" rx="5"
        fill="rgba(0,201,255,0.09)" stroke="rgba(0,201,255,0.2)" strokeWidth="1"/>
      {/* Apoyabrazos */}
      <rect x="24" y="105" width="10" height="28" rx="4"
        fill="rgba(0,201,255,0.08)" stroke="rgba(0,201,255,0.2)" strokeWidth="0.8"/>
      <rect x="84" y="105" width="10" height="28" rx="4"
        fill="rgba(0,201,255,0.08)" stroke="rgba(0,201,255,0.2)" strokeWidth="0.8"/>
      {/* Patas sillón */}
      <rect x="32" y="136" width="5" height="9" rx="1" fill="rgba(0,201,255,0.15)"/>
      <rect x="81" y="136" width="5" height="9" rx="1" fill="rgba(0,201,255,0.15)"/>

      {/* Figura terapeuta (sentado, erguido) */}
      {/* Torso */}
      <rect x="44" y="93" width="30" height="32" rx="6"
        fill="rgba(0,201,255,0.12)" stroke="rgba(0,201,255,0.3)" strokeWidth="1"/>
      {/* Cuello */}
      <rect x="55" y="82" width="8" height="13" rx="3" fill="rgba(0,201,255,0.15)"/>
      {/* Cabeza */}
      <circle cx="59" cy="70" r="14"
        fill="#0f1a24" stroke="rgba(0,201,255,0.55)" strokeWidth="1.5"/>
      {/* Gafas */}
      <circle cx="54" cy="69" r="4.5" fill="none" stroke="rgba(0,201,255,0.5)" strokeWidth="1"/>
      <circle cx="64" cy="69" r="4.5" fill="none" stroke="rgba(0,201,255,0.5)" strokeWidth="1"/>
      <line x1="58.5" y1="69" x2="59.5" y2="69" stroke="rgba(0,201,255,0.5)" strokeWidth="1"/>
      <line x1="49.5" y1="69" x2="46" y2="67" stroke="rgba(0,201,255,0.4)" strokeWidth="0.8"/>
      <line x1="68.5" y1="69" x2="72" y2="67" stroke="rgba(0,201,255,0.4)" strokeWidth="0.8"/>
      {/* Boca (expresión neutral / profesional) */}
      <line x1="55" y1="76" x2="63" y2="76" stroke="rgba(0,201,255,0.4)" strokeWidth="1" strokeLinecap="round"/>
      {/* Brazo izq con bloc de notas */}
      <path d="M44,100 Q34,108 36,120" stroke="rgba(0,201,255,0.3)" strokeWidth="5" fill="none" strokeLinecap="round"/>
      {/* Bloc de notas */}
      <rect x="26" y="114" width="22" height="16" rx="2"
        fill="rgba(255,240,200,0.08)" stroke="rgba(255,240,200,0.3)" strokeWidth="0.8"/>
      <rect x="29" y="117" width="14" height="2" rx="1" fill="rgba(255,240,200,0.3)"/>
      <rect x="29" y="121" width="10" height="2" rx="1" fill="rgba(255,240,200,0.2)"/>
      <rect x="29" y="125" width="12" height="2" rx="1" fill="rgba(255,240,200,0.2)"/>
      {/* Brazo der sobre apoyabrazos */}
      <path d="M74,105 Q82,112 88,114" stroke="rgba(0,201,255,0.25)" strokeWidth="5" fill="none" strokeLinecap="round"/>
      {/* Label */}
      <text x="59" y="157" textAnchor="middle" fontSize="7" fill="rgba(0,201,255,0.5)"
        fontFamily="monospace" letterSpacing="1">TERAPEUTA</text>

      {/* ══ LÁMPARA DE PIE — centro ══ */}
      <ellipse cx="160" cy="65" rx="16" ry="10"
        fill="rgba(255,220,100,0.07)" stroke="rgba(255,220,100,0.25)" strokeWidth="0.8"/>
      <polygon points="150,65 170,65 166,82 154,82"
        fill="rgba(255,220,100,0.06)" stroke="rgba(255,220,100,0.2)" strokeWidth="0.8"/>
      <line x1="160" y1="82" x2="160" y2="140" stroke="rgba(255,220,100,0.2)" strokeWidth="1.5"/>
      <ellipse cx="160" cy="140" rx="8" ry="3" fill="rgba(255,220,100,0.1)" stroke="rgba(255,220,100,0.2)" strokeWidth="0.8"/>

      {/* ══ PACIENTE — derecha, reclinado en diván ══ */}
      {/* Diván/sofá terapéutico (largo y bajo) */}
      {/* Respaldo cabecero */}
      <rect x="186" y="95" width="18" height="42" rx="6"
        fill="rgba(167,139,250,0.08)" stroke="rgba(167,139,250,0.3)" strokeWidth="1.2"/>
      {/* Superficie del diván */}
      <rect x="186" y="122" width="116" height="16" rx="5"
        fill="rgba(167,139,250,0.07)" stroke="rgba(167,139,250,0.25)" strokeWidth="1"/>
      {/* Patas diván */}
      <rect x="192" y="138" width="5" height="7" rx="1" fill="rgba(167,139,250,0.15)"/>
      <rect x="293" y="138" width="5" height="7" rx="1" fill="rgba(167,139,250,0.15)"/>

      {/* Figura paciente (reclinada, horizontal) */}
      {/* Cabeza (izquierda, apoyada en cabecero) */}
      <circle cx="200" cy="110" r="12"
        fill="#140f1f" stroke="rgba(167,139,250,0.55)" strokeWidth="1.5"/>
      {/* Ojos cerrados (relajado) */}
      <path d="M195,109 Q197,107 200,109" stroke="rgba(167,139,250,0.5)" strokeWidth="1" fill="none" strokeLinecap="round"/>
      <path d="M201,109 Q204,107 206,109" stroke="rgba(167,139,250,0.5)" strokeWidth="1" fill="none" strokeLinecap="round"/>
      {/* Boca relajada */}
      <path d="M197,114 Q200,116 203,114" stroke="rgba(167,139,250,0.4)" strokeWidth="0.8" fill="none" strokeLinecap="round"/>
      {/* Cuello */}
      <rect x="196" y="121" width="8" height="5" rx="2" fill="rgba(167,139,250,0.15)"/>
      {/* Cuerpo horizontal (reclinado) */}
      <rect x="200" y="118" width="90" height="14" rx="7"
        fill="rgba(167,139,250,0.1)" stroke="rgba(167,139,250,0.25)" strokeWidth="1"/>
      {/* Piernas (ligeramente dobladas) */}
      <path d="M285,122 Q298,118 300,128 Q298,134 285,132"
        fill="rgba(167,139,250,0.08)" stroke="rgba(167,139,250,0.2)" strokeWidth="0.8"/>

      {/* Burbuja de pensamiento sobre paciente */}
      <circle cx="212" cy="96" r="2.5" fill="rgba(167,139,250,0.3)"/>
      <circle cx="220" cy="87" r="4"   fill="rgba(167,139,250,0.25)"/>
      <circle cx="231" cy="79" r="5.5" fill="rgba(167,139,250,0.2)"/>
      {/* Nube pensamiento */}
      <rect x="234" y="50" width="62" height="30" rx="12"
        fill="rgba(167,139,250,0.08)" stroke="rgba(167,139,250,0.3)" strokeWidth="1"/>
      <rect x="241" y="58" width="38" height="3.5" rx="1.5" fill="rgba(167,139,250,0.35)"/>
      <rect x="241" y="64" width="28" height="3.5" rx="1.5" fill="rgba(167,139,250,0.25)"/>
      <rect x="241" y="70" width="34" height="3.5" rx="1.5" fill="rgba(167,139,250,0.2)"/>

      {/* Label */}
      <text x="245" y="157" textAnchor="middle" fontSize="7" fill="rgba(167,139,250,0.5)"
        fontFamily="monospace" letterSpacing="1">PACIENTE</text>
    </svg>
  );
}

/* ── Ilustración 2: Banco Central ── */
function IllustrationRAG() {
  return (
    <svg viewBox="0 0 320 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bankGlow" cx="50%" cy="60%" r="50%">
          <stop offset="0%" stopColor="rgba(255,196,0,0.1)"/>
          <stop offset="100%" stopColor="rgba(255,196,0,0)"/>
        </radialGradient>
        <radialGradient id="searchGlow" cx="75%" cy="35%" r="30%">
          <stop offset="0%" stopColor="rgba(0,255,136,0.12)"/>
          <stop offset="100%" stopColor="rgba(0,255,136,0)"/>
        </radialGradient>
      </defs>

      <rect width="320" height="180" fill="#0d1117"/>
      <rect width="320" height="180" fill="url(#bankGlow)"/>
      <rect width="320" height="180" fill="url(#searchGlow)"/>

      {/* ── Edificio banco ── */}
      {/* Escalones */}
      <rect x="52" y="136" width="152" height="6"  rx="1" fill="rgba(255,196,0,0.25)"/>
      <rect x="58" y="130" width="140" height="6"  rx="1" fill="rgba(255,196,0,0.2)"/>

      {/* Cuerpo principal */}
      <rect x="64" y="82" width="128" height="48" rx="1" fill="rgba(255,196,0,0.06)" stroke="rgba(255,196,0,0.2)" strokeWidth="1"/>

      {/* Columnas (6) */}
      {[72, 95, 118, 141, 164, 187].map((x, i) => (
        <rect key={i} x={x} y="84" width="10" height="44" rx="1"
          fill="rgba(255,196,0,0.12)" stroke="rgba(255,196,0,0.25)" strokeWidth="0.8"/>
      ))}

      {/* Friso */}
      <rect x="62" y="74" width="132" height="10" rx="1" fill="rgba(255,196,0,0.15)" stroke="rgba(255,196,0,0.3)" strokeWidth="0.8"/>

      {/* Frontón / triángulo */}
      <polygon points="128,36 62,74 194,74"
        fill="rgba(255,196,0,0.08)" stroke="rgba(255,196,0,0.35)" strokeWidth="1"/>

      {/* Estrella en el frontón */}
      <text x="128" y="66" textAnchor="middle" fontSize="11" fill="rgba(255,196,0,0.7)">★</text>

      {/* Puerta */}
      <rect x="118" y="108" width="20" height="22" rx="2" fill="rgba(255,196,0,0.08)" stroke="rgba(255,196,0,0.3)" strokeWidth="0.8"/>
      <line x1="128" y1="108" x2="128" y2="130" stroke="rgba(255,196,0,0.2)" strokeWidth="0.8"/>

      {/* Texto BANCO CENTRAL */}
      <text x="128" y="155" textAnchor="middle" fontSize="7" fill="rgba(255,196,0,0.5)"
        fontFamily="monospace" letterSpacing="2">BANCO CENTRAL</text>

      {/* ── Documentos flotantes (derecha) ── */}
      {/* Doc 1 */}
      <rect x="228" y="30" width="36" height="46" rx="3" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
      <polygon points="252,30 264,30 264,42" fill="rgba(255,255,255,0.08)"/>
      <line x1="252" y1="30" x2="252" y2="42" stroke="rgba(255,255,255,0.1)" strokeWidth="0.8"/>
      {[38,44,50,58,64,70].map((y,i) => (
        <rect key={i} x="234" y={y} width={i % 2 === 0 ? 22 : 16} height="3" rx="1" fill="rgba(255,255,255,0.12)"/>
      ))}

      {/* Doc 2 (detrás, desplazado) */}
      <rect x="240" y="22" width="36" height="46" rx="3" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>

      {/* Lupa */}
      <circle cx="242" cy="100" r="18" fill="rgba(0,255,136,0.07)" stroke="rgba(0,255,136,0.45)" strokeWidth="1.8"/>
      <circle cx="242" cy="100" r="12" fill="none" stroke="rgba(0,255,136,0.2)" strokeWidth="0.8"/>
      {/* reflejo lupa */}
      <path d="M236,94 Q238,92 242,93" stroke="rgba(0,255,136,0.4)" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      {/* mango lupa */}
      <line x1="254" y1="112" x2="264" y2="122" stroke="rgba(0,255,136,0.6)" strokeWidth="2.5" strokeLinecap="round"/>

      {/* Texto en lupa (líneas simuladas) */}
      <rect x="235" y="97" width="14" height="2.5" rx="1" fill="rgba(0,255,136,0.35)"/>
      <rect x="235" y="102" width="10" height="2.5" rx="1" fill="rgba(0,255,136,0.25)"/>

      {/* ── Chispas IA ── */}
      {[[210,48],[216,68],[222,38]].map(([cx,cy],i) => (
        <text key={i} x={cx} y={cy} fontSize="8" fill="rgba(0,255,136,0.5)" textAnchor="middle">✦</text>
      ))}

    </svg>
  );
}

/* ── Ilustración 3: Análisis Bursátil ── */
function IllustrationChart() {
  const candles = [
    { x:30,  open:100, close:80,  high:72,  low:110 },
    { x:52,  open:80,  close:95,  high:70,  low:105 },
    { x:74,  open:95,  close:75,  high:68,  low:100 },
    { x:96,  open:75,  close:110, high:65,  low:118 },
    { x:118, open:110, close:90,  high:82,  low:120 },
    { x:140, open:90,  close:120, high:78,  low:125 },
    { x:162, open:120, close:105, high:95,  low:130 },
    { x:184, open:105, close:130, high:92,  low:135 },
    { x:206, open:130, close:115, high:105, low:140 },
    { x:228, open:115, close:145, high:102, low:150 },
    { x:250, open:145, close:125, high:115, low:155 },
    { x:272, open:125, close:150, high:112, low:158 },
  ];
  const bullish = (c) => c.close < c.open;

  /* línea MA simple */
  const maPoints = candles.map(c => `${c.x + 8},${(c.open + c.close) / 2}`).join(' ');

  /* línea RSI simulada (valores entre 130–160 en el viewBox) */
  const rsiY = [148,144,150,138,145,135,142,132,140,128,136,130];
  const rsiPoints = candles.map((c,i) => `${c.x + 8},${rsiY[i]}`).join(' ');

  return (
    <svg viewBox="0 0 320 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" fill="#0d1117"/>

      {/* Grid horizontal */}
      {[70,90,110,130].map(y => (
        <line key={y} x1="20" y1={y} x2="300" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
      ))}

      {/* Separador RSI */}
      <line x1="20" y1="128" x2="300" y2="128" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="3,3"/>

      {/* MA line */}
      <polyline points={maPoints} fill="none" stroke="rgba(0,201,255,0.5)" strokeWidth="1.5" strokeDasharray="4,2"/>

      {/* Velas */}
      {candles.map((c, i) => {
        const bull = bullish(c);
        const color = bull ? '#00ff88' : '#ff4466';
        const bodyTop = Math.min(c.open, c.close);
        const bodyH   = Math.abs(c.open - c.close);
        return (
          <g key={i}>
            <line x1={c.x+8} y1={c.high} x2={c.x+8} y2={c.low} stroke={color} strokeWidth="1" opacity="0.7"/>
            <rect x={c.x} y={bodyTop} width={16} height={Math.max(bodyH, 2)} rx="1"
              fill={bull ? 'rgba(0,255,136,0.7)' : 'rgba(255,68,102,0.7)'}
              stroke={color} strokeWidth="0.5"/>
          </g>
        );
      })}

      {/* RSI line */}
      <polyline points={rsiPoints} fill="none" stroke="rgba(167,139,250,0.7)" strokeWidth="1.5"/>

      {/* Labels */}
      <text x="22" y="76" fontSize="6" fill="rgba(255,255,255,0.2)" fontFamily="monospace">HIGH</text>
      <text x="22" y="136" fontSize="6" fill="rgba(167,139,250,0.6)" fontFamily="monospace">RSI</text>

    </svg>
  );
}

const ILLUSTRATIONS = { chat: IllustrationChat, rag: IllustrationRAG, chart: IllustrationChart };

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);
  const Illustration = ILLUSTRATIONS[project.illustrationType];

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
      {/* Illustration preview */}
      <div style={{ height: 180, position: 'relative', overflow: 'hidden', background: '#0d1117' }}>
        {Illustration && <Illustration />}
        <div style={{
          position: 'absolute', top: '1rem', right: '1rem',
          background: 'rgba(0,201,255,0.1)',
          border: '1px solid rgba(0,201,255,0.3)',
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
          <h2 className="section-title">Lo que he construido</h2>
          <p className="section-sub mx-auto">
            Una selección de proyectos reales donde combiné IA, backend y cloud
            para resolver problemas concretos.
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

import { useEffect, useState } from 'react';
import useFadeIn from './useFadeIn';
import { getProjects } from '../api';

/* ── Ilustración 1: Terapeuta Virtual (chat + brain) ── */
function IllustrationChat() {
  return (
    <svg viewBox="0 0 320 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      {/* Fondo */}
      <rect width="320" height="180" fill="#0d1117"/>

      {/* Red neuronal fondo */}
      {[
        [60,30,120,70],[120,70,200,40],[200,40,260,80],[120,70,160,120],
        [200,40,160,120],[260,80,200,140],[160,120,200,140],
      ].map(([x1,y1,x2,y2],i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="rgba(0,201,255,0.12)" strokeWidth="1"/>
      ))}
      {[[60,30],[120,70],[200,40],[260,80],[160,120],[200,140]].map(([cx,cy],i) => (
        <circle key={i} cx={cx} cy={cy} r="3" fill="rgba(0,201,255,0.2)"/>
      ))}

      {/* Burbuja IA (izquierda) */}
      <rect x="28" y="52" width="120" height="34" rx="10" fill="rgba(0,201,255,0.12)" stroke="rgba(0,201,255,0.35)" strokeWidth="1"/>
      <rect x="28" y="52" width="120" height="34" rx="10" fill="none"/>
      <rect x="36" y="62" width="60" height="5" rx="2.5" fill="rgba(0,201,255,0.5)"/>
      <rect x="36" y="72" width="40" height="5" rx="2.5" fill="rgba(0,201,255,0.3)"/>
      {/* cola */}
      <polygon points="38,86 28,94 50,86" fill="rgba(0,201,255,0.12)"/>

      {/* Burbuja usuario (derecha) */}
      <rect x="172" y="96" width="120" height="34" rx="10" fill="rgba(0,255,136,0.1)" stroke="rgba(0,255,136,0.3)" strokeWidth="1"/>
      <rect x="180" y="106" width="55" height="5" rx="2.5" fill="rgba(0,255,136,0.5)"/>
      <rect x="180" y="116" width="80" height="5" rx="2.5" fill="rgba(0,255,136,0.3)"/>
      <polygon points="282,130 292,138 270,130" fill="rgba(0,255,136,0.1)"/>

      {/* Icono cerebro / GPT central */}
      <circle cx="160" cy="90" r="22" fill="rgba(0,201,255,0.08)" stroke="rgba(0,201,255,0.3)" strokeWidth="1.5"/>
      <text x="160" y="96" textAnchor="middle" fontSize="18" fill="rgba(0,201,255,0.8)">🧠</text>

      {/* Label GPT-4 */}
      <rect x="136" y="118" width="48" height="14" rx="3" fill="rgba(0,201,255,0.15)" stroke="rgba(0,201,255,0.3)" strokeWidth="0.8"/>
      <text x="160" y="128.5" textAnchor="middle" fontSize="7" fill="rgba(0,201,255,0.9)" fontFamily="monospace">GPT-4</text>

      {/* Mongo badge */}
      <rect x="22" y="138" width="52" height="16" rx="3" fill="rgba(0,255,136,0.08)" stroke="rgba(0,255,136,0.25)" strokeWidth="0.8"/>
      <text x="48" y="149" textAnchor="middle" fontSize="7" fill="rgba(0,255,136,0.8)" fontFamily="monospace">MongoDB</text>

      {/* Session badge */}
      <rect x="82" y="138" width="60" height="16" rx="3" fill="rgba(0,201,255,0.08)" stroke="rgba(0,201,255,0.25)" strokeWidth="0.8"/>
      <text x="112" y="149" textAnchor="middle" fontSize="7" fill="rgba(0,201,255,0.8)" fontFamily="monospace">Sessions</text>

      {/* Python badge */}
      <rect x="244" y="138" width="50" height="16" rx="3" fill="rgba(255,214,0,0.08)" stroke="rgba(255,214,0,0.25)" strokeWidth="0.8"/>
      <text x="269" y="149" textAnchor="middle" fontSize="7" fill="rgba(255,214,0,0.8)" fontFamily="monospace">Python</text>
    </svg>
  );
}

/* ── Ilustración 2: RAG / Búsqueda Semántica ── */
function IllustrationRAG() {
  const dots = [
    [80,55],[110,75],[95,100],[130,60],[145,90],[170,55],[155,115],
    [190,80],[210,60],[230,90],[215,115],[245,70],
  ];
  const connections = [
    [0,1],[1,2],[0,3],[3,5],[1,4],[4,6],[5,7],[7,8],[8,9],[9,10],[7,11],
  ];
  return (
    <svg viewBox="0 0 320 180" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="180" fill="#0d1117"/>

      {/* Documento */}
      <rect x="22" y="30" width="52" height="66" rx="4" fill="rgba(0,255,136,0.06)" stroke="rgba(0,255,136,0.25)" strokeWidth="1"/>
      {[40,48,56,64,72,80].map((y,i) => (
        <rect key={i} x="30" y={y} width={i % 3 === 2 ? 22 : 34} height="3.5" rx="1.5" fill="rgba(0,255,136,0.25)"/>
      ))}
      <text x="48" y="108" textAnchor="middle" fontSize="7" fill="rgba(0,255,136,0.6)" fontFamily="monospace">doc.pdf</text>

      {/* Flecha documento → embedding */}
      <line x1="74" y1="63" x2="92" y2="63" stroke="rgba(0,255,136,0.4)" strokeWidth="1" markerEnd="url(#arr)"/>

      {/* Caja embedding */}
      <defs>
        <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="rgba(0,255,136,0.6)"/>
        </marker>
        <marker id="arr2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="rgba(167,139,250,0.7)"/>
        </marker>
      </defs>
      <rect x="92" y="50" width="58" height="26" rx="4" fill="rgba(0,255,136,0.08)" stroke="rgba(0,255,136,0.3)" strokeWidth="1"/>
      <text x="121" y="61" textAnchor="middle" fontSize="6.5" fill="rgba(0,255,136,0.9)" fontFamily="monospace">Embedding</text>
      <text x="121" y="71" textAnchor="middle" fontSize="6" fill="rgba(0,255,136,0.6)" fontFamily="monospace">OpenAI Ada</text>

      {/* Flecha → Pinecone */}
      <line x1="150" y1="63" x2="168" y2="63" stroke="rgba(167,139,250,0.5)" strokeWidth="1" markerEnd="url(#arr2)"/>

      {/* Vector space (Pinecone) */}
      {connections.map(([a,b],i) => (
        <line key={i}
          x1={dots[a][0]} y1={dots[a][1]}
          x2={dots[b][0]} y2={dots[b][1]}
          stroke="rgba(167,139,250,0.15)" strokeWidth="1"/>
      ))}
      {dots.map(([cx,cy],i) => (
        <circle key={i} cx={cx} cy={cy} r={i === 4 || i === 7 ? 5 : 3}
          fill={i === 4 || i === 7 ? 'rgba(167,139,250,0.7)' : 'rgba(167,139,250,0.25)'}
          stroke={i === 4 || i === 7 ? 'rgba(167,139,250,0.9)' : 'none'} strokeWidth="1"/>
      ))}

      {/* Label Pinecone */}
      <rect x="153" y="125" width="58" height="16" rx="3" fill="rgba(167,139,250,0.1)" stroke="rgba(167,139,250,0.3)" strokeWidth="0.8"/>
      <text x="182" y="136" textAnchor="middle" fontSize="7" fill="rgba(167,139,250,0.9)" fontFamily="monospace">Pinecone DB</text>

      {/* Flecha → GPT */}
      <line x1="250" y1="80" x2="268" y2="80" stroke="rgba(0,201,255,0.5)" strokeWidth="1" markerEnd="url(#arr)"/>

      {/* GPT box */}
      <rect x="268" y="55" width="44" height="50" rx="6" fill="rgba(0,201,255,0.08)" stroke="rgba(0,201,255,0.3)" strokeWidth="1"/>
      <text x="290" y="78" textAnchor="middle" fontSize="14" fill="rgba(0,201,255,0.8)">✦</text>
      <text x="290" y="94" textAnchor="middle" fontSize="6.5" fill="rgba(0,201,255,0.8)" fontFamily="monospace">GPT-4</text>

      {/* FastAPI badge */}
      <rect x="22" y="138" width="50" height="16" rx="3" fill="rgba(0,201,255,0.08)" stroke="rgba(0,201,255,0.25)" strokeWidth="0.8"/>
      <text x="47" y="149" textAnchor="middle" fontSize="7" fill="rgba(0,201,255,0.8)" fontFamily="monospace">FastAPI</text>

      {/* RAG badge */}
      <rect x="136" y="148" width="50" height="14" rx="3" fill="rgba(0,255,136,0.08)" stroke="rgba(0,255,136,0.25)" strokeWidth="0.8"/>
      <text x="161" y="158" textAnchor="middle" fontSize="6.5" fill="rgba(0,255,136,0.8)" fontFamily="monospace">RAG Pipeline</text>
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

      {/* Badges */}
      <rect x="20" y="160" width="38" height="14" rx="3" fill="rgba(0,255,136,0.1)" stroke="rgba(0,255,136,0.3)" strokeWidth="0.8"/>
      <text x="39" y="170" textAnchor="middle" fontSize="6.5" fill="rgba(0,255,136,0.9)" fontFamily="monospace">MACD</text>

      <rect x="64" y="160" width="38" height="14" rx="3" fill="rgba(0,201,255,0.1)" stroke="rgba(0,201,255,0.3)" strokeWidth="0.8"/>
      <text x="83" y="170" textAnchor="middle" fontSize="6.5" fill="rgba(0,201,255,0.9)" fontFamily="monospace">RSI</text>

      <rect x="108" y="160" width="50" height="14" rx="3" fill="rgba(167,139,250,0.1)" stroke="rgba(167,139,250,0.3)" strokeWidth="0.8"/>
      <text x="133" y="170" textAnchor="middle" fontSize="6.5" fill="rgba(167,139,250,0.9)" fontFamily="monospace">Bollinger</text>

      <rect x="210" y="160" width="38" height="14" rx="3" fill="rgba(255,214,0,0.1)" stroke="rgba(255,214,0,0.3)" strokeWidth="0.8"/>
      <text x="229" y="170" textAnchor="middle" fontSize="6.5" fill="rgba(255,214,0,0.9)" fontFamily="monospace">₿ BTC</text>

      <rect x="254" y="160" width="44" height="14" rx="3" fill="rgba(0,255,136,0.08)" stroke="rgba(0,255,136,0.25)" strokeWidth="0.8"/>
      <text x="276" y="170" textAnchor="middle" fontSize="6.5" fill="rgba(0,255,136,0.8)" fontFamily="monospace">AI Signal</text>
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

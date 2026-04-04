# /update-content — Actualizar contenido del portfolio

Actualiza el contenido sin tocar la lógica de los componentes. Todo el contenido vive en `src/api/data/`.

## Archivos de contenido

| Archivo | Qué controla |
|---|---|
| `src/api/data/stats.json` | Números del Hero (años exp, proyectos, clientes) |
| `src/api/data/skills.json` | Pills de tecnologías en About |
| `src/api/data/timeline.json` | Experiencia laboral (año, rol, empresa) |
| `src/api/data/services.json` | Tarjetas de servicios |
| `src/api/data/projects.json` | Proyectos destacados (título, desc, stack, ilustración) |
| `src/api/data/contact.json` | Email, LinkedIn, GitHub, ubicación, WhatsApp |

## Instrucciones

1. Lee el archivo JSON correspondiente antes de modificarlo
2. Mantén la estructura exacta del JSON (mismas keys)
3. Para `projects.json`, el campo `illustrationType` debe ser uno de: `chat`, `rag`, `chart` (las ilustraciones SVG están hardcodeadas en `Projects.jsx`)
4. Después de editar, informa exactamente qué campos cambiaron
5. Si el usuario quiere agregar un nuevo tipo de ilustración para un proyecto, eso requiere modificar `Projects.jsx` — avísalo explícitamente

## Textos en los componentes (no en JSON)
Algunos textos están directamente en JSX y no en JSON:
- Nombre y tagline principal → `Hero.jsx`
- Bio de About → `About.jsx`
- Título de cada sección → en cada componente respectivo

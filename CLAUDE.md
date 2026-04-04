# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install        # Install dependencies
npm start          # Dev server at http://localhost:3000
npm run build      # Production build → /build
make build         # Build con CI=false (evita warnings como errores)
make lint          # ESLint sobre src/
```

No test suite is configured.

## Custom slash commands (`.claude/commands/`)

| Comando | Qué hace |
|---|---|
| `/deploy` | Crea rama → commit → push → CI → merge master → Amplify |
| `/new-component <Nombre>` | Crea componente + JSON de datos + lo registra en App.jsx |
| `/update-content` | Guía para editar los JSON de `src/api/data/` sin tocar JSX |

## Deploy — AWS Amplify + GitHub Actions

Flujo de trabajo:
```
feat/* branch → PR → CI (lint + build) → merge master → Amplify deploy
```

- GitHub Actions (`.github/workflows/ci.yml`) corre en cada push y PR sobre `master`: instala deps, lint y build.
- AWS Amplify escucha `master` y despliega automáticamente cuando el merge es exitoso.
- Nunca pushear directamente a `master` con código sin validar — usar siempre rama de feature.
- Usa `/deploy` para el flujo completo guiado.

## Architecture

Single-page React 18 + Bootstrap 5 portfolio. No router — todas las secciones están apiladas verticalmente en `src/App.jsx` y se navegan con anchor links.

**Data layer (`src/api/`):** Todo el contenido vive en JSON files bajo `src/api/data/` (`stats.json`, `skills.json`, `timeline.json`, `services.json`, `projects.json`, `contact.json`). `src/api/index.js` expone async getters que los componentes consumen via `useEffect`. Para actualizar contenido, editar los JSON — no se requiere cambiar lógica de componentes.

**Animaciones:** `src/components/useFadeIn.js` es un custom hook que usa `IntersectionObserver` para agregar la clase `visible` a un elemento cuando entra al viewport. Los componentes usan el ref retornado en su wrapper con clase `fade-in`.

**Styling:** `src/styles/global.css` define todos los CSS custom properties (design tokens). Variables clave:
- `--accent`: `#00ff88` (verde neón — color principal)
- `--accent2`: `#00c9ff` (cyan — secundario)
- `--dark`: `#0a0a0f` (fondo)

Bootstrap se usa para layout/grid; clases custom en `global.css` manejan tipografía (`.section-tag`, `.section-title`, `.section-sub`) y botones.

**Fonts:** JetBrains Mono (texto mono/código) + Syne (headings/body), cargadas desde Google Fonts en `global.css`.

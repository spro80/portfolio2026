# /new-component — Scaffold de nuevo componente

Crea un nuevo componente de sección siguiendo los patrones del proyecto.

## Instrucciones

El argumento de este comando es el nombre del componente. Ejemplo: `/new-component Skills`

### 1. Crea el archivo de datos (si aplica)
Si el componente necesita datos dinámicos, crea `src/api/data/<nombre-en-minuscula>.json` con estructura apropiada y expón un getter en `src/api/index.js`:

```js
import <nombre> from './data/<nombre>.json';
export const get<Nombre> = async () => { await delay(400); return <nombre>; };
```

### 2. Crea el componente JSX en `src/components/<Nombre>.jsx`

Sigue estos patrones obligatorios del proyecto:
- Usa `useFadeIn` para animaciones de entrada al scroll (`import useFadeIn from './useFadeIn'`)
- Aplica la clase `fade-in` al wrapper div y pásale el ref de `useFadeIn`
- Carga datos con `useEffect` + el getter de `src/api/`
- Usa variables CSS (`var(--accent)`, `var(--card-bg)`, `var(--muted)`, etc.) — nunca colores hardcodeados
- La sección debe tener `id="<nombre>"` para el scroll de la navbar
- Estructura de sección estándar:
  ```jsx
  <section id="<nombre>" style={{ padding: '6rem 0' }}>
    <div className="container">
      <p className="section-tag">etiqueta</p>
      <h2 className="section-title">Título</h2>
      {/* contenido */}
    </div>
  </section>
  ```

### 3. Registra el componente en `src/App.jsx`
Añade el import y coloca el componente en el orden lógico dentro de `<main>`.

### 4. Actualiza la Navbar si aplica
Si la sección debe aparecer en el menú de navegación, añade el enlace en `src/components/Navbar.jsx`.

## No hacer
- No uses colores RGB directos — usa las variables CSS del proyecto
- No uses React Router — el proyecto es SPA con scroll
- No crees archivos de test (no hay suite configurada)

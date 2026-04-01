# Portfolio David — React + Bootstrap SPA

Portfolio personal de David, Ingeniero de Software Full Stack & Cloud.  
Construido con **React 18** y **Bootstrap 5**.

## 🚀 Instalación y uso

```bash
# 1. Instalar dependencias
npm install

# 2. Servidor de desarrollo
npm start
# → http://localhost:3000

# 3. Build para producción
npm run build
# → carpeta /build lista para deploy
```

## 📁 Estructura del proyecto

```
src/
├── components/
│   ├── Navbar.jsx       # Navegación fija + menú mobile
│   ├── Hero.jsx         # Sección principal con animación de entrada
│   ├── About.jsx        # Sobre mí + timeline de experiencia
│   ├── Services.jsx     # 6 tarjetas de servicios con hover
│   ├── Projects.jsx     # 3 proyectos destacados
│   ├── Contact.jsx      # Formulario + info de contacto
│   ├── Footer.jsx       # Pie de página
│   └── useFadeIn.js     # Hook para animaciones al hacer scroll
├── styles/
│   └── global.css       # Design tokens, tipografía, utilidades
├── App.jsx              # Componente raíz
└── index.js             # Entry point React
```

## ✏️ Personalización rápida

### Datos personales
Edita estos archivos con tu información real:

| Archivo | Qué cambiar |
|---------|-------------|
| `Hero.jsx` | Estadísticas (años, proyectos, clientes) |
| `About.jsx` | Timeline de experiencia, skills |
| `Projects.jsx` | Tus proyectos reales |
| `Contact.jsx` | Email, LinkedIn, GitHub, ubicación |
| `Footer.jsx` | Nombre del dominio |

### Colores
En `styles/global.css`, cambia las variables CSS:
```css
:root {
  --accent:  #00ff88;  /* Color principal (verde neón) */
  --accent2: #00c9ff;  /* Color secundario (celeste)   */
  --dark:    #0a0a0f;  /* Fondo oscuro                 */
}
```

## 🌐 Deploy recomendado

- **Vercel**: `vercel --prod` (recomendado, gratis)
- **Netlify**: arrastra la carpeta `/build`
- **GitHub Pages**: usa el paquete `gh-pages`

## 🛠 Stack

- React 18
- Bootstrap 5.3
- JetBrains Mono + Syne (Google Fonts)
- IntersectionObserver API (fade-in on scroll)
- CSS custom properties (design tokens)

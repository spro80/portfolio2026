export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{
      borderTop: '1px solid var(--card-border)',
      padding: '2rem',
      textAlign: 'center',
      color: 'var(--muted)',
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: '0.75rem',
    }}>
      <span style={{ color: 'var(--accent)' }}>david.dev</span>
      &nbsp;·&nbsp;
      Construido con React + Bootstrap
      &nbsp;·&nbsp;
      Santiago, Chile
      &nbsp;·&nbsp;
      {year}
    </footer>
  );
}

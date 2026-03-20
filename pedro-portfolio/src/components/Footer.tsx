export default function Footer() {
  return (
    <footer style={{
      position: "relative",
      zIndex: 10,
      borderTop: "1px solid rgba(255,255,255,0.07)",
      padding: "2.5rem clamp(1.5rem, 5vw, 5rem)",
      display: "flex",
      flexDirection: "column",
      gap: "1.5rem",
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
        {/* Left: brand */}
        <div style={{ display: "flex", flex-direction: "column", gap: "0.5rem" }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.82rem", fontWeight: 700, color: "#fff", letterSpacing: "0.08em" }}>
            Pedro Isaac
          </p>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", color: "rgba(255,255,255,0.3)", letterSpacing: "0.06em" }}>
            Backend & Full Stack Developer
          </p>
        </div>

        {/* Center: social icons */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          {[
            {
              label: "GitHub",
              href: "https://github.com/AraujoCC",
              icon: (
                <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                </svg>
              ),
            },
            {
              label: "LinkedIn",
              href: "https://linkedin.com/in/pedro-isaac",
              icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              ),
            },
            {
              label: "Email",
              href: "mailto:pedroisaacofc@gmail.com",
              icon: (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              ),
            },
          ].map((s) => (
            
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              title={s.label}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 38,
                height: 38,
                borderRadius: 6,
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.03)",
                color: "rgba(255,255,255,0.45)",
                textDecoration: "none",
                transition: "all 0.28s",
                cursor: "none",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.background = "rgba(255,255,255,0.07)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.color = "rgba(255,255,255,0.45)";
                e.currentTarget.style.background = "rgba(255,255,255,0.03)";
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Right: status */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#6effa0", boxShadow: "0 0 5px #6effa0", display: "inline-block", animation: "pulse 2.5s ease-in-out infinite" }} />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", color: "rgba(110,255,140,0.65)", letterSpacing: "0.08em" }}>
            Open to internships
          </span>
        </div>
      </div>

      {/* Bottom */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "1.25rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "rgba(255,255,255,0.22)", letterSpacing: "0.06em" }}>
          © 2025 Pedro Isaac · Built with Next.js & TypeScript
        </p>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "rgba(255,255,255,0.22)", letterSpacing: "0.06em" }}>
          Bahia, Brazil
        </p>
      </div>
    </footer>
  );
}
export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="shell footer__inner">
        <div className="footer__brand">
          <span className="footer__mark">LW</span>
          <div className="footer__brand-text">
            <span className="footer__name">Lin Wei</span>
            <span className="mono footer__tag">Computer Science · Tsinghua</span>
          </div>
        </div>

        <div className="footer__cols">
          <div className="footer__col">
            <span className="eyebrow">Sections</span>
            <a href="#about">About</a>
            <a href="#research">Research</a>
            <a href="#projects">Projects</a>
            <a href="#writing">Writing</a>
          </div>
          <div className="footer__col">
            <span className="eyebrow">Elsewhere</span>
            <a href="#">GitHub</a>
            <a href="#">Scholar</a>
            <a href="#">Mastodon</a>
            <a href="#">RSS</a>
          </div>
        </div>

        <div className="footer__colophon">
          <p className="mono">
            Set in <em>Fraunces</em> &amp; <em>Newsreader</em>.
          </p>
          <p className="mono">
            Hand-built with React + Vite.
          </p>
          <p className="mono">
            © {year} Lin Wei. <span className="footer__cc">CC&nbsp;BY-NC&nbsp;4.0</span>
          </p>
        </div>
      </div>

      <div className="footer__rule">
        <div className="shell">
          <span className="mono">End of the page.</span>
          <a href="#top" className="footer__top">
            <span className="mono">Back to top</span>
            <span className="footer__top-arrow">↑</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

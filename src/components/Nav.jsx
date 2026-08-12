import { useEffect, useState } from 'react'

const LINKS = [
  { href: '#about', label: 'About', num: '01' },
  { href: '#research', label: 'Research', num: '02' },
  { href: '#projects', label: 'Projects', num: '03' },
  { href: '#writing', label: 'Writing', num: '04' },
  { href: '#contact', label: 'Contact', num: '05' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--solid' : ''}`}>
      <div className="nav__inner shell">
        <a href="#top" className="nav__brand" aria-label="Home">
          <span className="nav__mark">LW</span>
          <span className="nav__brand-text">
            <span className="nav__name">Lin Wei</span>
            <span className="nav__role mono">CS / Tsinghua</span>
          </span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="nav__link">
              <span className="nav__link-num mono">{l.num}</span>
              <span>{l.label}</span>
            </a>
          ))}
        </nav>

        <button
          className="nav__toggle"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`nav__burger ${open ? 'is-open' : ''}`} />
        </button>
      </div>

      <div className={`nav__drawer ${open ? 'is-open' : ''}`}>
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="nav__drawer-link"
            onClick={() => setOpen(false)}
          >
            <span className="mono">{l.num}</span>
            {l.label}
          </a>
        ))}
      </div>
    </header>
  )
}

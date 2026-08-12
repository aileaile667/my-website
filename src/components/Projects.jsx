const PROJECTS = [
  {
    name: 'miniprl',
    kind: 'Proof assistant',
    lang: 'OCaml',
    desc: 'A 2,400-line proof assistant for the predicate calculus. Tactic-driven, with a kernel small enough to read in an afternoon.',
    stars: '1.2k',
    href: '#',
  },
  {
    name: 'ferrite',
    kind: 'Compiler',
    lang: 'Rust',
    desc: 'A toy compiler for a strict, ML-flavoured language. Hindley-Milner inference, LLVM backend, and a deliberately slow and readable codebase.',
    stars: '480',
    href: '#',
  },
  {
    name: 'taco',
    kind: 'Library',
    lang: 'Haskell',
    desc: 'A small library for parser combinators with error-repair built in. Designed for editors that need to keep parsing broken input.',
    stars: '320',
    href: '#',
  },
  {
    name: 'pl-newsletter',
    kind: 'Writing',
    lang: 'Astro',
    desc: 'A monthly Chinese-language newsletter on programming languages, now in its second year and read by 3,400 students.',
    stars: '—',
    href: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="shell">
        <div className="section__head">
          <div className="section__label">
            <span className="section__num mono">§ 03</span>
            <span className="eyebrow">Projects</span>
          </div>
          <h2 className="section__title">
            Things I have <em>built</em> and keep on building.
          </h2>
        </div>

        <div className="projects__grid">
          {PROJECTS.map((p, i) => (
            <a
              key={p.name}
              href={p.href}
              className="proj reveal"
              style={{ transitionDelay: `${(i % 2) * 0.08}s` }}
            >
              <div className="proj__head">
                <span className="proj__num mono">{String(i + 1).padStart(2, '0')}</span>
                <span className="proj__kind mono">{p.kind}</span>
              </div>

              <h3 className="proj__name">
                <span className="proj__name-text">{p.name}</span>
                <span className="proj__arrow">↗</span>
              </h3>

              <p className="proj__desc">{p.desc}</p>

              <div className="proj__foot">
                <span className="proj__lang mono">{p.lang}</span>
                <span className="proj__stars mono">★ {p.stars}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

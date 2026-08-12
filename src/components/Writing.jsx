const POSTS = [
  {
    date: '2026 / 07 / 14',
    title: 'On the discipline of small kernels',
    dek: 'Why I keep rewriting the same 200 lines of code, and what it has taught me about trust in proof assistants.',
    tags: ['PL', 'essay'],
    read: '12 min',
  },
  {
    date: '2026 / 06 / 02',
    title: 'A reading map for TAPL, chapter by chapter',
    dek: 'An opinionated guide for the self-taught: which chapters to skim, which to read twice, and which to argue with in the margins.',
    tags: ['teaching', 'types'],
    read: '18 min',
  },
  {
    date: '2026 / 05 / 08',
    title: 'Bidirectional typing, without the folklore',
    dek: 'A short, mechanical account of bidirectional type-checking that tries to remove the hand-waving.',
    tags: ['types', 'note'],
    read: '9 min',
  },
  {
    date: '2026 / 04 / 21',
    title: 'What I learned writing a parser for broken input',
    dek: 'Error-recovery is not a feature; it is the entire job. Notes from building taco.',
    tags: ['parsers', 'essay'],
    read: '14 min',
  },
]

export default function Writing() {
  return (
    <section id="writing" className="section section--alt">
      <div className="shell">
        <div className="section__head">
          <div className="section__label">
            <span className="section__num mono">§ 04</span>
            <span className="eyebrow">Writing</span>
          </div>
          <h2 className="section__title">
            Notes from the <em>margins</em> of my notebooks.
          </h2>
        </div>

        <ul className="writing__list">
          {POSTS.map((p, i) => (
            <li key={p.title} className="post reveal" style={{ transitionDelay: `${i * 0.06}s` }}>
              <div className="post__date mono">{p.date}</div>

              <div className="post__body">
                <h3 className="post__title">
                  <a href="#">{p.title}</a>
                </h3>
                <p className="post__dek">{p.dek}</p>
                <div className="post__tags">
                  {p.tags.map((t) => (
                    <span key={t} className="post__tag mono">{t}</span>
                  ))}
                </div>
              </div>

              <div className="post__meta mono">
                <span>{p.read}</span>
                <span className="post__read">read →</span>
              </div>
            </li>
          ))}
        </ul>

        <div className="writing__archive">
          <a href="#" className="writing__archive-link">
            <span className="eyebrow">Archive</span>
            <span className="writing__archive-text">All 38 posts, indexed by topic</span>
            <span className="mono writing__archive-arrow">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

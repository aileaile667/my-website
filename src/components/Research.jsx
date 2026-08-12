const ITEMS = [
  {
    tag: 'Thesis',
    date: '2026 — present',
    title: 'Elaboration for Refinement Types with Subtyping',
    abstract:
      'A bidirectional elaboration algorithm for a Martin-Löf-style calculus extended with refinement types and intersection subtyping. The work aims to make refinement typing predictable: error messages should point at the rule that failed, not the term that happened to mention it.',
    status: 'Writing',
    progress: 0.62,
  },
  {
    tag: 'Project',
    date: '2025 — present',
    title: 'miniprl — A Small Proof Assistant',
    abstract:
      'A miniature proof assistant for the predicate calculus, written in roughly 2,400 lines of OCaml. Designed for teaching: every rule of the sequent calculus has a corresponding tactic, and the kernel is small enough to be read in an afternoon.',
    status: 'Active',
    progress: 0.78,
  },
  {
    tag: 'Internship',
    date: 'Summer 2025',
    title: 'Incremental Type-Checking at MSR Asia',
    abstract:
      'Worked on the dependency graph layer of an incremental type-checker for a research extension of F#. Showed that a hash-consing scheme with monotone memoisation reduces re-checking by 41% on a benchmark of 12kLOC, at the cost of a 1.3× memory overhead.',
    status: 'Submitted',
    progress: 1,
  },
]

export default function Research() {
  return (
    <section id="research" className="section section--alt">
      <div className="shell">
        <div className="section__head">
          <div className="section__label">
            <span className="section__num mono">§ 02</span>
            <span className="eyebrow">Research</span>
          </div>
          <h2 className="section__title">
            Three threads, <em>currently</em> on the loom.
          </h2>
        </div>

        <ol className="research__list">
          {ITEMS.map((r, i) => (
            <li key={r.title} className="ritem reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
              <div className="ritem__head">
                <span className="ritem__tag mono">{r.tag}</span>
                <span className="ritem__date mono">{r.date}</span>
              </div>

              <div className="ritem__body">
                <h3 className="ritem__title">{r.title}</h3>
                <p className="ritem__abstract">{r.abstract}</p>
              </div>

              <div className="ritem__foot">
                <div className="ritem__status">
                  <span className="ritem__dot" />
                  <span className="mono">{r.status}</span>
                </div>
                <div className="ritem__bar" aria-hidden="true">
                  <span
                    className="ritem__bar-fill"
                    style={{ width: `${Math.round(r.progress * 100)}%` }}
                  />
                  <span className="ritem__bar-label mono">
                    {Math.round(r.progress * 100)}%
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <p className="research__note mono">
          Full publication list and preprints available on request &mdash;
          <a href="#contact"> write to me</a>.
        </p>
      </div>
    </section>
  )
}

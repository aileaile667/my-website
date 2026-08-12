export default function About() {
  return (
    <section id="about" className="section">
      <div className="shell">
        <div className="section__head">
          <div className="section__label">
            <span className="section__num mono">§ 01</span>
            <span className="eyebrow">About</span>
          </div>
          <h2 className="section__title">
            A student of <em>programs</em> &amp; the <em>languages</em> they are written in.
          </h2>
        </div>

        <div className="about__grid">
          <div className="about__col about__col--main reveal">
            <p className="dropcap">
              <span className="dropcap__letter">I</span>
              am a third-year undergraduate in the Computer Science department at
              Tsinghua University, where I work with Professor&nbsp;
              <span className="italic">Zhang Mei</span> in the Programming Languages Lab.
              My interests sit at the intersection of type theory, compiler construction,
              and human-centred programming tools &mdash; the slow, unfashionable corner
              of CS where a single off-by-one in a substitution rule can ruin your whole quarter.
            </p>

            <p>
              Before university I spent two years writing competitive programming
              problems for a regional olympiad, which taught me that clarity is a
              discipline, not a temperament. These days I try to apply the same
              discipline to research: I would rather understand one theorem deeply
              than cite ten superficially.
            </p>

            <p>
              Outside the lab I maintain two open-source projects, write a monthly
              newsletter on PL topics for Chinese-speaking students, and run a small
              reading group on&nbsp;
              <em>Pierce&rsquo;s &ldquo;Types and Programming Languages&rdquo;</em>.
              When the screen closes I run, badly, along the canal.
            </p>
          </div>

          <aside className="about__col about__col--side reveal">
            <div className="factbox">
              <h3 className="factbox__head">Curriculum Vitae</h3>
              <dl className="factbox__list">
                <div className="factbox__row">
                  <dt className="mono">Degree</dt>
                  <dd>B.Eng. in Computer Science</dd>
                </div>
                <div className="factbox__row">
                  <dt className="mono">Institution</dt>
                  <dd>Tsinghua University</dd>
                </div>
                <div className="factbox__row">
                  <dt className="mono">Year</dt>
                  <dd>3 / 4 &middot; expected 2027</dd>
                </div>
                <div className="factbox__row">
                  <dt className="mono">GPA</dt>
                  <dd>3.87 / 4.00</dd>
                </div>
                <div className="factbox__row">
                  <dt className="mono">Lab</dt>
                  <dd>Programming Languages Lab</dd>
                </div>
                <div className="factbox__row">
                  <dt className="mono">Advisor</dt>
                  <dd>Prof. Zhang Mei</dd>
                </div>
                <div className="factbox__row">
                  <dt className="mono">Focus</dt>
                  <dd>Type systems, compilers, program logic</dd>
                </div>
                <div className="factbox__row">
                  <dt className="mono">Languages</dt>
                  <dd>Haskell, OCaml, Rust, C++, Python, Agda</dd>
                </div>
              </dl>

              <a href="#" className="factbox__cv">
                <span>Full CV (PDF)</span>
                <span className="mono">↓ 142kb</span>
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

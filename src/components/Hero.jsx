import { useEffect, useRef } from 'react'

export default function Hero() {
  const rootRef = useRef(null)

  useEffect(() => {
    const els = rootRef.current.querySelectorAll('[data-stagger]')
    els.forEach((el, i) => {
      el.style.animationDelay = `${i * 0.12 + 0.1}s`
      el.classList.add('hero-stagger')
    })
  }, [])

  return (
    <section id="top" className="hero" ref={rootRef}>
      <div className="hero__grid shell">
        <div className="hero__meta">
          <div className="hero__date mono">
            <span className="hero__dot" />
            2026 / Edition 03
          </div>
          <div className="hero__loc mono">Beijing, CN</div>
        </div>

        <div className="hero__main">
          <p className="hero__kicker eyebrow" data-stagger>
            <span className="hero__rule" />
            A personal field notebook
          </p>

          <h1 className="hero__title" data-stagger>
            <span className="hero__line">Lin</span>
            <span className="hero__line">
              <em className="hero__em">Wei</em>
              <span className="hero__ast">∗</span>
            </span>
          </h1>

          <p className="hero__role" data-stagger>
            Undergraduate in Computer Science &mdash;
            <span className="italic"> systems, language theory, and the quiet craft of compilers.</span>
          </p>

          <p className="hero__lede" data-stagger>
            I study how programs are read, translated, and reasoned about.
            Currently working on incremental type-checking for dependent languages,
            and a small proof assistant that I keep meaning to finish.
          </p>

          <div className="hero__actions" data-stagger>
            <a href="#research" className="btn btn--solid">
              <span>Read current work</span>
              <span className="btn__arrow">→</span>
            </a>
            <a href="#contact" className="btn btn--ghost">
              <span>Get in touch</span>
            </a>
          </div>
        </div>

        <aside className="hero__side" data-stagger>
          <div className="hero__card">
            <div className="hero__card-head">
              <span className="eyebrow">Now</span>
              <span className="mono hero__card-time">Aug ’26</span>
            </div>
            <p className="hero__card-body">
              Research assistant in the
              <em> Programming Languages Lab</em>. Writing my thesis on
              <em> elaboration for refinement types</em>.
            </p>
            <div className="hero__card-foot">
              <span className="mono">status: writing</span>
              <span className="hero__pulse" />
            </div>
          </div>
        </aside>
      </div>

      <div className="hero__base shell">
        <div className="hero__base-l mono">
          ↓ scroll for the table of contents
        </div>
        <div className="hero__base-r mono">
          Vol. III &middot; No. 11
        </div>
      </div>
    </section>
  )
}

const CHANNELS = [
  { label: 'Email', value: 'linwei@tsinghua.edu.cn', href: 'mailto:linwei@tsinghua.edu.cn' },
  { label: 'GitHub', value: '@linwei-cs', href: '#' },
  { label: 'Scholar', value: 'Lin Wei — profile', href: '#' },
  { label: 'Mastodon', value: '@linwei@hachyderm.io', href: '#' },
]

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="shell">
        <div className="contact__grid">
          <div className="contact__lead reveal">
            <span className="section__num mono">§ 05</span>
            <span className="eyebrow">Contact</span>
            <h2 className="contact__title">
              Letters are <em>always</em> welcome.
            </h2>
            <p className="contact__lede">
              I read everything, reply to most of it, and try to be useful when I do.
              Slow correspondents are a tradition I am happy to keep.
            </p>
          </div>

          <div className="contact__card reveal">
            <div className="contact__card-head">
              <span className="eyebrow">Channels</span>
              <span className="mono contact__reply">avg. reply 3 days</span>
            </div>
            <ul className="contact__list">
              {CHANNELS.map((c) => (
                <li key={c.label} className="contact__row">
                  <span className="contact__label mono">{c.label}</span>
                  <a href={c.href} className="contact__value">
                    {c.value}
                    <span className="contact__arrow">↗</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="contact__sig mono">
              <span>— Lin Wei</span>
              <span>Beijing, 2026</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { FC } from 'react'
import { JsonLd } from '../components/JsonLd'
import { pageForPath } from '../seo/pages'
import { AdSlot } from '../components/ads/AdSlot'
import { Link } from 'react-router-dom'

interface Props {
  path: string
  sections: { heading: string; paragraphs: string[] }[]
}

export const GuidePage: FC<Props> = ({ path, sections }) => {
  const page = pageForPath(path)

  return (
    <article className="content-page">
      <JsonLd page={page} />
      <h1>{page.h1}</h1>
      <p className="lede">{page.intro}</p>
      {sections.map((s) => (
        <section key={s.heading}>
          <h2>{s.heading}</h2>
          {s.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </section>
      ))}
      <p>
        Use the <Link to="/">Free Backlink Generator</Link> only as a workflow helper after your pages are ready.
      </p>
      <AdSlot slot="content300x250" className="ad-content" />
      <section className="faq">
        <h2>FAQ</h2>
        {page.faq.map((item) => (
          <details key={item.q} className="faq-item">
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </section>
    </article>
  )
}

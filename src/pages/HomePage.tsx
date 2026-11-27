import { FC } from 'react'
import { BacklinkTool } from '../components/BacklinkTool'
import { JsonLd } from '../components/JsonLd'
import { HomeSeoEn } from '../content/homeSeoEn'
import { pageForPath } from '../seo/pages'
import { AdSlot } from '../components/ads/AdSlot'

interface Props {
  seoPath: string
}

export const HomePage: FC<Props> = ({ seoPath }) => {
  const page = pageForPath(seoPath)

  return (
    <article className="content-page">
      <JsonLd page={page} />
      <header className="page-hero">
        <h1>{page.h1}</h1>
        <p className="lede">{page.intro}</p>
      </header>

      <BacklinkTool />

      {seoPath === '/' ? (
        <HomeSeoEn />
      ) : (
        <section className="how-to">
          <h2>How to use this helper</h2>
          <ol>
            <li>
              Enter a valid HTTPS URL or domain (for example <code>example.com</code>).
            </li>
            <li>
              Pick a mode: IFrame for quiet batches, Tab if popups are blocked, Ping for proxy-based fetches.
            </li>
            <li>Allow popups when prompted; stop the run anytime with the same button.</li>
            <li>Download the generated URL list for your records — results vary per third-party site.</li>
          </ol>
        </section>
      )}

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

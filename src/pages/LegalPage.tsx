import { FC } from 'react'
import { SITE } from '../site'
import { AdSlot } from '../components/ads/AdSlot'

interface Props {
  kind: 'privacy' | 'terms' | 'about' | 'contact'
}

const copy: Record<Props['kind'], { title: string; body: string[] }> = {
  privacy: {
    title: 'Privacy',
    body: [
      'Free Backlink Generator runs in your browser. Checklist progress may be stored in localStorage on your device. We do not operate a login database or upload your domain to our servers for processing.',
      'When you run the tool, your browser contacts third-party lookup and ping URLs directly. Those services have their own privacy policies.',
      'Ad networks (Adsterra) may set cookies when ad codes are enabled.',
      `Questions: ${SITE.contactEmail}`,
    ],
  },
  terms: {
    title: 'Terms of use',
    body: [
      'This helper is provided as-is without warranty. No ranking, traffic, or backlink outcomes are guaranteed.',
      'You are responsible for complying with search engine guidelines and the terms of sites you submit to.',
      'Do not use the generator for harassment, illegal content, or automated spam against unwilling third parties.',
      'Gentil M. may update these terms at any time.',
    ],
  },
  about: {
    title: 'About',
    body: [
      'Free Backlink Generator packages a client-side workflow popular among SEO helper utilities: build lookup URLs for your domain and open or ping them in batches from the browser.',
      `The URL engine and template list are based on the open-source project backlink-generator-tool (${SITE.upstreamUrl}). The upstream repository does not declare an SPDX license file on GitHub; we retain upstream JSON/JS assets and credit the authors in the footer.`,
      'Gentil M. added the site shell, honest disclaimers, checklist, directory list, French page, SEO pages, and Adsterra integration for web-free.site.',
      `Operator: Gentil M., Kigali, Rwanda — ${SITE.gentilUrl}`,
    ],
  },
  contact: {
    title: 'Contact',
    body: [`Email ${SITE.contactEmail} for corrections, takedown requests, or partnership notes.`],
  },
}

export const LegalPage: FC<Props> = ({ kind }) => {
  const c = copy[kind]
  return (
    <article className="legal-page content-page">
      <h1>{c.title}</h1>
      {c.body.map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      <AdSlot slot="content300x250" className="ad-content" />
    </article>
  )
}

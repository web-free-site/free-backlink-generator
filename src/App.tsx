import { useMemo } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { ChecklistPage } from './pages/ChecklistPage'
import { DirectoriesPage } from './pages/DirectoriesPage'
import { GuidePage } from './pages/GuidePage'
import { LegalPage } from './pages/LegalPage'
import { RouteMeta } from './seo/Helmet'

function localeFromPath(path: string): 'en' | 'fr' {
  return path.startsWith('/fr') ? 'fr' : 'en'
}

const freeLinksGuide = [
  {
    heading: 'Start with link-worthy assets',
    paragraphs: [
      'Guides, data visualizations, free tools, and local resources earn more durable links than scripted blasts to stat aggregators.',
      'Fix title tags and internal links so new pages are easy to discover without mass pinging.',
    ],
  },
  {
    heading: 'Use free listings intentionally',
    paragraphs: [
      'Pick directories that match your niche and geography. Use the same brand name, URL, and description everywhere.',
      'Skip networks that exist only to sell PageRank — they carry more risk than benefit.',
    ],
  },
  {
    heading: 'Outreach beats automation',
    paragraphs: [
      'Email creators who already mention your topic, contribute guest commentary, or sponsor community events with a genuine resource link.',
      'Track mentions in Search Console and respond to unlinked citations politely.',
    ],
  },
]

const pingGuide = [
  {
    heading: 'What pinging does',
    paragraphs: [
      'Ping endpoints notify blog trackers or XML-RPC services that a URL changed. Some SEO helper lists wrap those endpoints around your domain.',
      'Pinging does not override Google’s crawl budget or guarantee permanent indexation.',
    ],
  },
  {
    heading: 'When it is reasonable',
    paragraphs: [
      'After publishing a new article, launching a product page, or updating a sitemap — a single ping or sitemap submission is enough.',
      'Repeated pings for unchanged URLs rarely help and may annoy service operators.',
    ],
  },
  {
    heading: 'Better indexing habits',
    paragraphs: [
      'Submit XML sitemaps in Google Search Console and Bing Webmaster Tools.',
      'Build internal links from already-indexed pages and share on channels your audience actually uses.',
    ],
  },
]

function App() {
  const location = useLocation()
  const locale = useMemo(() => localeFromPath(location.pathname), [location.pathname])
  const homePaths = ['/', '/fr', '/fr/generateur-backlinks-gratuit']

  return (
    <Layout locale={locale} showHomeBanner={homePaths.includes(location.pathname)}>
      <RouteMeta />
      <Routes>
        <Route path="/" element={<HomePage seoPath="/" />} />
        <Route path="/fr" element={<HomePage seoPath="/fr/generateur-backlinks-gratuit" />} />
        <Route path="/fr/generateur-backlinks-gratuit" element={<HomePage seoPath="/fr/generateur-backlinks-gratuit" />} />
        <Route path="/backlink-checklist" element={<ChecklistPage />} />
        <Route path="/free-directory-list" element={<DirectoriesPage />} />
        <Route
          path="/how-to-get-backlinks-without-paying"
          element={<GuidePage path="/how-to-get-backlinks-without-paying" sections={freeLinksGuide} />}
        />
        <Route
          path="/ping-backlinks-for-indexing"
          element={<GuidePage path="/ping-backlinks-for-indexing" sections={pingGuide} />}
        />
        <Route path="/privacy" element={<LegalPage kind="privacy" />} />
        <Route path="/terms" element={<LegalPage kind="terms" />} />
        <Route path="/about" element={<LegalPage kind="about" />} />
        <Route path="/contact" element={<LegalPage kind="contact" />} />
        <Route path="*" element={<HomePage seoPath="/" />} />
      </Routes>
    </Layout>
  )
}

export default App

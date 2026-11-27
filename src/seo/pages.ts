import { SITE } from '../site'
import homeEn from './homeEn.static.json'

export type SeoPage = {
  path: string
  locale: 'en' | 'fr'
  title: string
  description: string
  h1: string
  intro: string
  faq: { q: string; a: string }[]
}

export const SEO_PAGES: SeoPage[] = [
  {
    path: '/',
    locale: 'en',
    title: 'Free Backlink Generator — SEO lookup URLs in your browser (free)',
    description:
      'Free Backlink Generator builds stat, WHOIS, and SEO lookup URLs for your domain and runs them in your browser. No sign-up or upload—honest helper, no ranking guarantee.',
    h1: homeEn.h1,
    intro: homeEn.intro,
    faq: homeEn.faq,
  },
  {
    path: '/fr/generateur-backlinks-gratuit',
    locale: 'fr',
    title: 'Générateur de backlinks gratuit — aide SEO dans le navigateur',
    description:
      'Saisissez votre domaine et ouvrez des URL d’analyse, whois et statistiques. Outil d’aide sans garantie de classement.',
    h1: 'Générateur de backlinks gratuit',
    intro:
      'Cet outil prépare des URL qui citent votre site sur des services d’analyse tiers, puis les ouvre depuis votre navigateur. Aucune garantie de backlink ni de positionnement.',
    faq: [
      {
        q: 'Cet outil garantit-il un meilleur référencement ?',
        a: 'Non. Il facilite seulement des requêtes vers des services d’analyse. Les moteurs décident du classement.',
      },
      {
        q: 'Mon domaine est-il envoyé à votre serveur ?',
        a: 'Non. Le traitement est côté navigateur. Les sites tiers peuvent journaliser leurs propres requêtes.',
      },
      {
        q: 'Quel mode choisir ?',
        a: 'IFrame pour des lots discrets ; Onglet si l’intégration est bloquée ; Ping via proxys publics, souvent instable.',
      },
      {
        q: 'Les backlinks automatiques sont-ils sûrs ?',
        a: 'Les liens en masse peuvent paraître artificiels. Privilégiez le contenu utile et les liens éditoriaux.',
      },
    ],
  },
  {
    path: '/backlink-checklist',
    locale: 'en',
    title: 'Free backlink checklist for small sites',
    description: 'Step-by-step honest checklist before using bulk ping tools or directory submissions.',
    h1: 'Backlink checklist',
    intro: 'Work through these steps before relying on generator-style tools.',
    faq: [
      {
        q: 'Should I complete every item?',
        a: 'Prioritize technical health and content first; directories and pings come after you have pages worth linking to.',
      },
      {
        q: 'Can I save checklist progress?',
        a: 'Yes — toggles are stored in your browser localStorage on this device.',
      },
    ],
  },
  {
    path: '/free-directory-list',
    locale: 'en',
    title: 'Free web directories list — editorial submissions',
    description: 'Curated free directories and profiles for legitimate business and project listings.',
    h1: 'Free directory list',
    intro: 'Hand-picked free or freemium listings. Avoid paid link schemes labeled as directories.',
    faq: [
      {
        q: 'Are all directories high quality?',
        a: 'No directory list is perfect. Skip sites with obvious spam, unrelated categories, or paid link walls.',
      },
      {
        q: 'Do directory links boost rankings?',
        a: 'They may help discovery slightly; they are not a substitute for useful content and earned citations.',
      },
    ],
  },
  {
    path: '/how-to-get-backlinks-without-paying',
    locale: 'en',
    title: 'How to get backlinks without paying — realistic guide',
    description: 'Earn links with content, partnerships, and free listings instead of buying bulk packages.',
    h1: 'How to get backlinks without paying',
    intro: 'A practical, white-hat oriented overview for small sites and freelancers.',
    faq: [
      {
        q: 'Are free backlink generators enough?',
        a: 'They can speed up lookup workflows but rarely create lasting editorial links on their own.',
      },
      {
        q: 'What works better than automation?',
        a: 'Original research, tools, local partnerships, and being cited as a helpful resource.',
      },
    ],
  },
  {
    path: '/ping-backlinks-for-indexing',
    locale: 'en',
    title: 'Ping backlinks and URLs for indexing — what to expect',
    description: 'When pinging helps discovery, and why it is not a ranking silver bullet.',
    h1: 'Ping URLs for indexing',
    intro:
      'Pinging notifies services that a URL exists; it does not force Google to rank or index permanently.',
    faq: [
      {
        q: 'Does pinging guarantee indexing?',
        a: 'No. Search engines crawl based on many signals; pings at best may speed discovery slightly.',
      },
      {
        q: 'Should I ping every day?',
        a: 'Ping after meaningful updates or new pages, not on a meaningless schedule.',
      },
    ],
  },
  {
    path: '/privacy',
    locale: 'en',
    title: 'Privacy — Free Backlink Generator',
    description: 'Privacy policy for the Free Backlink Generator helper site.',
    h1: 'Privacy',
    intro: '',
    faq: [],
  },
  {
    path: '/terms',
    locale: 'en',
    title: 'Terms — Free Backlink Generator',
    description: 'Terms of use for Free Backlink Generator.',
    h1: 'Terms of use',
    intro: '',
    faq: [],
  },
  {
    path: '/about',
    locale: 'en',
    title: 'About — Free Backlink Generator',
    description: 'About the site, upstream open-source engine, and operator.',
    h1: 'About',
    intro: '',
    faq: [],
  },
  {
    path: '/contact',
    locale: 'en',
    title: 'Contact — Free Backlink Generator',
    description: 'Contact Gentil M. about Free Backlink Generator.',
    h1: 'Contact',
    intro: '',
    faq: [],
  },
]

export function canonicalFor(path: string): string {
  const p = path === '/' ? '/' : path.replace(/\/$/, '')
  return SITE.canonicalHost + (p === '/' ? '/' : p)
}

export function pageForPath(pathname: string): SeoPage {
  if (pathname === '/fr')
    return SEO_PAGES.find((p) => p.path === '/fr/generateur-backlinks-gratuit') ?? SEO_PAGES[0]
  return SEO_PAGES.find((p) => p.path === pathname) ?? SEO_PAGES[0]
}

import fs from 'node:fs'
import path from 'node:path'

const HOST = 'https://free-backlink-generator.web-free.site'
const dist = path.resolve('dist')
const baseHtml = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')

const pages = [
  {
    path: '/fr/generateur-backlinks-gratuit',
    locale: 'fr',
    title: 'Générateur de backlinks gratuit — aide SEO dans le navigateur',
    description:
      'Saisissez votre domaine et ouvrez des URL d’analyse, whois et statistiques. Outil d’aide sans garantie de classement.',
    h1: 'Générateur de backlinks gratuit',
    snippet:
      '<p>Outil d’aide côté navigateur pour préparer des requêtes vers des services d’analyse. Aucune garantie de backlink.</p>',
  },
  {
    path: '/backlink-checklist',
    locale: 'en',
    title: 'Free backlink checklist for small sites',
    description: 'Step-by-step honest checklist before using bulk ping tools or directory submissions.',
    h1: 'Backlink checklist',
    snippet: '<p>Track white-hat tasks in your browser before running generator workflows.</p>',
  },
  {
    path: '/free-directory-list',
    locale: 'en',
    title: 'Free web directories list — editorial submissions',
    description: 'Curated free directories and profiles for legitimate business and project listings.',
    h1: 'Free directory list',
    snippet: '<p>Hand-picked free listings for real businesses and projects.</p>',
  },
  {
    path: '/how-to-get-backlinks-without-paying',
    locale: 'en',
    title: 'How to get backlinks without paying — realistic guide',
    description: 'Earn links with content, partnerships, and free listings instead of buying bulk packages.',
    h1: 'How to get backlinks without paying',
    snippet: '<p>Practical tips for freelancers and small sites.</p>',
  },
  {
    path: '/ping-backlinks-for-indexing',
    locale: 'en',
    title: 'Ping backlinks and URLs for indexing — what to expect',
    description: 'When pinging helps discovery, and why it is not a ranking silver bullet.',
    h1: 'Ping URLs for indexing',
    snippet: '<p>Understand limits of ping workflows before automating them.</p>',
  },
  {
    path: '/privacy',
    locale: 'en',
    title: 'Privacy — Free Backlink Generator',
    description: 'Privacy policy for the Free Backlink Generator helper site.',
    h1: 'Privacy',
    snippet: '<p>Client-side tool; localStorage for checklist; third-party ad cookies possible.</p>',
  },
  {
    path: '/terms',
    locale: 'en',
    title: 'Terms — Free Backlink Generator',
    description: 'Terms of use for Free Backlink Generator.',
    h1: 'Terms of use',
    snippet: '<p>No ranking guarantees. Use responsibly.</p>',
  },
  {
    path: '/about',
    locale: 'en',
    title: 'About — Free Backlink Generator',
    description: 'About the site, upstream open-source engine, and operator.',
    h1: 'About',
    snippet: '<p>Based on backlink-generator-tool open-source assets with Gentil M. site shell.</p>',
  },
  {
    path: '/contact',
    locale: 'en',
    title: 'Contact — Free Backlink Generator',
    description: 'Contact Gentil M. about Free Backlink Generator.',
    h1: 'Contact',
    snippet: '<p>Email gentil@quevvy.com</p>',
  },
]

function buildPage(page) {
  const url = HOST + page.path
  let html = baseHtml
  html = html.replace(/<html lang="[^"]*"/, `<html lang="${page.locale}"`)
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${page.title}</title>`)
  html = html.replace(
    /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${page.description}" />`,
  )
  html = html.replace(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${url}" />`)
  html = html.replace(/<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/, `<meta property="og:url" content="${url}" />`)
  html = html.replace(/<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/, `<meta property="og:title" content="${page.title}" />`)
  html = html.replace(
    /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${page.description}" />`,
  )
  const seoBlock = `<section id="seo-prerender" class="seo-prerender"><h1>${page.h1}</h1>${page.snippet}</section>`
  html = html.replace('<div id="root"></div>', `${seoBlock}<div id="root"></div>`)
  return html
}

for (const page of pages) {
  const dir = path.join(dist, page.path.replace(/^\//, ''))
  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(path.join(dir, 'index.html'), buildPage(page))
}

console.log('Prerendered', pages.length, 'route shells')

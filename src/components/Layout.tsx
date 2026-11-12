import { FC, ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AdSlot, SponsoredSmartlink, useAdScripts } from './ads/AdSlot'
import { SITE } from '../site'

type Locale = 'en' | 'fr'

interface Props {
  locale: Locale
  children: ReactNode
  showHomeBanner?: boolean
}

const localePath = (locale: Locale, path: string) =>
  locale === 'fr' && path === '/' ? '/fr/generateur-backlinks-gratuit' : path

export const Layout: FC<Props> = ({ locale, children, showHomeBanner }) => {
  const location = useLocation()
  useAdScripts()

  const isFr = location.pathname.startsWith('/fr')
  const switchEn = isFr ? '/' : location.pathname
  const switchFr = isFr
    ? location.pathname
    : `/fr${location.pathname === '/' ? '/generateur-backlinks-gratuit' : location.pathname}`

  return (
    <div className="site">
      <header className="site-header">
        <AdSlot slot="header728x90" className="ad-header" label="Sponsored" />
        <div className="site-header__inner">
          <Link to={localePath(locale, '/')} className="brand">
            <span className="brand__mark">BL</span>
            <span className="brand__text">
              <strong>Free Backlink Generator</strong>
              <small>Honest SEO helper — no ranking guarantee</small>
            </span>
          </Link>
          <nav className="nav" aria-label="Main">
            <Link to={localePath(locale, '/')}>Generator</Link>
            <Link to="/backlink-checklist">Checklist</Link>
            <Link to="/free-directory-list">Directories</Link>
            <Link to="/how-to-get-backlinks-without-paying">Free links guide</Link>
            <Link to="/ping-backlinks-for-indexing">Ping guide</Link>
            <div className="lang-switch" aria-label="Language">
              <Link className={locale === 'en' ? 'active' : ''} to={switchEn}>
                EN
              </Link>
              <Link className={locale === 'fr' ? 'active' : ''} to={switchFr}>
                FR
              </Link>
            </div>
          </nav>
        </div>
        {showHomeBanner ? <AdSlot slot="homeTop728x90" className="ad-home-top" /> : null}
      </header>

      <div className="site-body">
        <main className="site-main">{children}</main>
        <aside className="site-sidebar" aria-label="Sidebar">
          <AdSlot slot="sidebar160x600" className="ad-sidebar" />
          <AdSlot slot="sidebar160x300" className="ad-sidebar-secondary" />
        </aside>
      </div>

      <AdSlot slot="mobileSticky320x50" className="ad-mobile-sticky" label="Sponsored" />

      <footer className="site-footer">
        <p>
          <a href={SITE.gentilUrl} rel="noopener noreferrer">
            Gentil M.
          </a>
          {' · '}
          <a href={SITE.upstreamUrl} rel="noopener noreferrer">
            backlink-generator-tool (open source)
          </a>
        </p>
        <p>
          <Link to="/privacy">Privacy</Link>
          {' · '}
          <Link to="/terms">Terms</Link>
          {' · '}
          <Link to="/about">About</Link>
          {' · '}
          <Link to="/contact">Contact</Link>
          {' · '}
          <a href={`mailto:${SITE.contactEmail}`}>{SITE.contactEmail}</a>
        </p>
        <p className="muted">Client-side only. Third-party lookup sites apply their own policies.</p>
        <SponsoredSmartlink />
      </footer>
    </div>
  )
}

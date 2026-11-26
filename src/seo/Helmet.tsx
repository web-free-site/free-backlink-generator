import { FC, ReactNode, createContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { canonicalFor, pageForPath } from './pages'

const Ctx = createContext({})

export const HelmetProvider: FC<{ children: ReactNode }> = ({ children }) => (
  <Ctx.Provider value={{}}>{children}</Ctx.Provider>
)

export function usePageMeta() {
  const location = useLocation()
  const page = pageForPath(location.pathname)

  useEffect(() => {
    document.title = page.title
    const desc = document.querySelector('meta[name="description"]')
    if (desc) desc.setAttribute('content', page.description)
    else {
      const m = document.createElement('meta')
      m.name = 'description'
      m.content = page.description
      document.head.appendChild(m)
    }
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    const path = location.pathname === '/fr' ? '/fr/generateur-backlinks-gratuit' : page.path
    canonical.href = canonicalFor(path)

    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', page.title)
    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', page.description)
    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) ogUrl.setAttribute('content', canonical.href)

    const twTitle = document.querySelector('meta[name="twitter:title"]')
    if (twTitle) twTitle.setAttribute('content', page.title)
    const twDesc = document.querySelector('meta[name="twitter:description"]')
    if (twDesc) twDesc.setAttribute('content', page.description)

    document.documentElement.lang = page.locale
  }, [location.pathname, page])
}

export const RouteMeta: FC = () => {
  usePageMeta()
  return null
}

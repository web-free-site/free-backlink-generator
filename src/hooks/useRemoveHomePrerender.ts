import { useEffect } from 'react'

/** Drops build-time static HTML so the SPA does not keep a duplicate H1 after mount. */
export function useRemoveHomePrerender(enabled: boolean) {
  useEffect(() => {
    if (!enabled) return
    document.getElementById('seo-prerender')?.remove()
  }, [enabled])
}

import { FC } from 'react'
import homeSeoBody from './homeSeoEn.body.html?raw'

/** English homepage SEO body (~500–700 words). Rendered only on `/`. */
export const HomeSeoEn: FC = () => (
  <section
    className="home-seo"
    aria-labelledby="home-seo-title"
    dangerouslySetInnerHTML={{ __html: homeSeoBody }}
  />
)

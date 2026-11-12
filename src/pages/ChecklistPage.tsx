import { FC, useEffect, useState } from 'react'
import { BACKLINK_CHECKLIST } from '../data/checklist'
import { JsonLd } from '../components/JsonLd'
import { pageForPath } from '../seo/pages'
import { AdSlot } from '../components/ads/AdSlot'

const STORAGE_KEY = 'fbg-checklist-v1'

export const ChecklistPage: FC = () => {
  const page = pageForPath('/backlink-checklist')
  const [checked, setChecked] = useState<Record<string, boolean>>({})

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) setChecked(JSON.parse(raw) as Record<string, boolean>)
    } catch {
      /* ignore */
    }
  }, [])

  const toggle = (id: string) => {
    setChecked((prev) => {
      const next = { ...prev, [id]: !prev[id] }
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
      } catch {
        /* ignore */
      }
      return next
    })
  }

  const done = BACKLINK_CHECKLIST.filter((i) => checked[i.id]).length

  return (
    <article className="content-page">
      <JsonLd page={page} />
      <h1>{page.h1}</h1>
      <p className="lede">{page.intro}</p>
      <p className="muted">
        Progress: {done}/{BACKLINK_CHECKLIST.length} (saved in this browser only)
      </p>
      <ul className="checklist">
        {BACKLINK_CHECKLIST.map((item) => (
          <li key={item.id}>
            <label>
              <input type="checkbox" checked={!!checked[item.id]} onChange={() => toggle(item.id)} />
              <span>
                <strong>{item.title}</strong>
                <small>{item.detail}</small>
              </span>
            </label>
          </li>
        ))}
      </ul>
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

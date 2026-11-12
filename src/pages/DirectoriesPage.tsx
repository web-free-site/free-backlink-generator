import { FC } from 'react'
import { FREE_DIRECTORIES } from '../data/directories'
import { JsonLd } from '../components/JsonLd'
import { pageForPath } from '../seo/pages'
import { AdSlot } from '../components/ads/AdSlot'

export const DirectoriesPage: FC = () => {
  const page = pageForPath('/free-directory-list')

  return (
    <article className="content-page">
      <JsonLd page={page} />
      <h1>{page.h1}</h1>
      <p className="lede">{page.intro}</p>
      <p className="muted">
        Verify each site&apos;s terms before submitting. We do not endorse paid link schemes disguised as directories.
      </p>
      <DirectoryTable className="directory-table" directories={FREE_DIRECTORIES} />
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

const DirectoryTable: FC<{ className: string; directories: typeof FREE_DIRECTORIES }> = ({
  className,
  directories,
}) => (
  <div className={`table-scroll ${className}`}>
    <table>
      <thead>
        <tr>
          <th>Directory</th>
          <th>Notes</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        {directories.map((d) => (
          <tr key={d.url}>
            <td>
              {d.name}
              {d.free ? ' (free)' : ''}
            </td>
            <td>{d.note}</td>
            <td>
              <a href={d.url} target="_blank" rel="noopener noreferrer">
                Visit
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

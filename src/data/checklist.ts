export type ChecklistItem = {
  id: string
  title: string
  detail: string
}

export const BACKLINK_CHECKLIST: ChecklistItem[] = [
  {
    id: 'quality-content',
    title: 'Publish useful, original pages',
    detail: 'Tools like this cannot replace content people want to link to naturally.',
  },
  {
    id: 'fix-technical',
    title: 'Fix crawlability basics',
    detail: 'HTTPS, XML sitemap, robots.txt, canonical tags, and mobile-friendly layout.',
  },
  {
    id: 'brand-profiles',
    title: 'Claim brand profiles',
    detail: 'Consistent NAP (name, address, phone) and website URL on major listings.',
  },
  {
    id: 'directories',
    title: 'Submit to relevant free directories',
    detail: 'Use our directory list for editorial or free listings — skip spam farms.',
  },
  {
    id: 'internal-links',
    title: 'Strengthen internal linking',
    detail: 'Link related articles and hub pages so authority flows inside your site.',
  },
  {
    id: 'guest-context',
    title: 'Earn contextual mentions',
    detail: 'Partnerships, interviews, and resources pages beat automated blast links.',
  },
  {
    id: 'monitor',
    title: 'Monitor Search Console',
    detail: 'Watch indexing, manual actions, and which pages earn impressions.',
  },
  {
    id: 'disavow',
    title: 'Disavow toxic links if needed',
    detail: 'If you received shady bulk links, use Google disavow carefully after review.',
  },
  {
    id: 'ping-index',
    title: 'Ping only after publishing',
    detail: 'Pinging empty or duplicate URLs wastes time; publish first, then ping sitemaps.',
  },
  {
    id: 'expectations',
    title: 'Set honest expectations',
    detail: 'Mass stat-page lookups are a helper workflow, not a guaranteed ranking tactic.',
  },
]

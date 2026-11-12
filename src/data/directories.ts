export type DirectoryEntry = {
  name: string
  url: string
  note: string
  free: boolean
}

export const FREE_DIRECTORIES: DirectoryEntry[] = [
  { name: 'Google Business Profile', url: 'https://www.google.com/business/', note: 'Local / brand presence; manual listing', free: true },
  { name: 'Bing Places', url: 'https://www.bingplaces.com/', note: 'Microsoft map listing', free: true },
  { name: 'Apple Business Connect', url: 'https://businessconnect.apple.com/', note: 'Apple Maps listing', free: true },
  { name: 'Crunchbase', url: 'https://www.crunchbase.com/', note: 'Company profile (free tier)', free: true },
  { name: 'Hotfrog', url: 'https://www.hotfrog.com/', note: 'General business directory', free: true },
  { name: 'Brownbook', url: 'https://www.brownbook.net/', note: 'Global business listings', free: true },
  { name: 'Cylex', url: 'https://www.cylex.us/', note: 'Local business listings', free: true },
  { name: 'Tuugo', url: 'https://www.tuugo.us/', note: 'Company directory', free: true },
  { name: 'EZlocal', url: 'https://ezlocal.com/', note: 'US-focused citations', free: true },
  { name: 'Spoke', url: 'https://www.spoke.com/', note: 'People / company pages', free: true },
  { name: 'AboutUs', url: 'https://aboutus.com/', note: 'Domain / organization wiki', free: true },
  { name: 'ExactSeek', url: 'https://www.exactseek.com/add.html', note: 'Search engine submission form', free: true },
  { name: 'Entireweb', url: 'https://www.entireweb.com/free_submission/', note: 'Free URL submission', free: true },
  { name: 'Open Directory Project (DMOZ mirror)', url: 'https://dmoz-odp.org/', note: 'Curated directory mirror; editorial', free: true },
  { name: 'Product Hunt', url: 'https://www.producthunt.com/', note: 'Launches for digital products', free: true },
  { name: 'AlternativeTo', url: 'https://alternativeto.net/', note: 'Software alternatives', free: true },
  { name: 'StartupBlink', url: 'https://www.startupblink.com/', note: 'Startup ecosystems', free: true },
  { name: 'Foursquare', url: 'https://foursquare.com/developers/', note: 'Place / venue data', free: true },
  { name: 'GitHub', url: 'https://github.com/', note: 'Open-source project profile with site link', free: true },
  { name: 'Dev.to', url: 'https://dev.to/', note: 'Developer community profile', free: true },
]

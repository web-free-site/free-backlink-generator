import { FC, useEffect, useRef } from 'react'
import { AdSlot } from './ads/AdSlot'

const SCRIPT_ID = 'backlink-generator-engine'

function loadEngine() {
  const existing = document.getElementById(SCRIPT_ID)
  if (existing) existing.remove()
  return new Promise<void>((resolve, reject) => {
    const s = document.createElement('script')
    s.id = SCRIPT_ID
    s.src = `/vendor/backlink-generator.js?${Date.now()}`
    s.async = false
    s.onload = () => resolve()
    s.onerror = () => reject(new Error('Failed to load backlink engine'))
    document.body.appendChild(s)
  })
}

export const BacklinkTool: FC = () => {
  const mounted = useRef(false)

  useEffect(() => {
    if (mounted.current) return
    mounted.current = true
    loadEngine().catch((e) => console.error(e))
  }, [])

  return (
    <section className="tool-card" aria-label="Backlink generator">
      <div className="disclaimer">
        <strong>Helper tool only.</strong> Opening stat or whois pages does not guarantee backlinks, indexing, or
        rankings. Use ethically and combine with the checklist below.
      </div>

      <div id="backlink-tool-root">
        <div id="controls">
          <input id="urlInput" type="text" placeholder="Enter your website URL (e.g. example.com)" size={50} />
          <button id="startBtn" type="button">
            Generate Backlinks
          </button>
          <button id="toggleAdvancedBtn" type="button">
            Advanced
          </button>
        </div>

        <div id="advancedPanel" style={{ display: 'none' }}>
          <label>
            Mode:
            <select id="modeSelect" defaultValue="iframe">
              <option value="iframe">IFrame (hidden batch)</option>
              <option value="popup">Popup</option>
              <option value="tab">Tab</option>
              <option value="ping">Ping (CORS proxy)</option>
            </select>
          </label>
          <label>
            Popup/Tab behavior:
            <select id="reuseToggle" defaultValue="fresh">
              <option value="fresh">Open → load → wait → close</option>
              <option value="reuse">Reuse same window/tab</option>
            </select>
          </label>
          <label>
            Max concurrent:
            <input id="concurrencyRange" type="range" min={1} max={20} defaultValue={5} />
            <span id="concurrentCount">5</span>
          </label>
          <label>
            <input type="checkbox" id="rerunCheckbox" /> Repeat after completion
          </label>
          <label>
            <input type="checkbox" id="shuffleCheckbox" defaultChecked /> Shuffle templates before run
          </label>
        </div>

        <div id="shareControls">
          <input id="newUrl" type="text" readOnly placeholder="Shareable URL appears here…" />
          <button id="copyBtn" type="button">
            Copy
          </button>
        </div>

        <div className="tool-actions">
          <button id="downloadBtn" type="button">
            Download URL list
          </button>
          <a id="externalLink" href="#" className="external-test">
            Test link
          </a>
        </div>

        <div id="progressContainer">
          <div className="progress-track">
            <div id="progressBar" className="progress-bar" />
          </div>
          <div id="progressText">0/0 (0%)</div>
        </div>

        <ul id="results" className="results-list" />
      </div>

      <AdSlot slot="betweenToolContent728x90" className="ad-mid" />
      <AdSlot slot="nativeBelowResult" className="ad-native" />
      <AdSlot slot="content468x60" className="ad-content" />
    </section>
  )
}

import { writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { conditions } from '../src/data/conditions.ts';
import { modalitiesData } from '../src/data/modalities.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const targetPath = resolve(__dirname, '../mobile-web/index.html');

// Prepare clean minimal data
const conditionsJson = JSON.stringify(conditions);
const modalitiesJson = JSON.stringify(
  modalitiesData.map((m) => ({
    id: m.id,
    icon: m.icon,
    badgeColor: m.badgeColor,
    name: m.content.en.name,
    tagline: m.content.en.tagline,
    shortDesc: m.content.en.shortDesc,
    overview: m.content.en.overview,
    traditionsTitle: m.content.en.traditionsTitle,
    traditionsDesc: m.content.en.traditionsDesc,
    innovationsTitle: m.content.en.innovationsTitle,
    innovationsDesc: m.content.en.innovationsDesc,
    relevanceDailyUse: m.content.en.relevanceDailyUse,
    safetyNote: m.content.en.safetyNote,
  }))
);

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
  <title>Sattva - Ayurvedic Wellness Guide</title>
  <style>
    :root {
      --primary: #1b4d3e;
      --primary-light: #2d6a4f;
      --primary-bg: #e8f5e9;
      --accent: #b07d62;
      --accent-light: #d4a373;
      --bg: #f8faf8;
      --card-bg: #ffffff;
      --text: #1f2937;
      --text-muted: #4b5563;
      --border: #e5e7eb;
      --border-light: #f3f4f6;
      --radius: 14px;
      --shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
      --font: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      --safe-top: env(safe-area-inset-top, 0px);
      --safe-bottom: env(safe-area-inset-bottom, 0px);
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-tap-highlight-color: transparent;
    }

    body {
      font-family: var(--font);
      background-color: var(--bg);
      color: var(--text);
      line-height: 1.5;
      padding-top: var(--safe-top);
      padding-bottom: calc(var(--safe-bottom) + 30px);
      min-height: 100vh;
      overflow-x: hidden;
    }

    header {
      background: linear-gradient(135deg, #1b4d3e 0%, #2d6a4f 100%);
      color: #ffffff;
      padding: 24px 20px 20px;
      border-bottom-left-radius: 24px;
      border-bottom-right-radius: 24px;
      box-shadow: 0 8px 24px rgba(27, 77, 62, 0.18);
    }

    .header-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .brand-icon {
      font-size: 28px;
      background: rgba(255, 255, 255, 0.18);
      width: 44px;
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 12px;
    }

    .brand-title {
      font-size: 22px;
      font-weight: 700;
      letter-spacing: -0.5px;
    }

    .brand-subtitle {
      font-size: 12px;
      color: rgba(255, 255, 255, 0.82);
    }

    .server-status-btn {
      background: rgba(255, 255, 255, 0.18);
      border: 1px solid rgba(255, 255, 255, 0.3);
      color: #ffffff;
      padding: 6px 12px;
      border-radius: 20px;
      font-size: 11px;
      font-weight: 600;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .status-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #4ade80;
    }

    .status-dot.offline {
      background: #fbbf24;
    }

    /* Server banner */
    .server-banner {
      background: rgba(255, 255, 255, 0.12);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 12px;
      padding: 12px;
      margin-top: 14px;
      font-size: 12px;
      display: none;
    }

    .server-banner.visible {
      display: block;
    }

    .server-input-row {
      display: flex;
      gap: 8px;
      margin-top: 8px;
    }

    .server-input-row input {
      flex: 1;
      padding: 6px 10px;
      border-radius: 8px;
      border: none;
      font-size: 12px;
      background: #ffffff;
      color: #1f2937;
    }

    .server-input-row button {
      background: #ffffff;
      color: var(--primary);
      border: none;
      padding: 6px 14px;
      border-radius: 8px;
      font-weight: 600;
      font-size: 12px;
      cursor: pointer;
    }

    /* Hero search */
    .search-box {
      margin-top: 16px;
      position: relative;
    }

    .search-input {
      width: 100%;
      padding: 14px 16px 14px 44px;
      border-radius: 14px;
      border: none;
      background: #ffffff;
      color: #1f2937;
      font-size: 15px;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
      outline: none;
    }

    .search-icon {
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 16px;
      color: #9ca3af;
      pointer-events: none;
    }

    /* Container */
    .container {
      padding: 20px 16px;
      max-width: 600px;
      margin: 0 auto;
    }

    /* Daily Tip */
    .tip-card {
      background: linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%);
      border: 1px solid #fde68a;
      border-radius: var(--radius);
      padding: 14px 16px;
      margin-bottom: 20px;
      display: flex;
      align-items: flex-start;
      gap: 12px;
      box-shadow: var(--shadow);
    }

    .tip-icon {
      font-size: 24px;
      line-height: 1;
    }

    .tip-title {
      font-size: 13px;
      font-weight: 700;
      color: #92400e;
      margin-bottom: 2px;
    }

    .tip-desc {
      font-size: 12px;
      color: #78350f;
      line-height: 1.4;
    }

    /* Section titles */
    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 12px;
    }

    .section-title {
      font-size: 18px;
      font-weight: 700;
      color: #111827;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .section-subtitle {
      font-size: 12px;
      color: var(--text-muted);
    }

    /* Modalities horizontal scroller */
    .modalities-scroll {
      display: flex;
      gap: 10px;
      overflow-x: auto;
      padding-bottom: 8px;
      margin-bottom: 24px;
      scrollbar-width: none;
      -webkit-overflow-scrolling: touch;
    }

    .modalities-scroll::-webkit-scrollbar {
      display: none;
    }

    .modality-chip {
      flex: 0 0 auto;
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 10px 14px;
      display: flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.03);
      transition: all 0.2s ease;
    }

    .modality-chip:active {
      transform: scale(0.97);
    }

    .modality-chip-icon {
      font-size: 18px;
    }

    .modality-chip-name {
      font-size: 13px;
      font-weight: 600;
      color: #1f2937;
      white-space: nowrap;
    }

    /* Category pills */
    .categories-wrap {
      display: flex;
      gap: 8px;
      overflow-x: auto;
      padding-bottom: 8px;
      margin-bottom: 18px;
      scrollbar-width: none;
      -webkit-overflow-scrolling: touch;
    }

    .categories-wrap::-webkit-scrollbar {
      display: none;
    }

    .cat-btn {
      background: var(--card-bg);
      border: 1px solid var(--border);
      color: var(--text-muted);
      padding: 8px 14px;
      border-radius: 20px;
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      white-space: nowrap;
      transition: all 0.2s ease;
    }

    .cat-btn.active {
      background: var(--primary);
      border-color: var(--primary);
      color: #ffffff;
      box-shadow: 0 4px 10px rgba(27, 77, 62, 0.2);
    }

    /* Conditions list */
    .conditions-grid {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .condition-card {
      background: var(--card-bg);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 16px;
      box-shadow: var(--shadow);
      cursor: pointer;
      transition: transform 0.15s ease, box-shadow 0.15s ease;
      position: relative;
    }

    .condition-card:active {
      transform: scale(0.99);
    }

    .card-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 8px;
    }

    .card-title-group {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .card-icon {
      font-size: 24px;
      width: 40px;
      height: 40px;
      background: var(--primary-bg);
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
    }

    .card-title {
      font-size: 16px;
      font-weight: 700;
      color: #111827;
    }

    .card-cat {
      font-size: 11px;
      color: var(--primary);
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .fav-btn {
      background: none;
      border: none;
      font-size: 20px;
      color: #cbd5e1;
      cursor: pointer;
      padding: 4px;
      line-height: 1;
    }

    .fav-btn.active {
      color: #ef4444;
    }

    .card-desc {
      font-size: 13px;
      color: var(--text-muted);
      line-height: 1.45;
      margin-bottom: 12px;
    }

    .herbs-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-bottom: 12px;
    }

    .herb-pill {
      background: #f3f4f6;
      color: #374151;
      padding: 3px 8px;
      border-radius: 6px;
      font-size: 11px;
      font-weight: 500;
    }

    .card-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid var(--border-light);
      padding-top: 10px;
      font-size: 12px;
    }

    .card-evidence {
      color: var(--accent);
      font-weight: 600;
    }

    .card-action {
      color: var(--primary);
      font-weight: 700;
      display: flex;
      align-items: center;
      gap: 4px;
    }

    /* Modal */
    .modal-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(4px);
      z-index: 1000;
      display: none;
      align-items: flex-end;
    }

    .modal-backdrop.open {
      display: flex;
    }

    .modal-container {
      background: #ffffff;
      width: 100%;
      max-height: 88vh;
      border-top-left-radius: 24px;
      border-top-right-radius: 24px;
      padding: 20px 20px calc(24px + var(--safe-bottom));
      overflow-y: auto;
      box-shadow: 0 -8px 30px rgba(0, 0, 0, 0.2);
      animation: slideUp 0.25s ease-out;
    }

    @keyframes slideUp {
      from { transform: translateY(100%); }
      to { transform: translateY(0); }
    }

    .modal-drag-bar {
      width: 40px;
      height: 4px;
      background: #e5e7eb;
      border-radius: 2px;
      margin: 0 auto 16px;
    }

    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 16px;
    }

    .modal-title-group {
      display: flex;
      gap: 12px;
      align-items: center;
    }

    .modal-icon {
      font-size: 32px;
      width: 52px;
      height: 52px;
      background: var(--primary-bg);
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .modal-title {
      font-size: 20px;
      font-weight: 700;
      color: #111827;
      line-height: 1.2;
    }

    .modal-category-tag {
      font-size: 11px;
      font-weight: 600;
      color: var(--primary);
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .modal-close-btn {
      background: #f3f4f6;
      border: none;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      font-size: 16px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #4b5563;
    }

    .modal-tabs {
      display: flex;
      border-bottom: 1px solid var(--border);
      margin-bottom: 16px;
      gap: 16px;
      overflow-x: auto;
    }

    .modal-tab-btn {
      background: none;
      border: none;
      padding: 8px 4px;
      font-size: 14px;
      font-weight: 600;
      color: var(--text-muted);
      cursor: pointer;
      position: relative;
      white-space: nowrap;
    }

    .modal-tab-btn.active {
      color: var(--primary);
    }

    .modal-tab-btn.active::after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0;
      right: 0;
      height: 2px;
      background: var(--primary);
      border-radius: 2px;
    }

    .modal-tab-content {
      display: none;
    }

    .modal-tab-content.active {
      display: block;
    }

    .item-card {
      background: #f9fafb;
      border: 1px solid var(--border-light);
      border-radius: 12px;
      padding: 12px;
      margin-bottom: 10px;
    }

    .item-header {
      font-size: 14px;
      font-weight: 700;
      color: #1f2937;
      margin-bottom: 4px;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .item-body {
      font-size: 13px;
      color: var(--text-muted);
      line-height: 1.45;
    }

    .item-prep {
      font-size: 12px;
      color: #1b4d3e;
      background: rgba(27, 77, 62, 0.08);
      padding: 6px 10px;
      border-radius: 8px;
      margin-top: 6px;
    }

    .item-safety {
      font-size: 11px;
      color: #b45309;
      background: #fef3c7;
      padding: 6px 10px;
      border-radius: 8px;
      margin-top: 6px;
    }

    .disclaimer-card {
      background: #fef2f2;
      border: 1px solid #fee2e2;
      border-radius: 12px;
      padding: 12px;
      margin-top: 18px;
      font-size: 11px;
      color: #991b1b;
      line-height: 1.4;
    }

    .empty-state {
      text-align: center;
      padding: 40px 20px;
      color: var(--text-muted);
    }

    .empty-state-icon {
      font-size: 40px;
      margin-bottom: 12px;
    }

    /* Modality Modal */
    .modality-modal-header {
      background: linear-gradient(135deg, #1b4d3e 0%, #2d6a4f 100%);
      color: #ffffff;
      padding: 20px;
      border-radius: 16px;
      margin-bottom: 16px;
    }

    .modality-modal-tagline {
      font-size: 12px;
      opacity: 0.9;
      margin-top: 4px;
    }

    footer {
      text-align: center;
      padding: 30px 16px 20px;
      font-size: 11px;
      color: #9ca3af;
      border-top: 1px solid var(--border-light);
      margin-top: 30px;
    }
  </style>
</head>
<body>

  <header>
    <div class="header-top">
      <div class="brand">
        <div class="brand-icon">🌿</div>
        <div>
          <div class="brand-title">Sattva</div>
          <div class="brand-subtitle">Ayurvedic & Natural Wellness Guide</div>
        </div>
      </div>
      <button class="server-status-btn" id="serverToggleBtn" onclick="toggleServerBanner()">
        <span class="status-dot" id="serverStatusDot"></span>
        <span id="serverStatusText">Online</span>
      </button>
    </div>

    <!-- Server connection manager -->
    <div class="server-banner" id="serverBanner">
      <div style="font-weight: 600; margin-bottom: 4px;">⚡ Dev Server Live Sync</div>
      <div>Running on Android Studio? Connect to the live dev server with full AI Wellness features:</div>
      <div class="server-input-row">
        <input type="text" id="serverUrlInput" value="http://10.0.2.2:3000" placeholder="http://10.0.2.2:3000" />
        <button onclick="connectLiveServer()">Connect</button>
      </div>
    </div>

    <div class="search-box">
      <span class="search-icon">🔍</span>
      <input type="text" id="searchInput" class="search-input" placeholder="Search 49 conditions, herbs, yoga..." oninput="filterConditions()" />
    </div>
  </header>

  <div class="container">
    <!-- Daily tip banner -->
    <div class="tip-card">
      <div class="tip-icon">✨</div>
      <div>
        <div class="tip-title">Ayurvedic Daily Wisdom</div>
        <div class="tip-desc">Begin your morning with warm water and a slice of lemon to gently awaken Agni (digestive fire) and support natural detoxification.</div>
      </div>
    </div>

    <!-- Modalities Explorer -->
    <div class="section-header">
      <div class="section-title">🌿 Healing Modalities</div>
      <div class="section-subtitle">16 Traditions</div>
    </div>
    <div class="modalities-scroll" id="modalitiesList"></div>

    <!-- Condition Categories -->
    <div class="section-header">
      <div class="section-title">📚 Condition Library</div>
      <div class="section-subtitle" id="conditionCount">49 Conditions</div>
    </div>

    <div class="categories-wrap" id="categoryPills">
      <button class="cat-btn active" onclick="selectCategory('All')">All</button>
      <button class="cat-btn" onclick="selectCategory('Digestive')">Digestive</button>
      <button class="cat-btn" onclick="selectCategory('Respiratory')">Respiratory</button>
      <button class="cat-btn" onclick="selectCategory('Lifestyle')">Metabolic</button>
      <button class="cat-btn" onclick="selectCategory('Pain')">Joints & Pain</button>
      <button class="cat-btn" onclick="selectCategory('Mental')">Mental Balance</button>
      <button class="cat-btn" onclick="selectCategory('Skin')">Skin & Hair</button>
      <button class="cat-btn" onclick="selectCategory('Women')">Women's Care</button>
      <button class="cat-btn" onclick="selectCategory('Men')">Men's Care</button>
      <button class="cat-btn" onclick="selectCategory('General')">General Vitality</button>
      <button class="cat-btn" onclick="selectCategory('Favorites')">❤️ Saved</button>
    </div>

    <!-- Conditions Grid -->
    <div class="conditions-grid" id="conditionsGrid"></div>
  </div>

  <!-- Detail Modal -->
  <div class="modal-backdrop" id="modalBackdrop" onclick="closeModalOnBackdrop(event)">
    <div class="modal-container" id="modalContainer">
      <div class="modal-drag-bar"></div>
      <div id="modalContent"></div>
    </div>
  </div>

  <footer>
    <p>Educational wellness information only. Not intended to diagnose, treat, or replace professional medical care.</p>
    <p style="margin-top: 4px;">Sattva Mobile • Powered by Capacitor & Android Studio</p>
  </footer>

  <script>
    const conditionsData = ${conditionsJson};
    const modalities = ${modalitiesJson};

    let activeCategory = 'All';
    let searchQuery = '';
    let favorites = JSON.parse(localStorage.getItem('sattva_favs') || '[]');

    function saveFavorites() {
      localStorage.setItem('sattva_favs', JSON.stringify(favorites));
    }

    function toggleFavorite(slug, event) {
      if (event) event.stopPropagation();
      const index = favorites.indexOf(slug);
      if (index === -1) {
        favorites.push(slug);
      } else {
        favorites.splice(index, 1);
      }
      saveFavorites();
      renderConditions();
      const modalFavBtn = document.getElementById('modalFavToggle');
      if (modalFavBtn) {
        modalFavBtn.innerHTML = favorites.includes(slug) ? '❤️ Saved' : '🤍 Save to Favorites';
      }
    }

    function toggleServerBanner() {
      const banner = document.getElementById('serverBanner');
      banner.classList.toggle('visible');
    }

    function connectLiveServer() {
      const url = document.getElementById('serverUrlInput').value.trim();
      if (url) {
        window.location.href = url;
      }
    }

    function renderModalities() {
      const container = document.getElementById('modalitiesList');
      container.innerHTML = modalities.map(m => \`
        <div class="modality-chip" onclick="openModalityModal('\${m.id}')">
          <span class="modality-chip-icon">\${m.icon}</span>
          <span class="modality-chip-name">\${m.name}</span>
        </div>
      \`).join('');
    }

    function openModalityModal(id) {
      const mod = modalities.find(m => m.id === id);
      if (!mod) return;

      const content = document.getElementById('modalContent');
      content.innerHTML = \`
        <div class="modal-header">
          <div>
            <div style="font-size: 28px;">\${mod.icon}</div>
            <div class="modal-title" style="margin-top: 6px;">\${mod.name}</div>
            <div style="font-size: 12px; color: var(--primary); font-weight: 600;">\${mod.tagline}</div>
          </div>
          <button class="modal-close-btn" onclick="closeModal()">✕</button>
        </div>

        <div style="font-size: 13px; color: var(--text-muted); line-height: 1.5; margin-bottom: 16px;">
          \${mod.overview}
        </div>

        <div class="item-card">
          <div class="item-header">📜 \${mod.traditionsTitle}</div>
          <div class="item-body">\${mod.traditionsDesc}</div>
        </div>

        <div class="item-card">
          <div class="item-header">💡 \${mod.innovationsTitle}</div>
          <div class="item-body">\${mod.innovationsDesc}</div>
        </div>

        <div class="item-card">
          <div class="item-header">🌿 Daily Wellness Practice</div>
          <div class="item-body">\${mod.relevanceDailyUse}</div>
        </div>

        <div class="disclaimer-card">
          ⚠️ <strong>Safety Note:</strong> \${mod.safetyNote}
        </div>
      \`;

      document.getElementById('modalBackdrop').classList.add('open');
    }

    function selectCategory(cat) {
      activeCategory = cat;
      document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.classList.toggle('active', btn.textContent.includes(cat) || (cat === 'Favorites' && btn.textContent.includes('Saved')));
      });
      renderConditions();
    }

    function filterConditions() {
      searchQuery = document.getElementById('searchInput').value.toLowerCase().trim();
      renderConditions();
    }

    function renderConditions() {
      const grid = document.getElementById('conditionsGrid');
      let filtered = conditionsData.filter(c => {
        const matchesCategory =
          activeCategory === 'All' ? true :
          activeCategory === 'Favorites' ? favorites.includes(c.slug) :
          c.category === activeCategory;

        const matchesSearch =
          !searchQuery ||
          c.name.toLowerCase().includes(searchQuery) ||
          c.summary.toLowerCase().includes(searchQuery) ||
          c.herbs.some(h => h.name.toLowerCase().includes(searchQuery)) ||
          c.practices.some(p => p.toLowerCase().includes(searchQuery));

        return matchesCategory && matchesSearch;
      });

      document.getElementById('conditionCount').textContent = \`\${filtered.length} Conditions\`;

      if (filtered.length === 0) {
        grid.innerHTML = \`
          <div class="empty-state">
            <div class="empty-state-icon">🌿</div>
            <div style="font-weight: 600;">No matching conditions found</div>
            <div style="font-size: 12px; margin-top: 4px;">Try searching for a different herb, symptom, or choose another category.</div>
          </div>
        \`;
        return;
      }

      grid.innerHTML = filtered.map(c => {
        const isFav = favorites.includes(c.slug);
        const herbPills = (c.herbs || []).slice(0, 3).map(h => \`<span class="herb-pill">🌿 \${h.name}</span>\`).join('');

        return \`
          <div class="condition-card" onclick="openConditionModal('\${c.slug}')">
            <div class="card-top">
              <div class="card-title-group">
                <div class="card-icon">\${c.icon || '🌿'}</div>
                <div>
                  <div class="card-cat">\${c.category}</div>
                  <div class="card-title">\${c.name}</div>
                </div>
              </div>
              <button class="fav-btn \${isFav ? 'active' : ''}" onclick="toggleFavorite('\${c.slug}', event)">
                \${isFav ? '❤️' : '🤍'}
              </button>
            </div>
            <div class="card-desc">\${c.summary}</div>
            \${herbPills ? \`<div class="herbs-tags">\${herbPills}</div>\` : ''}
            <div class="card-footer">
              <span class="card-evidence">Evidence: \${c.evidence}</span>
              <span class="card-action">View Care Guide →</span>
            </div>
          </div>
        \`;
      }).join('');
    }

    function openConditionModal(slug) {
      const c = conditionsData.find(item => item.slug === slug);
      if (!c) return;

      const isFav = favorites.includes(c.slug);
      const content = document.getElementById('modalContent');

      content.innerHTML = \`
        <div class="modal-header">
          <div class="modal-title-group">
            <div class="modal-icon">\${c.icon || '🌿'}</div>
            <div>
              <div class="modal-category-tag">\${c.category} Wellness</div>
              <div class="modal-title">\${c.name}</div>
            </div>
          </div>
          <button class="modal-close-btn" onclick="closeModal()">✕</button>
        </div>

        <div style="display: flex; gap: 8px; margin-bottom: 14px;">
          <button id="modalFavToggle" class="cat-btn \${isFav ? 'active' : ''}" onclick="toggleFavorite('\${c.slug}')" style="font-size: 12px; padding: 6px 12px;">
            \${isFav ? '❤️ Saved' : '🤍 Save to Favorites'}
          </button>
        </div>

        <!-- Dosha Perspective -->
        <div class="item-card" style="background: var(--primary-bg); border-color: rgba(27, 77, 62, 0.15);">
          <div class="item-header" style="color: var(--primary);">🪷 Ayurvedic & Dosha Perspective</div>
          <div class="item-body" style="color: #1e3a2f;">\${c.perspective}</div>
        </div>

        <!-- Action Items (Try Today) -->
        \${c.tryToday && c.tryToday.length ? \`
          <div class="item-card" style="background: #fffbeb; border-color: #fde68a;">
            <div class="item-header" style="color: #92400e;">⚡ Actionable Steps to Try Today</div>
            <ul style="padding-left: 18px; font-size: 12px; color: #78350f; line-height: 1.6;">
              \${c.tryToday.map(tip => \`<li>\${tip}</li>\`).join('')}
            </ul>
          </div>
        \` : ''}

        <!-- Tabs -->
        <div class="modal-tabs">
          <button class="modal-tab-btn active" onclick="switchModalTab('herbs', event)">🌿 Herbs</button>
          <button class="modal-tab-btn" onclick="switchModalTab('diet', event)">🍲 Diet</button>
          <button class="modal-tab-btn" onclick="switchModalTab('lifestyle', event)">🧘 Lifestyle</button>
          <button class="modal-tab-btn" onclick="switchModalTab('safety', event)">⚠️ Safety</button>
        </div>

        <!-- Tab 1: Herbs -->
        <div class="modal-tab-content active" id="tab-herbs">
          \${(c.herbs || []).map(h => \`
            <div class="item-card">
              <div class="item-header">🌱 \${h.name}</div>
              <div class="item-body">\${h.use}</div>
              <div class="item-prep"><strong>How to prepare:</strong> \${h.preparation}</div>
              <div class="item-safety"><strong>Caution:</strong> \${h.safety}</div>
            </div>
          \`).join('')}
          \${(c.herbalRemedyTips || []).length ? \`
            <div class="item-card">
              <div class="item-header">🍵 Traditional Preparation Tips</div>
              <ul style="padding-left: 18px; font-size: 12px; color: var(--text-muted); line-height: 1.6;">
                \${c.herbalRemedyTips.map(tip => \`<li>\${tip}</li>\`).join('')}
              </ul>
            </div>
          \` : ''}
        </div>

        <!-- Tab 2: Diet -->
        <div class="modal-tab-content" id="tab-diet">
          <div class="item-card">
            <div class="item-header" style="color: #166534;">✅ Nourishing Foods to Favor (Ahara)</div>
            <ul style="padding-left: 18px; font-size: 12px; color: var(--text-muted); line-height: 1.6;">
              \${(c.foods || []).map(f => \`<li>\${f}</li>\`).join('')}
            </ul>
          </div>
          <div class="item-card">
            <div class="item-header" style="color: #991b1b;">❌ Foods to Moderate or Limit</div>
            <ul style="padding-left: 18px; font-size: 12px; color: var(--text-muted); line-height: 1.6;">
              \${(c.limit || []).map(l => \`<li>\${l}</li>\`).join('')}
            </ul>
          </div>
        </div>

        <!-- Tab 3: Lifestyle & Practices -->
        <div class="modal-tab-content" id="tab-lifestyle">
          <div class="item-card">
            <div class="item-header">🧘 Daily Practices & Yoga (Dinacharya)</div>
            <ul style="padding-left: 18px; font-size: 12px; color: var(--text-muted); line-height: 1.6;">
              \${(c.practices || []).map(p => \`<li>\${p}</li>\`).join('')}
            </ul>
          </div>
          \${c.therapies && c.therapies.length ? \`
            <div class="item-card">
              <div class="item-header">🪷 Complementary Therapies</div>
              <ul style="padding-left: 18px; font-size: 12px; color: var(--text-muted); line-height: 1.6;">
                \${c.therapies.map(t => \`<li>\${t}</li>\`).join('')}
              </ul>
            </div>
          \` : ''}
        </div>

        <!-- Tab 4: Safety & Warnings -->
        <div class="modal-tab-content" id="tab-safety">
          <div class="item-card" style="border-left: 4px solid #f59e0b;">
            <div class="item-header">📋 Usage Safety Note</div>
            <div class="item-body">\${c.safety}</div>
          </div>
          \${c.warnings && c.warnings.length ? \`
            <div class="item-card" style="border-left: 4px solid #ef4444; background: #fff1f2;">
              <div class="item-header" style="color: #991b1b;">🚨 Seek Immediate Medical Care If:</div>
              <ul style="padding-left: 18px; font-size: 12px; color: #991b1b; line-height: 1.6;">
                \${c.warnings.map(w => \`<li>\${w}</li>\`).join('')}
              </ul>
            </div>
          \` : ''}
        </div>

        <div class="disclaimer-card">
          ⚠️ <strong>Medical Disclaimer:</strong> Natural and Ayurvedic suggestions are meant for lifestyle education and complementary support only. Never stop prescribed medications or substitute home remedies for professional clinical diagnosis.
        </div>
      \`;

      document.getElementById('modalBackdrop').classList.add('open');
    }

    function switchModalTab(tabName, event) {
      document.querySelectorAll('.modal-tab-btn').forEach(btn => btn.classList.remove('active'));
      document.querySelectorAll('.modal-tab-content').forEach(c => c.classList.remove('active'));
      event.target.classList.add('active');
      const target = document.getElementById('tab-' + tabName);
      if (target) target.classList.add('active');
    }

    function closeModal() {
      document.getElementById('modalBackdrop').classList.remove('open');
    }

    function closeModalOnBackdrop(event) {
      if (event.target === document.getElementById('modalBackdrop')) {
        closeModal();
      }
    }

    // Initialize
    renderModalities();
    renderConditions();
  </script>
</body>
</html>
`;

mkdirSync(dirname(targetPath), { recursive: true });
writeFileSync(targetPath, html, 'utf8');
console.log(`[build-mobile-web] Generated ${targetPath} with ${conditions.length} conditions and ${modalitiesData.length} modalities.`);

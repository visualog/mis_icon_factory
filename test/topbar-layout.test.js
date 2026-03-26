const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');

const indexHtml = fs.readFileSync(
    '/Users/im_018/Documents/GitHub/Project/IconFont/.worktrees/codex-webfont-library/font_factory/public/index.html',
    'utf8'
);

test('topbar no longer contains upload, search, or category controls', () => {
    const topbarHtml = indexHtml.match(/<header class="topbar">[\s\S]*?<\/header>/)?.[0] || '';
    assert.doesNotMatch(topbarHtml, /id="uploadButton"/);
    assert.doesNotMatch(topbarHtml, /id="searchInput"/);
    assert.doesNotMatch(topbarHtml, /id="categoryTrigger"/);
    assert.match(indexHtml, /\.topbar\s*\{[\s\S]*position:\s*absolute;[\s\S]*width:\s*1px;[\s\S]*height:\s*1px;[\s\S]*padding:\s*0;[\s\S]*overflow:\s*hidden;/s);
});

test('topbar category dropdown uses the shared dropdown component helper', () => {
    assert.match(indexHtml, /function createDropdownComponent\(\s*\{/);
    assert.match(indexHtml, /const categoryDropdownComponent = createDropdownComponent\(\s*\{/);
});

test('hero meta includes view toggle and sort controls', () => {
    assert.match(indexHtml, /viewMode:\s*'grid'/);
    assert.match(indexHtml, /sortMode:\s*'name'/);
    assert.match(indexHtml, /--bg-rgb:\s*246,\s*243,\s*238;/);
    assert.match(indexHtml, /\.library-hero\s*\{[\s\S]*position:\s*sticky;[\s\S]*top:\s*0;[\s\S]*z-index:\s*30;/s);
    assert.doesNotMatch(indexHtml, /\.library-hero::before\s*\{/s);
    assert.doesNotMatch(indexHtml, /\.library-hero-dim\s*\{/s);
    assert.doesNotMatch(indexHtml, /\.library-hero-dim-layer\s*\{/s);
    assert.doesNotMatch(indexHtml, /\.library-hero-dim-overlay\s*\{/s);
    assert.match(indexHtml, /\.library-hero-gradient\s*\{[\s\S]*left:\s*50%;[\s\S]*width:\s*100vw;[\s\S]*height:\s*60px;[\s\S]*transform:\s*translateX\(-50%\);/s);
    assert.match(indexHtml, /\.library-hero-gradient\s*\{[\s\S]*rgba\(var\(--bg-rgb\),\s*1\)\s*50%[\s\S]*rgba\(var\(--bg-rgb\),\s*0\.5\)\s*80%[\s\S]*rgba\(var\(--bg-rgb\),\s*0\)\s*100%/s);
    assert.match(indexHtml, /\.library-hero\.is-scrolled \.library-hero-gradient\s*\{[\s\S]*rgba\(var\(--bg-rgb\),\s*1\)\s*0%[\s\S]*rgba\(var\(--bg-rgb\),\s*0\.75\)\s*45%[\s\S]*rgba\(var\(--bg-rgb\),\s*0\.2\)\s*80%[\s\S]*rgba\(var\(--bg-rgb\),\s*0\)\s*100%/s);
    assert.match(indexHtml, /\.hero-meta\s*\{[\s\S]*position:\s*relative;[\s\S]*z-index:\s*1;/s);
    assert.match(indexHtml, /function syncLibraryHeroChrome\(\)\s*\{[\s\S]*libraryHero\.classList\.toggle\('is-scrolled',\s*contentScroll\.scrollTop > 8\);/s);
    assert.match(indexHtml, /contentScroll\?\.addEventListener\('scroll',\s*syncLibraryHeroChrome,\s*\{\s*passive:\s*true\s*\}\);/s);
    assert.match(
        indexHtml,
        /<section class="library-hero">[\s\S]*<div class="library-hero-gradient" aria-hidden="true"><\/div>[\s\S]*<div class="hero-meta">[\s\S]*<span id="lastBuiltAt" class="meta-pill success">[\s\S]*<\/span>[\s\S]*<div class="hero-meta-actions">[\s\S]*<button id="viewToggleButton"[\s\S]*data-tooltip="리스트 카드 형식으로 전환"[\s\S]*grid_view_sm_line[\s\S]*<\/button>[\s\S]*<div class="hero-sort dropdown dropdown--down">[\s\S]*<button id="sortTrigger" class="dropdown-trigger hero-sort-trigger"[\s\S]*<div id="sortMenu" class="dropdown-menu hero-sort-menu"[\s\S]*이름순[\s\S]*카테고리순[\s\S]*<\/div>[\s\S]*<\/div>[\s\S]*<\/div>/s
    );
    assert.doesNotMatch(indexHtml, /타입순/);
    assert.doesNotMatch(indexHtml, /id="viewToggleButton"[\s\S]*title="/s);
});

test('hero and dropdown controls use inset shadows for active emphasis instead of thicker borders', () => {
    assert.match(indexHtml, /\.dropdown\.open \.dropdown-trigger\s*\{[\s\S]*box-shadow:\s*inset 0 0 0 1px var\(--line-strong\),\s*0 14px 32px rgba\(48,\s*41,\s*29,\s*0\.08\);/s);
    assert.match(indexHtml, /\.dropdown-trigger:hover,\s*\.dropdown-trigger:focus-visible\s*\{[\s\S]*box-shadow:\s*inset 0 0 0 1px var\(--line-strong\),\s*0 14px 32px rgba\(48,\s*41,\s*29,\s*0\.08\);/s);
    assert.match(indexHtml, /\.hero-view-toggle:hover,\s*\.hero-view-toggle:focus-visible\s*\{[\s\S]*border-color:\s*var\(--line-strong\);[\s\S]*box-shadow:\s*inset 0 0 0 1px var\(--line-strong\),\s*0 14px 32px rgba\(48,\s*41,\s*29,\s*0\.08\);/s);
    assert.match(indexHtml, /\.hero-view-toggle::after\s*\{[\s\S]*content:\s*attr\(data-tooltip\);[\s\S]*top:\s*calc\(100% \+ 12px\);/s);
    assert.match(indexHtml, /\.hero-view-toggle:hover::after,\s*\.hero-view-toggle:focus-visible::after\s*\{[\s\S]*opacity:\s*1;/s);
    assert.doesNotMatch(indexHtml, /\.hero-view-toggle:hover\s*\{[\s\S]*translateY\(-1px\)/s);
});

test('active dropdown options use approve_line glyph instead of CSS checkmark', () => {
    assert.doesNotMatch(indexHtml, /\.dropdown-option\.active::after/);
    assert.match(indexHtml, /\.dropdown-option-check\s*\{[\s\S]*font-size:\s*20px;/s);
    assert.match(indexHtml, /selected \? '<i class="icon icon--approve_line dropdown-option-check" aria-hidden="true"><\/i>' : ''/);
});

test('render grid sorts visible icons before rendering', () => {
    assert.match(indexHtml, /function sortVisibleIcons\(\s*icons\s*\)\s*\{/);
    assert.match(indexHtml, /return \[\.\.\.icons\]\.sort\(\(left,\s*right\) => \{/);
    assert.match(indexHtml, /if \(state\.sortMode === 'name'\)/);
    assert.match(indexHtml, /if \(state\.sortMode === 'category'\)/);
    assert.doesNotMatch(indexHtml, /if \(state\.sortMode === 'kind'\)/);
    assert.match(indexHtml, /const visibleIcons = sortVisibleIcons\(getVisibleIcons\(\)\);/);
});

test('search combo owns the focus ring instead of nested field outlines', () => {
    assert.match(
        indexHtml,
        /\.search-combo:hover \.search-combo-shell,\s*\.search-combo:focus-within \.search-combo-shell\s*\{[\s\S]*box-shadow:\s*inset 0 0 0 1px var\(--line-strong\),\s*0 14px 32px rgba\(48,\s*41,\s*29,\s*0\.08\);/s
    );
    assert.match(indexHtml, /\.search-combo \.search-field:focus-visible[\s\S]*outline:\s*none;/s);
});

test('search field uses a custom close_sm_line clear button instead of the native search cancel control', () => {
    assert.match(
        indexHtml,
        /<div class="search-combo-shell">[\s\S]*<input id="searchInput" class="search-field" type="search" placeholder="아이콘 검색">[\s\S]*<button id="searchClearButton" class="search-clear-button" type="button" aria-label="검색어 지우기">[\s\S]*icon--close_sm_line[\s\S]*<\/button>[\s\S]*<\/div>/s
    );
    assert.match(indexHtml, /\.search-field::-webkit-search-cancel-button\s*\{[\s\S]*appearance:\s*none;/s);
    assert.match(indexHtml, /\.search-clear-button\s*\{[\s\S]*opacity:\s*0;[\s\S]*pointer-events:\s*none;/s);
    assert.match(indexHtml, /\.search-combo\.has-value \.search-clear-button\s*\{[\s\S]*opacity:\s*1;[\s\S]*pointer-events:\s*auto;/s);
    assert.match(indexHtml, /searchClearButton\.addEventListener\('click',\s*\(\)\s*=>\s*\{[\s\S]*state\.query = '';/s);
});

test('search field supports pasted glyph characters as well as text queries', () => {
    assert.match(indexHtml, /\.search-combo \.search-field\s*\{[\s\S]*font-family:\s*var\(--font-main\),\s*'MyIconFont';/s);
    assert.match(indexHtml, /\.search-combo \.search-field\s*\{[\s\S]*font-size:\s*14px;/s);
    assert.match(indexHtml, /\.search-combo \.search-field\s*\{[\s\S]*line-height:\s*1;/s);
    assert.match(indexHtml, /\.search-combo \.search-field::placeholder\s*\{[\s\S]*font-family:\s*var\(--font-main\);[\s\S]*font-size:\s*inherit;[\s\S]*font-weight:\s*inherit;[\s\S]*letter-spacing:\s*inherit;[\s\S]*line-height:\s*1;/s);
    assert.match(indexHtml, /const rawQuery = state\.query\.trim\(\);/);
    assert.match(indexHtml, /const query = rawQuery\.toLowerCase\(\);/);
    assert.match(indexHtml, /const categoryLabel = getCategoryLabel\(icon\.category\)\.toLowerCase\(\);/);
    assert.match(indexHtml, /const glyphCharacter = getGlyphCharacter\(icon\.key\);/);
    assert.match(indexHtml, /const matchesGlyph = rawQuery !== '' && glyphCharacter && glyphCharacter\.includes\(rawQuery\);/);
    assert.match(indexHtml, /const matchesQuery = rawQuery === '' \|\| \(icon\.searchText \|\| ''\)\.includes\(query\) \|\| icon\.displayName\.toLowerCase\(\)\.includes\(query\) \|\| categoryLabel\.includes\(query\) \|\| matchesGlyph;/);
});

test('visible control labels use medium weight', () => {
    assert.match(indexHtml, /\.dropdown-trigger\s*\{[\s\S]*font-weight:\s*500;/s);
    assert.match(indexHtml, /\.dropdown-option\s*\{[\s\S]*font-weight:\s*500;/s);
    assert.match(indexHtml, /\.hero-view-toggle\s*\{[\s\S]*font-weight:\s*500;/s);
});

import { useEffect, useRef, useState } from 'react';
import Dropdown from './Dropdown.jsx';
import UiIcon from './UiIcon.jsx';

export default function LibraryHero({
  heroScrolled,
  lastBuiltAt,
  formatTimestamp,
  viewMode,
  onToggleViewMode,
  hasGeneratedFontStyles,
  sortMode,
  sortOptions,
  onChangeSortMode,
  onDownloadLineFonts,
  summary
}) {
  const [downloadMenuOpen, setDownloadMenuOpen] = useState(false);
  const downloadMenuRef = useRef(null);
  const viewTooltip = viewMode === 'grid' ? '리스트 카드 형식으로 전환' : '그리드 카드 형식으로 전환';
  const viewIconClass = viewMode === 'grid'
    ? 'icon icon--grid_view_sm_line hero-view-icon'
    : 'icon icon--card_list_view_line hero-view-icon';
  const downloadTriggerIconClass = downloadMenuOpen
    ? 'icon icon--chevron_up_line detail-action-trigger-icon'
    : 'icon icon--chevron_down_line detail-action-trigger-icon';

  useEffect(() => {
    function handlePointerDown(event) {
      if (!downloadMenuRef.current?.contains(event.target)) {
        setDownloadMenuOpen(false);
      }
    }

    if (!downloadMenuOpen) {
      return undefined;
    }

    document.addEventListener('mousedown', handlePointerDown);
    return () => document.removeEventListener('mousedown', handlePointerDown);
  }, [downloadMenuOpen]);

  return (
    <section className={`library-hero ${heroScrolled ? 'is-scrolled' : ''}`}>
      <div className="library-hero-gradient" aria-hidden="true" />
      <div className="hero-meta">
        <span className={`meta-pill ${lastBuiltAt ? 'success' : ''}`}>
          {lastBuiltAt ? formatTimestamp(lastBuiltAt) : '빌드 대기'}
        </span>
        <div className="hero-meta-actions">
          <div className={`detail-action-dropdown hero-download-dropdown ${downloadMenuOpen ? 'open' : ''}`} ref={downloadMenuRef}>
            <button
              type="button"
              className="detail-action-trigger hero-download-trigger"
              aria-haspopup="menu"
              aria-expanded={downloadMenuOpen}
              onClick={() => setDownloadMenuOpen((current) => !current)}
            >
              <span>Line Font 다운로드</span>
              <UiIcon
                glyphClassName={downloadTriggerIconClass}
                fallbackClassName="detail-action-trigger-icon"
                hasGeneratedFontStyles={hasGeneratedFontStyles}
                aria-hidden="true"
                alt=""
                style={{ width: '18px', height: '18px' }}
              />
            </button>
            <div className="detail-action-menu hero-download-menu" role="menu">
              <button
                type="button"
                className="detail-action-item"
                role="menuitem"
                onClick={() => {
                  setDownloadMenuOpen(false);
                  onDownloadLineFonts?.('woff2');
                }}
              >
                WOFF2 다운로드
              </button>
              <button
                type="button"
                className="detail-action-item"
                role="menuitem"
                onClick={() => {
                  setDownloadMenuOpen(false);
                  onDownloadLineFonts?.('ttf');
                }}
              >
                TTF 다운로드
              </button>
            </div>
          </div>
          <button
            type="button"
            className="hero-view-toggle"
            aria-pressed={viewMode === 'list'}
            aria-label="카드 표시 형식 전환"
            data-tooltip={viewTooltip}
            onClick={onToggleViewMode}
          >
            <UiIcon
              glyphClassName={viewIconClass}
              fallbackClassName="hero-view-icon"
              hasGeneratedFontStyles={hasGeneratedFontStyles}
              aria-hidden="true"
              alt=""
              style={{ width: '18px', height: '18px' }}
            />
            <span>{viewMode === 'grid' ? 'Grid' : 'List'}</span>
          </button>
          <div className="hero-sort-wrap">
            <Dropdown
              value={sortMode}
              options={sortOptions}
              getValue={(option) => option.key}
              getLabel={(option) => option.label}
              onChange={onChangeSortMode}
              hasGeneratedFontStyles={hasGeneratedFontStyles}
              className="hero-sort"
              triggerClassName="hero-sort-trigger"
              align="down"
              menuAlign="right"
            />
          </div>
          <div className="hero-summary-pill hidden" aria-hidden="true">{summary}</div>
        </div>
      </div>
    </section>
  );
}

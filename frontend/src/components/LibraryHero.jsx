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
  summary
}) {
  const viewTooltip = viewMode === 'grid' ? '리스트 카드 형식으로 전환' : '그리드 카드 형식으로 전환';
  const viewIconClass = viewMode === 'grid'
    ? 'icon icon--grid_view_sm_line hero-view-icon'
    : 'icon icon--card_list_view_line hero-view-icon';

  return (
    <section className={`library-hero ${heroScrolled ? 'is-scrolled' : ''}`}>
      <div className="library-hero-gradient" aria-hidden="true" />
      <div className="hero-meta">
        <span className={`meta-pill ${lastBuiltAt ? 'success' : ''}`}>
          {lastBuiltAt ? formatTimestamp(lastBuiltAt) : '빌드 대기'}
        </span>
        <div className="hero-meta-actions">
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

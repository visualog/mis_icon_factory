export default function IconCard({
  icon,
  viewMode,
  selected,
  previewSize,
  previewColor,
  previewWeightValue,
  getCategoryLabel,
  setSelectedIcon,
  setOpenListMenuKey,
  openListMenuKey,
  handleListAction
}) {
  return (
    <article
      className={`icon-card ${viewMode === 'list' ? 'list-card' : 'grid-card'} ${selected ? 'detail-active' : ''}`}
      onClick={() => setSelectedIcon(icon)}
    >
      <div className="icon-card-surface">
        {viewMode === 'grid' ? (
          <div className="card-top">
            <span className={`kind-pill ${icon.kind}`}>{icon.kind}</span>
            <span className="card-subtitle">{getCategoryLabel(icon.category)}</span>
          </div>
        ) : null}

        <div className={viewMode === 'list' ? 'list-card-preview card-preview-stage' : 'card-icon-wrap card-preview-stage'}>
          <i
            className={`icon library-icon ${icon.className}`}
            aria-hidden="true"
            style={{
              fontSize: viewMode === 'list' ? '36px' : previewSize,
              color: previewColor,
              fontWeight: previewWeightValue
            }}
          />
        </div>

        <div className={viewMode === 'list' ? 'list-card-main' : 'card-label'}>
          <strong className="icon-card-title">{icon.displayName}</strong>
          {viewMode === 'list' ? (
            <div className="list-card-search-terms">
              {[icon.category, ...icon.keywords.slice(0, 2), ...icon.synonyms.slice(0, 1)].filter(Boolean).join(' · ')}
            </div>
          ) : null}
        </div>

        {viewMode === 'list' ? (
          <div className="list-card-actions" aria-label={`${icon.displayName} 액션`}>
            <div className="list-card-meta">
              <span className="list-card-meta-chip">{getCategoryLabel(icon.category)}</span>
              <span className="list-card-meta-chip">{icon.kind}</span>
            </div>
            <div
              className={`list-action-group ${openListMenuKey === icon.key ? 'open' : ''}`}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="list-action-main glyph-copy-button"
                onClick={(event) => {
                  event.stopPropagation();
                  setOpenListMenuKey((current) => (current === icon.key ? null : icon.key));
                }}
              >
                <span>복사하기</span>
                <span className="list-action-main-chevron">˅</span>
              </button>
              <div className="list-action-menu">
                <button type="button" className="list-action-item" onClick={(event) => handleListAction(event, 'copy-glyph', icon)}>글리프 키 복사</button>
                <button type="button" className="list-action-item" onClick={(event) => handleListAction(event, 'copy-class', icon)}>클래스 복사</button>
                <button type="button" className="list-action-item" onClick={(event) => handleListAction(event, 'copy-name', icon)}>아이콘 이름 복사</button>
                <button type="button" className="list-action-item" onClick={(event) => handleListAction(event, 'copy-svg', icon)}>SVG 복사</button>
                <button type="button" className="list-action-item" onClick={(event) => handleListAction(event, 'download-png', icon)}>PNG 다운로드</button>
              </div>
              <button
                type="button"
                className="list-copy-button svg-download-button"
                onClick={(event) => handleListAction(event, 'download-svg', icon)}
              >
                SVG 다운로드
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </article>
  );
}

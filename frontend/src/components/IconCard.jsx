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
  handleListAction,
  copyText,
  showToast
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

        {viewMode === 'grid' ? (
          <div className="card-devtools">
            <div className="card-devtools-key">{icon.key}</div>
            <button
              type="button"
              className="card-copy-button"
              onClick={async (event) => {
                event.stopPropagation();
                try {
                  await copyText(icon.className);
                  showToast('클래스를 복사했습니다.');
                } catch (error) {
                  showToast(error.message || '복사하지 못했습니다.', 'error');
                }
              }}
            >
              Copy
            </button>
          </div>
        ) : null}
      </div>
    </article>
  );
}

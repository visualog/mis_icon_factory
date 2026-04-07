import { useEffect, useRef, useState } from 'react';

export default function IconDetailSheet({
  selectedIcon,
  onClose,
  getCategoryLabel,
  getKindLabel,
  detailKeylineVisible,
  onToggleKeyline,
  detailPreviewSizes,
  previewColor,
  previewWeightValue,
  getSourceIconUrl,
  copyText,
  copySvgSource,
  downloadSvgSource,
  downloadPng,
  showToast,
  detailEditing,
  setDetailEditing,
  detailDirty,
  detailSaving,
  detailSaveError,
  saveDetailDraft,
  setDetailSaveError,
  setDetailTokenInputs,
  setDetailDraft,
  detailDraft,
  libraryCategories,
  removeDetailToken,
  detailTokenInputs,
  commitDetailToken
}) {
  const [openActionMenu, setOpenActionMenu] = useState(null);
  const actionMenusRef = useRef(null);

  useEffect(() => {
    function handlePointerDown(event) {
      if (!actionMenusRef.current?.contains(event.target)) {
        setOpenActionMenu(null);
      }
    }

    document.addEventListener('mousedown', handlePointerDown);
    return () => document.removeEventListener('mousedown', handlePointerDown);
  }, []);

  useEffect(() => {
    setOpenActionMenu(null);
  }, [selectedIcon]);

  if (!selectedIcon) {
    return null;
  }

  return (
    <>
      <div
        className="icon-detail-sheet-backdrop is-open"
        onClick={onClose}
      />
      <section className="icon-detail-sheet is-open" role="dialog" aria-modal="true" aria-labelledby="iconDetailTitle">
        <div className="icon-detail-sheet-shell">
          <div className="icon-detail-sheet-header">
            <div className="icon-detail-title-block">
              <h2 id="iconDetailTitle" className="icon-detail-title">{selectedIcon.displayName}</h2>
              <p className="icon-detail-subtitle">{`${getCategoryLabel(selectedIcon.category)} · ${getKindLabel(selectedIcon.kind)}`}</p>
            </div>
            <button className="icon-detail-close" type="button" onClick={onClose}>
              <i className="icon icon--close_sm_line" aria-hidden="true" />
            </button>
          </div>

          <div className="icon-detail-sheet-body icon-detail-sheet-body--phase2">
            <div className="icon-detail-source-panel">
              <div className="icon-detail-panel-heading">
                <span className="icon-detail-panel-title">Preview</span>
              </div>
              <div className={`icon-detail-source-stage ${detailKeylineVisible ? 'keyline-visible' : ''}`}>
                <button
                  type="button"
                  className="icon-detail-keyline-toggle"
                  aria-pressed={detailKeylineVisible}
                  aria-label="키라인 보기"
                  onClick={onToggleKeyline}
                >
                  <i className="icon icon--preview_line" aria-hidden="true" />
                </button>
                <div className="icon-detail-frame-guide" aria-hidden="true" />
                <div className="icon-detail-circle-guide" aria-hidden="true" />
                <div className="icon-detail-safe-area" aria-hidden="true" />
                <div className="icon-detail-source-asset-frame">
                  <img className="icon-detail-source-image" alt="" src={getSourceIconUrl(selectedIcon)} />
                </div>
              </div>
              <div className="icon-detail-source-preview-block">
                <div className="icon-detail-size-previews">
                  {detailPreviewSizes.map((size) => (
                    <div className="icon-detail-size-card" key={size}>
                      <i className={`${selectedIcon.className} icon-detail-size-icon`} aria-hidden="true" style={{ fontSize: `${size}px`, color: previewColor, fontWeight: previewWeightValue }} />
                      <span className="icon-detail-size-label">{size}px</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="icon-detail-webfont-panel">
              <div className="icon-detail-panel-heading">
                <span className="icon-detail-panel-title">Webfont Detail</span>
              </div>
              <div className="icon-detail-info-grid">
                <div className="icon-detail-info-card">
                  <span className="icon-detail-info-label">Glyph Key</span>
                  <div className="icon-detail-info-value">{selectedIcon.key}</div>
                </div>
                <div className="icon-detail-info-card">
                  <span className="icon-detail-info-label">Class Key</span>
                  <div className="icon-detail-info-value">{selectedIcon.className}</div>
                </div>
                <div className="icon-detail-info-card">
                  <span className="icon-detail-info-label">카테고리</span>
                  <div className="icon-detail-info-value">{getCategoryLabel(selectedIcon.category)}</div>
                </div>
                <div className="icon-detail-info-card">
                  <span className="icon-detail-info-label">타입</span>
                  <div className="icon-detail-info-value">{getKindLabel(selectedIcon.kind)}</div>
                </div>
              </div>

              <div className="icon-detail-actions" ref={actionMenusRef}>
                <div className={`detail-action-dropdown detail-copy-dropdown ${openActionMenu === 'copy' ? 'open' : ''}`}>
                  <button
                    type="button"
                    className="detail-action-trigger"
                    onClick={() => setOpenActionMenu((current) => current === 'copy' ? null : 'copy')}
                  >
                    <span>복사</span>
                    <i className={`icon ${openActionMenu === 'copy' ? 'icon--chevron_up_line' : 'icon--chevron_down_line'} detail-action-trigger-icon`} aria-hidden="true" />
                  </button>
                  <div className="detail-action-menu">
                    <button type="button" className="detail-action-item" onClick={async () => { try { await copyText(selectedIcon.key); showToast('글리프 키를 복사했습니다.'); setOpenActionMenu(null); } catch (error) { showToast(error.message || '복사하지 못했습니다.', 'error'); } }}>글리프 키 복사</button>
                    <button type="button" className="detail-action-item" onClick={async () => { try { await copyText(selectedIcon.className); showToast('클래스를 복사했습니다.'); setOpenActionMenu(null); } catch (error) { showToast(error.message || '복사하지 못했습니다.', 'error'); } }}>클래스 복사</button>
                    <button type="button" className="detail-action-item" onClick={async () => { try { await copySvgSource(selectedIcon); showToast('SVG를 복사했습니다.'); setOpenActionMenu(null); } catch (error) { showToast(error.message || '복사하지 못했습니다.', 'error'); } }}>SVG 복사</button>
                    <button type="button" className="detail-action-item" onClick={async () => { try { await copyText(selectedIcon.displayName); showToast('이름을 복사했습니다.'); setOpenActionMenu(null); } catch (error) { showToast(error.message || '복사하지 못했습니다.', 'error'); } }}>이름 복사</button>
                  </div>
                </div>
                <div className={`detail-action-dropdown detail-download-dropdown ${openActionMenu === 'download' ? 'open' : ''}`}>
                  <button
                    type="button"
                    className="detail-action-trigger"
                    onClick={() => setOpenActionMenu((current) => current === 'download' ? null : 'download')}
                  >
                    <span>다운로드</span>
                    <i className={`icon ${openActionMenu === 'download' ? 'icon--chevron_up_line' : 'icon--chevron_down_line'} detail-action-trigger-icon`} aria-hidden="true" />
                  </button>
                  <div className="detail-action-menu">
                    <button type="button" className="detail-action-item" onClick={async () => { try { await downloadSvgSource(selectedIcon); showToast('SVG를 다운로드했습니다.'); setOpenActionMenu(null); } catch (error) { showToast(error.message || '다운로드하지 못했습니다.', 'error'); } }}>SVG 다운로드</button>
                    <button type="button" className="detail-action-item" onClick={async () => { try { await downloadPng(selectedIcon); showToast('PNG를 다운로드했습니다.'); setOpenActionMenu(null); } catch (error) { showToast(error.message || '다운로드하지 못했습니다.', 'error'); } }}>PNG 다운로드</button>
                  </div>
                </div>
              </div>

              <div className="icon-detail-metadata-stack">
                <div className="icon-detail-panel-heading icon-detail-metadata-header">
                  <span className="icon-detail-panel-title">Metadata</span>
                  <div className="icon-detail-metadata-actions">
                    {detailEditing ? (
                      <>
                        <button type="button" className="icon-detail-edit-button" onClick={() => {
                          setDetailEditing(false);
                          setDetailSaveError('');
                          setDetailTokenInputs({ keywords: '', synonyms: '' });
                          setDetailDraft({
                            displayName: selectedIcon.displayName || '',
                            category: selectedIcon.category || 'misc',
                            keywords: [...(selectedIcon.keywords || [])],
                            synonyms: [...(selectedIcon.synonyms || [])]
                          });
                        }}>취소</button>
                        {detailDirty ? <span className="icon-detail-unsaved-badge">Unsaved</span> : null}
                        <button type="button" className="icon-detail-edit-button" onClick={saveDetailDraft} disabled={detailSaving}>
                          {detailSaving ? '저장 중' : '저장'}
                        </button>
                      </>
                    ) : (
                      <button type="button" className="icon-detail-edit-button" onClick={() => {
                        setDetailSaveError('');
                        setDetailEditing(true);
                      }}>편집</button>
                    )}
                  </div>
                </div>
                {detailSaveError ? <div className="icon-detail-save-error">{detailSaveError}</div> : null}
                <div className="icon-detail-metadata">
                  <div className="icon-detail-metadata-row">
                    <span className="icon-detail-info-label">displayName</span>
                    {detailEditing ? (
                      <div className="icon-detail-edit-fields">
                        <input
                          className="icon-detail-text-input"
                          type="text"
                          value={detailDraft?.displayName || ''}
                          onChange={(event) => setDetailDraft((current) => ({ ...current, displayName: event.target.value }))}
                        />
                      </div>
                    ) : (
                      <div className="icon-detail-info-value icon-detail-read-value">{selectedIcon.displayName}</div>
                    )}
                  </div>
                  <div className="icon-detail-metadata-row">
                    <span className="icon-detail-info-label">category</span>
                    {detailEditing ? (
                      <div className="icon-detail-edit-fields">
                        <select
                          className="icon-detail-select-input"
                          value={detailDraft?.category || 'misc'}
                          onChange={(event) => setDetailDraft((current) => ({ ...current, category: event.target.value }))}
                        >
                          {libraryCategories.filter((categoryKey) => categoryKey !== 'all').map((categoryKey) => (
                            <option key={categoryKey} value={categoryKey}>{getCategoryLabel(categoryKey)}</option>
                          ))}
                        </select>
                      </div>
                    ) : (
                      <div className="icon-detail-info-value icon-detail-read-value">{getCategoryLabel(selectedIcon.category)}</div>
                    )}
                  </div>
                  <div className="icon-detail-metadata-row">
                    <span className="icon-detail-info-label">keywords</span>
                    {detailEditing ? (
                      <div className="icon-detail-edit-fields">
                        <div className="icon-detail-token-editor">
                          <div className="icon-detail-token-list">
                            {(detailDraft?.keywords || []).map((keyword, index) => (
                              <span className="icon-detail-token" key={`${keyword}-${index}`}>
                                <span>{keyword}</span>
                                <button
                                  type="button"
                                  className="icon-detail-token-remove"
                                  aria-label={`${keyword} 제거`}
                                  onClick={() => removeDetailToken('keywords', index)}
                                >
                                  ×
                                </button>
                              </span>
                            ))}
                          </div>
                          <input
                            className="icon-detail-token-input"
                            type="text"
                            placeholder="키워드 추가 후 Enter"
                            value={detailTokenInputs.keywords}
                            onChange={(event) => setDetailTokenInputs((current) => ({ ...current, keywords: event.target.value }))}
                            onBlur={() => commitDetailToken('keywords')}
                            onKeyDown={(event) => {
                              if (event.key === 'Enter' || event.key === ',') {
                                event.preventDefault();
                                commitDetailToken('keywords');
                              }
                            }}
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="icon-detail-token-list icon-detail-read-value">
                        {(selectedIcon.keywords || []).map((keyword) => (
                          <span className="icon-detail-token" key={keyword}>{keyword}</span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="icon-detail-metadata-row">
                    <span className="icon-detail-info-label">synonyms</span>
                    {detailEditing ? (
                      <div className="icon-detail-edit-fields">
                        <div className="icon-detail-token-editor">
                          <div className="icon-detail-token-list">
                            {(detailDraft?.synonyms || []).map((synonym, index) => (
                              <span className="icon-detail-token" key={`${synonym}-${index}`}>
                                <span>{synonym}</span>
                                <button
                                  type="button"
                                  className="icon-detail-token-remove"
                                  aria-label={`${synonym} 제거`}
                                  onClick={() => removeDetailToken('synonyms', index)}
                                >
                                  ×
                                </button>
                              </span>
                            ))}
                          </div>
                          <input
                            className="icon-detail-token-input"
                            type="text"
                            placeholder="동의어 추가 후 Enter"
                            value={detailTokenInputs.synonyms}
                            onChange={(event) => setDetailTokenInputs((current) => ({ ...current, synonyms: event.target.value }))}
                            onBlur={() => commitDetailToken('synonyms')}
                            onKeyDown={(event) => {
                              if (event.key === 'Enter' || event.key === ',') {
                                event.preventDefault();
                                commitDetailToken('synonyms');
                              }
                            }}
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="icon-detail-token-list icon-detail-read-value">
                        {(selectedIcon.synonyms || []).map((synonym) => (
                          <span className="icon-detail-token" key={synonym}>{synonym}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

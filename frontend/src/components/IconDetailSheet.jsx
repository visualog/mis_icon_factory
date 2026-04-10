import { useEffect, useRef, useState } from 'react';
import UiIcon from './UiIcon.jsx';

export default function IconDetailSheet({
  selectedIcon,
  onClose,
  getCategoryLabel,
  hasGeneratedFontStyles,
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
  const [inlineSvgMarkup, setInlineSvgMarkup] = useState('');
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

  useEffect(() => {
    let cancelled = false;

    async function loadInlineSvg() {
      if (!selectedIcon) {
        setInlineSvgMarkup('');
        return;
      }

      try {
        const response = await fetch(getSourceIconUrl(selectedIcon), { cache: 'no-store' });
        if (!response.ok) {
          throw new Error('원본 SVG를 불러오지 못했습니다.');
        }

        const source = await response.text();
        if (cancelled) {
          return;
        }

        const parser = new DOMParser();
        const documentNode = parser.parseFromString(source, 'image/svg+xml');
        const svg = documentNode.querySelector('svg');

        if (!svg) {
          setInlineSvgMarkup('');
          return;
        }

        svg.classList.add('icon-detail-source-svg');
        svg.setAttribute('aria-hidden', 'true');
        svg.setAttribute('focusable', 'false');

        svg
          .querySelectorAll('path, circle, rect, line, polyline, polygon, ellipse')
          .forEach((node) => node.classList.add('icon-detail-source-vector-node'));

        setInlineSvgMarkup(svg.outerHTML);
      } catch (_error) {
        if (!cancelled) {
          setInlineSvgMarkup('');
        }
      }
    }

    loadInlineSvg();

    return () => {
      cancelled = true;
    };
  }, [getSourceIconUrl, selectedIcon]);

  if (!selectedIcon) {
    return null;
  }

  const mergedSearchTerms = Array.from(new Set([
    ...(selectedIcon.keywords || []),
    ...(selectedIcon.synonyms || [])
  ].filter(Boolean)));
  const createdVersionLabel = selectedIcon.createdVersion || '미정';
  const lastChangedVersionLabel = selectedIcon.lastChangedVersion || '미정';

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
            </div>
            <div className="icon-detail-header-actions">
              {detailEditing ? (
                <>
                  <button type="button" className="icon-detail-edit-button" onClick={() => {
                    setDetailEditing(false);
                    setDetailSaveError('');
                    setDetailTokenInputs({ keywords: '', synonyms: '' });
                    setDetailDraft({
                      displayName: selectedIcon.displayName || '',
                      category: selectedIcon.category || 'misc',
                      keywords: mergedSearchTerms,
                      synonyms: []
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
            <button className="icon-detail-close" type="button" onClick={onClose}>
              <UiIcon
                glyphClassName="icon icon--close_sm_line"
                fallbackClassName="icon-detail-close-icon"
                hasGeneratedFontStyles={hasGeneratedFontStyles}
                aria-hidden="true"
                alt=""
                style={{ width: '20px', height: '20px' }}
              />
            </button>
          </div>

          <div className="icon-detail-sheet-body icon-detail-sheet-body--phase2">
            <div className="icon-detail-source-panel">
              <div className="icon-detail-source-stage">
                {inlineSvgMarkup ? (
                  <div
                    className="icon-detail-source-image icon-detail-source-inline-svg"
                    dangerouslySetInnerHTML={{ __html: inlineSvgMarkup }}
                  />
                ) : null}
              </div>
            </div>

            <div className="icon-detail-webfont-panel">
              <div className="icon-detail-metadata-stack">
                {detailSaveError ? <div className="icon-detail-save-error">{detailSaveError}</div> : null}
                <div className="icon-detail-metadata">
                  <div className="icon-detail-metadata-groups">
                    <div className="icon-detail-metadata-group">
                      <div className="icon-detail-metadata-row">
                        <span className="icon-detail-info-label">표시 이름</span>
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
                        <span className="icon-detail-info-label">카테고리</span>
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
                    </div>
                    <div className="icon-detail-metadata-group icon-detail-metadata-group--versions" aria-label="아이콘 버전 정보">
                      <div className="icon-detail-metadata-row">
                        <span className="icon-detail-info-label">생성 버전</span>
                        <div className="icon-detail-info-value icon-detail-read-value icon-detail-version-value">{createdVersionLabel}</div>
                      </div>
                      <div className="icon-detail-metadata-row">
                        <span className="icon-detail-info-label">최근 변경</span>
                        <div className="icon-detail-info-value icon-detail-read-value icon-detail-version-value">{lastChangedVersionLabel}</div>
                      </div>
                    </div>
                  </div>
                  <div className="icon-detail-metadata-row">
                    <span className="icon-detail-info-label">검색어</span>
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
                        {mergedSearchTerms.map((keyword) => (
                          <span className="icon-detail-token" key={keyword}>{keyword}</span>
                        ))}
                      </div>
                    )}
                  </div>
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
                    <UiIcon
                      glyphClassName={`icon ${openActionMenu === 'copy' ? 'icon--chevron_up_line' : 'icon--chevron_down_line'} detail-action-trigger-icon`}
                      fallbackClassName="detail-action-trigger-icon"
                      hasGeneratedFontStyles={hasGeneratedFontStyles}
                      aria-hidden="true"
                      alt=""
                      style={{ width: '18px', height: '18px' }}
                    />
                  </button>
                  <div className="detail-action-menu">
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
                    <UiIcon
                      glyphClassName={`icon ${openActionMenu === 'download' ? 'icon--chevron_up_line' : 'icon--chevron_down_line'} detail-action-trigger-icon`}
                      fallbackClassName="detail-action-trigger-icon"
                      hasGeneratedFontStyles={hasGeneratedFontStyles}
                      aria-hidden="true"
                      alt=""
                      style={{ width: '18px', height: '18px' }}
                    />
                  </button>
                  <div className="detail-action-menu">
                    <button type="button" className="detail-action-item" onClick={async () => { try { await downloadSvgSource(selectedIcon); showToast('SVG를 다운로드했습니다.'); setOpenActionMenu(null); } catch (error) { showToast(error.message || '다운로드하지 못했습니다.', 'error'); } }}>SVG 다운로드</button>
                    <button type="button" className="detail-action-item" onClick={async () => { try { await downloadPng(selectedIcon); showToast('PNG를 다운로드했습니다.'); setOpenActionMenu(null); } catch (error) { showToast(error.message || '다운로드하지 못했습니다.', 'error'); } }}>PNG 다운로드</button>
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

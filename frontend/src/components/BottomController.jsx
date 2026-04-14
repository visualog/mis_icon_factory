import Dropdown from './Dropdown.jsx';
import UiIcon from './UiIcon.jsx';

export default function BottomController({
  category,
  categoryOptions,
  getCategoryLabel,
  onChangeCategory,
  kind,
  kindOptions,
  getKindLabel,
  onChangeKind,
  query,
  onChangeQuery,
  weight,
  weightOptions,
  onChangeWeight,
  previewSize,
  sizeOptions,
  onChangePreviewSize,
  palette,
  paletteOptions,
  paletteSwatches,
  hasGeneratedFontStyles,
  onChangePalette,
  uploading,
  uploadInputRef,
  onOpenUpload,
  onUploadChange
}) {
  return (
    <>
      <div className="bottom-controller-dim" aria-hidden="true">
        <span className="bottom-controller-dim-layer layer-1" />
        <span className="bottom-controller-dim-layer layer-2" />
        <span className="bottom-controller-dim-layer layer-3" />
        <span className="bottom-controller-dim-layer layer-4" />
        <span className="bottom-controller-dim-layer layer-5" />
        <span className="bottom-controller-dim-overlay" />
      </div>

      <aside className="bottom-controller" aria-label="웹폰트 미리보기 컨트롤러">
        <div className="controller-group">
          <Dropdown
            value={category}
            options={categoryOptions}
            getValue={(option) => option.key}
            getLabel={(option) => `${getCategoryLabel(option.key)} (${option.count})`}
            onChange={onChangeCategory}
            hasGeneratedFontStyles={hasGeneratedFontStyles}
            className="category-dropdown"
            triggerClassName="category-trigger"
            menuClassName="category-menu"
          />
        </div>

        <div className="controller-group">
          <Dropdown
            value={kind}
            options={kindOptions}
            getValue={(option) => option.key}
            getLabel={(option) => option.key === 'all' ? getKindLabel(option.key) : `${getKindLabel(option.key)} (${option.count})`}
            onChange={onChangeKind}
            hasGeneratedFontStyles={hasGeneratedFontStyles}
            className="kind-dropdown"
            triggerClassName="kind-trigger"
            menuClassName="kind-menu"
          />
        </div>

        <div className="controller-group controller-search-group">
          <div className={`search-combo controller-search ${query ? 'has-value' : ''}`}>
            <div className="search-combo-shell">
              <input
                className="search-field"
                type="search"
                placeholder="아이콘 검색"
                value={query}
                onChange={(event) => onChangeQuery(event.target.value)}
              />
              <button
                type="button"
                className="search-clear-button"
                aria-label="검색어 지우기"
                onClick={() => onChangeQuery('')}
              >
                <UiIcon
                  glyphClassName="icon icon--close_sm_line"
                  fallbackClassName="search-clear-icon"
                  hasGeneratedFontStyles={hasGeneratedFontStyles}
                  aria-hidden="true"
                  alt=""
                  style={{ width: '16px', height: '16px' }}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="controller-group">
          <Dropdown
            value={weight}
            options={weightOptions}
            getValue={(option) => option.key}
            getLabel={(option) => option.label}
            onChange={onChangeWeight}
            hasGeneratedFontStyles={hasGeneratedFontStyles}
            className="weight-dropdown"
            triggerClassName="weight-trigger"
            menuClassName="weight-menu"
          />
        </div>

        <div className="controller-group">
          <Dropdown
            value={previewSize}
            options={sizeOptions}
            getValue={(option) => option}
            getLabel={(option) => option}
            onChange={onChangePreviewSize}
            hasGeneratedFontStyles={hasGeneratedFontStyles}
            className="size-dropdown"
            triggerClassName="size-trigger"
            menuClassName="size-menu"
          />
        </div>

        <div className="controller-group">
          <Dropdown
            value={palette}
            options={paletteOptions}
            getValue={(option) => option}
            getLabel={(option) => option}
            renderLabel={(option) => (
              <span className="palette-trigger-content">
                <span className="palette-trigger-swatch" style={{ '--swatch': paletteSwatches[option] || '#1e1f24' }} />
                <span>{option}</span>
              </span>
            )}
            renderOption={(option) => (
              <span className="palette-option-content">
                <span className="palette-option-swatch" style={{ '--swatch': paletteSwatches[option] || '#1e1f24' }} />
                <span className="palette-option-label">{option}</span>
              </span>
            )}
            onChange={onChangePalette}
            hasGeneratedFontStyles={hasGeneratedFontStyles}
            className="palette-dropdown"
            triggerClassName="palette-trigger"
            menuClassName="palette-menu"
          />
        </div>

        <div className="controller-group controller-upload-group">
          <button
            type="button"
            className="upload-button"
            aria-label={uploading ? 'SVG 업로드 중' : 'SVG 업로드'}
            data-tooltip={uploading ? '업로드 중' : 'SVG 업로드'}
            disabled={uploading}
            onClick={onOpenUpload}
          >
            <UiIcon
              glyphClassName="icon icon--plus_circle_fill upload-button-icon"
              fallbackClassName="upload-button-icon"
              hasGeneratedFontStyles={hasGeneratedFontStyles}
              aria-hidden="true"
              alt=""
              style={{ width: '40px', height: '40px' }}
            />
          </button>
          <input
            ref={uploadInputRef}
            className="visually-hidden"
            type="file"
            accept=".svg,image/svg+xml"
            multiple
            onChange={(event) => onUploadChange(event.target.files)}
          />
        </div>
      </aside>
    </>
  );
}

import { useDeferredValue, useEffect, useMemo, useRef, useState } from 'react';
import { Agentation } from 'agentation';
import Dropdown from './components/Dropdown.jsx';
import LibraryHero from './components/LibraryHero.jsx';
import BottomController from './components/BottomController.jsx';
import IconCard from './components/IconCard.jsx';
import IconDetailSheet from './components/IconDetailSheet.jsx';
import StatusToast from './components/StatusToast.jsx';
import DragOverlay from './components/DragOverlay.jsx';
import {
  createLibrarySummary,
  fetchLibraryIcons,
  filterLibraryIcons
} from './libraryData.mjs';
import {
  buildCategoryOptions,
  buildKindOptions,
  sortLibraryIcons
} from './libraryControls.mjs';
import {
  buildDetailPreviewSizes,
  getSourceIconUrl
} from './iconDetail.mjs';

const sortOptions = [
  { key: 'name', label: '이름순' },
  { key: 'category', label: '카테고리순' }
];
const weightOptions = [
  { key: 'light', label: 'Light' },
  { key: 'regular', label: 'Regular' },
  { key: 'medium', label: 'Medium' },
  { key: 'semibold', label: 'SemiBold' },
  { key: 'bold', label: 'Bold' }
];
const weightValues = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700
};

const sizeOptions = ['16px', '20px', '24px', '28px', '32px', '40px', '48px', '64px'];
const paletteOptions = ['Ink', 'Signal Blue', 'Moss', 'Amber', 'Violet'];
const paletteSwatches = {
  Ink: '#1e1f24',
  'Signal Blue': '#1f6fff',
  Moss: '#0f8b6d',
  Amber: '#b86a2d',
  Violet: '#7a3ff2'
};

function getCategoryLabel(category) {
  if (!category || category === 'all') return '전체';
  return category.charAt(0).toUpperCase() + category.slice(1);
}

function getKindLabel(kind) {
  if (!kind || kind === 'all') return 'All kinds';
  return kind.charAt(0).toUpperCase() + kind.slice(1);
}

function formatTimestamp(isoString) {
  if (!isoString) {
    return 'Not built yet';
  }

  return new Intl.DateTimeFormat('ko-KR', {
    dateStyle: 'medium',
    timeStyle: 'short'
  }).format(new Date(isoString));
}

function getSourceIconFileName(icon, extension) {
  if (!icon?.key) {
    return `icon.${extension}`;
  }
  return `${icon.key}.${extension}`;
}

export default function App() {
  const shouldEnableAgentation =
    import.meta.env.DEV && typeof window !== 'undefined' && window.location.hostname === 'localhost';
  const [library, setLibrary] = useState({ icons: [], categories: ['all'], lastBuiltAt: null, hasGeneratedFontStyles: false });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [fontStylesVersion, setFontStylesVersion] = useState(() => Date.now());
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [kind, setKind] = useState('line');
  const [sortMode, setSortMode] = useState('name');
  const [weight, setWeight] = useState('medium');
  const [previewSize, setPreviewSize] = useState('64px');
  const [palette, setPalette] = useState('Ink');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [detailKeylineVisible, setDetailKeylineVisible] = useState(true);
  const [openListMenuKey, setOpenListMenuKey] = useState(null);
  const [detailEditing, setDetailEditing] = useState(false);
  const [detailDraft, setDetailDraft] = useState(null);
  const [detailSaving, setDetailSaving] = useState(false);
  const [detailSaveError, setDetailSaveError] = useState('');
  const [toast, setToast] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [heroScrolled, setHeroScrolled] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [pendingBuilds, setPendingBuilds] = useState([]);
  const [detailTokenInputs, setDetailTokenInputs] = useState({ keywords: '', synonyms: '' });
  const uploadInputRef = useRef(null);
  const deferredQuery = useDeferredValue(query);
  const detailPreviewSizes = buildDetailPreviewSizes();

  useEffect(() => {
    if (!selectedIcon) {
      setDetailEditing(false);
      setDetailDraft(null);
      setDetailSaving(false);
      setDetailSaveError('');
      setDetailTokenInputs({ keywords: '', synonyms: '' });
      return;
    }

    setDetailDraft({
      displayName: selectedIcon.displayName || '',
      category: selectedIcon.category || 'misc',
      keywords: [...(selectedIcon.keywords || [])],
      synonyms: [...(selectedIcon.synonyms || [])]
    });
    setDetailTokenInputs({ keywords: '', synonyms: '' });
  }, [selectedIcon]);

  useEffect(() => {
    if (!toast) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => setToast(null), 2200);
    return () => window.clearTimeout(timeoutId);
  }, [toast]);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key !== 'Escape') {
        return;
      }

      if (openListMenuKey) {
        setOpenListMenuKey(null);
        return;
      }

      if (selectedIcon) {
        setSelectedIcon(null);
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [openListMenuKey, selectedIcon]);

  useEffect(() => {
    function hasFilePayload(event) {
      return Array.from(event.dataTransfer?.types || []).includes('Files');
    }

    function handleDragEnter(event) {
      if (!hasFilePayload(event) || uploading) {
        return;
      }
      event.preventDefault();
      setDragActive(true);
    }

    function handleDragOver(event) {
      if (!hasFilePayload(event) || uploading) {
        return;
      }
      event.preventDefault();
      setDragActive(true);
    }

    function handleDragLeave(event) {
      if (!hasFilePayload(event)) {
        return;
      }
      event.preventDefault();
      setDragActive(false);
    }

    async function handleDrop(event) {
      if (!hasFilePayload(event) || uploading) {
        return;
      }
      event.preventDefault();
      setDragActive(false);
      await handleUploadFiles(event.dataTransfer?.files);
    }

    window.addEventListener('dragenter', handleDragEnter);
    window.addEventListener('dragover', handleDragOver);
    window.addEventListener('dragleave', handleDragLeave);
    window.addEventListener('drop', handleDrop);

    return () => {
      window.removeEventListener('dragenter', handleDragEnter);
      window.removeEventListener('dragover', handleDragOver);
      window.removeEventListener('dragleave', handleDragLeave);
      window.removeEventListener('drop', handleDrop);
    };
  }, [uploading]);

  useEffect(() => {
    function handlePointerDown() {
      setOpenListMenuKey(null);
    }

    if (!openListMenuKey) {
      return undefined;
    }

    document.addEventListener('mousedown', handlePointerDown);
    return () => document.removeEventListener('mousedown', handlePointerDown);
  }, [openListMenuKey]);

  useEffect(() => {
    let cancelled = false;

    async function loadLibrary() {
      try {
        setLoading(true);
        setError('');
        const nextLibrary = await fetchLibraryIcons();
        if (!cancelled) {
          setLibrary(nextLibrary);
          setFontStylesVersion(Date.now());
        }
      } catch (nextError) {
        if (!cancelled) {
          setError(nextError.message || 'Failed to load icon library');
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadLibrary();
    return () => {
      cancelled = true;
    };
  }, []);

  async function reloadLibrary() {
    const nextLibrary = await fetchLibraryIcons();
    setLibrary(nextLibrary);
    setFontStylesVersion(Date.now());
  }

  const categoryOptions = useMemo(() => buildCategoryOptions(library.icons), [library.icons]);
  const kindOptions = useMemo(() => buildKindOptions(library.icons), [library.icons]);

  const filteredIcons = useMemo(() => {
    const visibleIcons = filterLibraryIcons(library.icons, {
      query: deferredQuery,
      category,
      kind
    });
    return sortLibraryIcons(visibleIcons, sortMode);
  }, [library.icons, deferredQuery, category, kind, sortMode]);

  const summary = createLibrarySummary({
    resultCount: filteredIcons.length,
    totalCount: library.icons.length,
    category,
    kind,
    query: deferredQuery.trim()
  });
  const previewColor = paletteSwatches[palette] || '#1e1f24';
  const previewWeightValue = weightValues[weight] || 500;

  function showToast(message, type = 'success') {
    setToast({ message, type });
  }

  async function copyText(value) {
    if (!value) return;
    await navigator.clipboard.writeText(value);
  }

  async function fetchSourceIconSvg(icon) {
    const response = await fetch(getSourceIconUrl(icon), { cache: 'no-store' });
    if (!response.ok) {
      throw new Error('원본 SVG를 불러오지 못했습니다.');
    }
    return response.text();
  }

  function downloadBlob(blob, fileName) {
    const objectUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = objectUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(objectUrl), 0);
  }

  async function copySvgSource(icon) {
    const svgSource = await fetchSourceIconSvg(icon);
    await navigator.clipboard.writeText(svgSource);
  }

  async function downloadSvgSource(icon) {
    const svgSource = await fetchSourceIconSvg(icon);
    const blob = new Blob([svgSource], { type: 'image/svg+xml;charset=utf-8' });
    downloadBlob(blob, getSourceIconFileName(icon, 'svg'));
  }

  async function renderSourcePngBlob(icon) {
    const svgSource = await fetchSourceIconSvg(icon);
    const svgBlob = new Blob([svgSource], { type: 'image/svg+xml;charset=utf-8' });
    const objectUrl = URL.createObjectURL(svgBlob);

    try {
      const image = await new Promise((resolve, reject) => {
        const nextImage = new Image();
        nextImage.onload = () => resolve(nextImage);
        nextImage.onerror = () => reject(new Error('PNG 렌더링용 SVG를 읽지 못했습니다.'));
        nextImage.src = objectUrl;
      });

      const canvas = document.createElement('canvas');
      const size = 256;
      canvas.width = size;
      canvas.height = size;
      const context = canvas.getContext('2d');
      if (!context) {
        throw new Error('PNG 캔버스를 만들지 못했습니다.');
      }
      context.clearRect(0, 0, size, size);
      context.drawImage(image, 0, 0, size, size);

      return await new Promise((resolve, reject) => {
        canvas.toBlob((blob) => {
          if (blob) {
            resolve(blob);
            return;
          }
          reject(new Error('PNG 데이터 생성에 실패했습니다.'));
        }, 'image/png');
      });
    } finally {
      URL.revokeObjectURL(objectUrl);
    }
  }

  async function downloadPng(icon) {
    const blob = await renderSourcePngBlob(icon);
    downloadBlob(blob, getSourceIconFileName(icon, 'png'));
  }

  async function handleListAction(event, action, icon) {
    event.stopPropagation();
    setOpenListMenuKey(null);
    try {
      if (action === 'copy-class') {
        await copyText(icon.className);
        showToast('클래스를 복사했습니다.');
        return;
      }
      if (action === 'copy-name') {
        await copyText(icon.displayName);
        showToast('아이콘 이름을 복사했습니다.');
        return;
      }
      if (action === 'copy-svg') {
        await copySvgSource(icon);
        showToast('SVG를 복사했습니다.');
        return;
      }
      if (action === 'download-svg') {
        await downloadSvgSource(icon);
        showToast('SVG를 다운로드했습니다.');
        return;
      }
      if (action === 'download-png') {
        await downloadPng(icon);
        showToast('PNG를 다운로드했습니다.');
        return;
      }
      await copyText(icon.key);
      showToast('글리프 키를 복사했습니다.');
    } catch (error) {
      showToast(error.message || '액션을 처리하지 못했습니다.', 'error');
    }
  }

  function updateSelectedIconFromDraft(savedIcon) {
    setLibrary((current) => ({
      ...current,
      icons: current.icons.map((icon) => (
        icon.key === savedIcon.key
          ? {
              ...icon,
              displayName: savedIcon.displayName,
              category: savedIcon.category,
              keywords: [...savedIcon.keywords],
              synonyms: [...savedIcon.synonyms],
              searchText: [
                savedIcon.displayName,
                savedIcon.category,
                ...(savedIcon.keywords || []),
                ...(savedIcon.synonyms || [])
              ].join(' ').toLowerCase()
            }
          : icon
      ))
    }));

    setSelectedIcon((current) => (
      current && current.key === savedIcon.key
        ? {
            ...current,
            displayName: savedIcon.displayName,
            category: savedIcon.category,
            keywords: [...savedIcon.keywords],
            synonyms: [...savedIcon.synonyms]
          }
        : current
    ));
  }

  async function saveDetailDraft() {
    if (!selectedIcon || !detailDraft || detailSaving) {
      return;
    }

    setDetailSaving(true);
    setDetailSaveError('');

    try {
      const response = await fetch(`/api/icon-metadata/${encodeURIComponent(selectedIcon.key)}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          displayName: detailDraft.displayName,
          category: detailDraft.category,
          keywords: detailDraft.keywords,
          synonyms: detailDraft.synonyms
        })
      });

      const payload = await response.json();
      if (!response.ok) {
        throw new Error(payload.error || '메타데이터를 저장하지 못했습니다.');
      }

      updateSelectedIconFromDraft(payload.icon);
      setDetailEditing(false);
    } catch (error) {
      setDetailSaveError(error.message || '메타데이터를 저장하지 못했습니다.');
    } finally {
      setDetailSaving(false);
    }
  }

  function removeDetailToken(field, tokenIndex) {
    setDetailDraft((current) => {
      if (!current) {
        return current;
      }

      return {
        ...current,
        [field]: current[field].filter((_, index) => index !== tokenIndex)
      };
    });
  }

  function commitDetailToken(field) {
    const nextValue = String(detailTokenInputs[field] || '').trim().replace(/\s+/g, ' ');
    if (!nextValue) {
      return;
    }

    setDetailDraft((current) => {
      if (!current) {
        return current;
      }

      if (current[field].includes(nextValue)) {
        return current;
      }

      return {
        ...current,
        [field]: [...current[field], nextValue]
      };
    });

    setDetailTokenInputs((current) => ({ ...current, [field]: '' }));
  }

  async function readFileAsText(file) {
    return await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(typeof reader.result === 'string' ? reader.result : '');
      reader.onerror = () => reject(new Error(`${file.name} 파일을 읽지 못했습니다.`));
      reader.readAsText(file);
    });
  }

  async function handleUploadFiles(fileList) {
    const files = Array.from(fileList || []).filter((file) => file.name.toLowerCase().endsWith('.svg'));
    if (files.length === 0) {
      showToast('SVG 파일만 업로드할 수 있습니다.', 'error');
      return;
    }

    setUploading(true);
    setPendingBuilds(files.map((file, index) => ({
      id: `${Date.now()}-${index}`,
      label: file.name.replace(/\.svg$/i, '')
    })));

    try {
      const payloadFiles = await Promise.all(files.map(async (file) => ({
        name: file.name,
        content: await readFileAsText(file)
      })));

      const response = await fetch('/api/upload-icons', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ files: payloadFiles })
      });
      const payload = await response.json();
      if (!response.ok) {
        throw new Error(payload.error || 'SVG 업로드에 실패했습니다.');
      }

      await reloadLibrary();
      showToast(`${files.length}개 SVG를 업로드했습니다.`);
    } catch (error) {
      showToast(error.message || 'SVG 업로드에 실패했습니다.', 'error');
    } finally {
      setUploading(false);
      setPendingBuilds([]);
      if (uploadInputRef.current) {
        uploadInputRef.current.value = '';
      }
    }
  }

  const detailDirty = !!selectedIcon && !!detailDraft && (
    detailDraft.displayName !== (selectedIcon.displayName || '') ||
    detailDraft.category !== (selectedIcon.category || '') ||
    JSON.stringify(detailDraft.keywords || []) !== JSON.stringify(selectedIcon.keywords || []) ||
    JSON.stringify(detailDraft.synonyms || []) !== JSON.stringify(selectedIcon.synonyms || [])
  );

  return (
    <main className="app-shell">
      {library.hasGeneratedFontStyles ? (
        <link rel="stylesheet" href={`/generated-fonts/my-icon-font.css?v=${fontStylesVersion}`} />
      ) : null}
      <header className="topbar">
        <span className="visually-hidden">IconFactory</span>
      </header>

      <main className="content-scroll" onScroll={(event) => setHeroScrolled(event.currentTarget.scrollTop > 8)}>
        <div className="library-shell">
          <LibraryHero
            heroScrolled={heroScrolled}
            lastBuiltAt={library.lastBuiltAt}
            formatTimestamp={formatTimestamp}
            viewMode={viewMode}
            onToggleViewMode={() => setViewMode((current) => (current === 'grid' ? 'list' : 'grid'))}
            hasGeneratedFontStyles={library.hasGeneratedFontStyles}
            sortMode={sortMode}
            sortOptions={sortOptions}
            onChangeSortMode={setSortMode}
            summary={summary}
          />

          <section className={`library-grid ${viewMode === 'list' ? 'list-view' : ''}`} aria-live="polite">
            {pendingBuilds.map((build, index) => (
              <article className="pending-build-card" key={build.id}>
                <div className="pending-build-kicker">{pendingBuilds.length > 1 ? `${index + 1}/${pendingBuilds.length}` : '변환 중'}</div>
                <div className="pending-build-title">웹폰트로 변환 중</div>
                <div className="pending-build-name">{build.label}</div>
                <p className="pending-build-desc">SVG를 정리하고 폰트를 빌드하고 있습니다</p>
                <div className="pending-build-progress" aria-hidden="true">
                  <div className="pending-build-progress-bar" />
                </div>
              </article>
            ))}
            {error ? (
              <article className="empty-card error-state">
                <div>
                  <strong>빌드된 라이브러리를 불러오지 못했습니다.</strong>
                  <p>{error}</p>
                </div>
              </article>
            ) : null}

            {!error && !loading && filteredIcons.length === 0 ? (
              <article className="empty-card">
                <div className="empty-card-content">
                  <strong>조건에 맞는 웹폰트 아이콘이 없습니다.</strong>
                  <p>검색어를 바꾸거나 카테고리를 다시 선택해보세요.</p>
                </div>
              </article>
            ) : null}

            {!error && filteredIcons.map((icon) => (
              <IconCard
                key={icon.key}
                icon={icon}
                viewMode={viewMode}
                selected={selectedIcon?.key === icon.key}
                hasGeneratedFontStyles={library.hasGeneratedFontStyles}
                previewSize={previewSize}
                previewColor={previewColor}
                previewWeightValue={previewWeightValue}
                getSourceIconUrl={getSourceIconUrl}
                getCategoryLabel={getCategoryLabel}
                setSelectedIcon={setSelectedIcon}
                setOpenListMenuKey={setOpenListMenuKey}
                openListMenuKey={openListMenuKey}
                handleListAction={handleListAction}
                copyText={copyText}
                showToast={showToast}
              />
            ))}
          </section>
        </div>
      </main>

      <BottomController
        category={category}
        categoryOptions={categoryOptions}
        getCategoryLabel={getCategoryLabel}
        onChangeCategory={setCategory}
        kind={kind}
        kindOptions={kindOptions}
        getKindLabel={getKindLabel}
        onChangeKind={setKind}
        query={query}
        onChangeQuery={setQuery}
        weight={weight}
        weightOptions={weightOptions}
        onChangeWeight={setWeight}
        previewSize={previewSize}
        sizeOptions={sizeOptions}
        onChangePreviewSize={setPreviewSize}
        palette={palette}
        paletteOptions={paletteOptions}
        paletteSwatches={paletteSwatches}
        hasGeneratedFontStyles={library.hasGeneratedFontStyles}
        onChangePalette={setPalette}
        uploading={uploading}
        uploadInputRef={uploadInputRef}
        onOpenUpload={() => uploadInputRef.current?.click()}
        onUploadChange={handleUploadFiles}
      />

      <IconDetailSheet
        selectedIcon={selectedIcon}
        onClose={() => setSelectedIcon(null)}
        getCategoryLabel={getCategoryLabel}
        getKindLabel={getKindLabel}
        detailKeylineVisible={detailKeylineVisible}
        onToggleKeyline={() => setDetailKeylineVisible((current) => !current)}
        detailPreviewSizes={detailPreviewSizes}
        previewColor={previewColor}
        previewWeightValue={previewWeightValue}
        hasGeneratedFontStyles={library.hasGeneratedFontStyles}
        getSourceIconUrl={getSourceIconUrl}
        copyText={copyText}
        copySvgSource={copySvgSource}
        downloadSvgSource={downloadSvgSource}
        downloadPng={downloadPng}
        showToast={showToast}
        detailEditing={detailEditing}
        setDetailEditing={setDetailEditing}
        detailDirty={detailDirty}
        detailSaving={detailSaving}
        detailSaveError={detailSaveError}
        saveDetailDraft={saveDetailDraft}
        setDetailSaveError={setDetailSaveError}
        setDetailTokenInputs={setDetailTokenInputs}
        setDetailDraft={setDetailDraft}
        detailDraft={detailDraft}
        libraryCategories={library.categories}
        removeDetailToken={removeDetailToken}
        detailTokenInputs={detailTokenInputs}
        commitDetailToken={commitDetailToken}
      />
      <DragOverlay dragActive={dragActive} uploading={uploading} />

      {shouldEnableAgentation ? (
        <Agentation
          endpoint="http://localhost:4747"
          className="agentation-layer"
        />
      ) : null}
      <StatusToast toast={toast} />
    </main>
  );
}

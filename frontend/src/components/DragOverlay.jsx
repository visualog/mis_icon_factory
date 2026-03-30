export default function DragOverlay({ dragActive, uploading }) {
  return (
    <div className={`drag-overlay ${dragActive ? 'visible' : ''}`} aria-hidden={dragActive ? 'false' : 'true'}>
      <div className={`drag-overlay-card ${uploading ? 'is-build' : ''}`}>
        <div className="drag-overlay-kicker">여기에 놓기</div>
        <div className="drag-overlay-title">SVG를 놓으면 웹폰트 라이브러리에 바로 반영됩니다.</div>
        <p className="drag-overlay-desc">놓는 즉시 전체 폰트를 다시 빌드하고, 성공한 결과만 라이브러리에 표시합니다.</p>
        <div className="drag-overlay-progress" aria-hidden="true">
          <div className="drag-overlay-progress-bar" />
        </div>
      </div>
    </div>
  );
}

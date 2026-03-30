export default function StatusToast({ toast }) {
  if (!toast) {
    return null;
  }

  return (
    <div className={`status-toast visible ${toast.type === 'error' ? 'error' : ''}`} aria-live="polite">
      <span>{toast.message}</span>
    </div>
  );
}

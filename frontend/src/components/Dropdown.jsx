import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export default function Dropdown({
  value,
  options,
  getValue,
  getLabel,
  renderLabel,
  renderOption,
  onChange,
  className = '',
  triggerClassName = '',
  menuClassName = '',
  align = 'up',
  menuAlign = 'left'
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const triggerRef = useRef(null);
  const menuRef = useRef(null);
  const [menuStyle, setMenuStyle] = useState(null);
  const activeOption = options.find((option) => getValue(option) === value) || options[0];

  useEffect(() => {
    function handlePointerDown(event) {
      if (!rootRef.current?.contains(event.target) && !menuRef.current?.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', handlePointerDown);
    return () => document.removeEventListener('mousedown', handlePointerDown);
  }, []);

  useLayoutEffect(() => {
    if (!open || !triggerRef.current || !menuRef.current) {
      return undefined;
    }

    function updateMenuPosition() {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const menuRect = menuRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const gutter = 12;
      const menuGap = 10;
      const availableBelow = viewportHeight - triggerRect.bottom - menuGap - gutter;
      const availableAbove = triggerRect.top - menuGap - gutter;

      let left = menuAlign === 'right'
        ? triggerRect.right - menuRect.width
        : triggerRect.left;
      left = Math.max(gutter, Math.min(left, viewportWidth - menuRect.width - gutter));

      const prefersDown = align === 'down';
      const shouldFlipDown = !prefersDown && availableAbove < menuRect.height && availableBelow > availableAbove;
      const shouldFlipUp = prefersDown && availableBelow < menuRect.height && availableAbove > availableBelow;
      const renderDown = shouldFlipDown || (!shouldFlipUp && prefersDown);

      const maxHeight = Math.max(
        120,
        renderDown ? availableBelow : availableAbove
      );
      const renderedHeight = Math.min(menuRect.height, maxHeight);

      setMenuStyle({
        position: 'fixed',
        top: renderDown ? `${Math.max(gutter, triggerRect.bottom + menuGap)}px` : 'auto',
        bottom: renderDown ? 'auto' : `${Math.max(gutter, viewportHeight - triggerRect.top + menuGap)}px`,
        left: `${left}px`,
        maxHeight: `${Math.floor(maxHeight)}px`,
        overflowY: 'auto'
      });
    }

    updateMenuPosition();
    window.addEventListener('resize', updateMenuPosition);
    window.addEventListener('scroll', updateMenuPosition, true);

    return () => {
      window.removeEventListener('resize', updateMenuPosition);
      window.removeEventListener('scroll', updateMenuPosition, true);
    };
  }, [align, menuAlign, open, options.length]);

  const triggerIconClass = open
    ? 'icon icon--chevron_up_line dropdown-trigger-icon'
    : 'icon icon--chevron_down_line dropdown-trigger-icon';

  const menu = (
    <div
      ref={menuRef}
      className={`dropdown-menu dropdown-menu--portal dropdown-menu--${align} ${open ? 'open' : ''} ${menuClassName}`.trim()}
      role="listbox"
      style={menuStyle || undefined}
    >
      {options.map((option) => {
        const optionValue = getValue(option);
        const selected = optionValue === value;
        return (
          <button
            key={optionValue}
            type="button"
            className={`dropdown-option ${selected ? 'active' : ''}`}
            aria-selected={selected}
            onClick={() => {
              onChange(optionValue);
              setOpen(false);
            }}
          >
            {renderOption ? renderOption(option) : <span>{getLabel(option)}</span>}
            {selected ? <i className="icon icon--approve_line dropdown-option-check" aria-hidden="true" /> : null}
          </button>
        );
      })}
    </div>
  );

  return (
    <div
      ref={rootRef}
      className={`dropdown ${align === 'down' ? 'dropdown--down' : 'dropdown--up'} ${open ? 'open' : ''} ${className}`.trim()}
    >
      <button
        ref={triggerRef}
        type="button"
        className={`dropdown-trigger ${triggerClassName}`.trim()}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        <span>{activeOption ? (renderLabel ? renderLabel(activeOption) : getLabel(activeOption)) : ''}</span>
        <i className={triggerIconClass} aria-hidden="true" />
      </button>
      {typeof document !== 'undefined' ? createPortal(menu, document.body) : null}
    </div>
  );
}

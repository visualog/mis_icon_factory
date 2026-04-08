import { getUiIconUrl } from '../iconDetail.mjs';

export default function UiIcon({
  glyphClassName,
  fallbackClassName = '',
  hasGeneratedFontStyles,
  style,
  ...rest
}) {
  if (hasGeneratedFontStyles) {
    return <i className={glyphClassName} style={style} {...rest} />;
  }

  const src = getUiIconUrl(glyphClassName);
  if (!src) {
    return null;
  }

  return (
    <img
      className={`ui-icon-fallback ${fallbackClassName}`.trim()}
      src={src}
      style={style}
      {...rest}
    />
  );
}

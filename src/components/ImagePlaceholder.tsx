/**
 * ImagePlaceholder.tsx
 *
 * Reusable image placeholder component.
 * Renders a styled dashed box indicating where a real image should go.
 *
 * Props:
 *  - className      : additional CSS classes (for sizing/radius etc.)
 *  - label          : text label shown inside the box
 *  - aspectRatio    : CSS aspect-ratio value or "auto" to skip
 *  - minHeight      : optional minimum height (e.g. "300px")
 */

interface ImagePlaceholderProps {
  className?: string;
  label?: string;
  aspectRatio?: string;
  minHeight?: string;
}

export default function ImagePlaceholder({
  className = "",
  label = "Image Placeholder",
  aspectRatio,
  minHeight,
}: ImagePlaceholderProps) {
  const inlineStyle: React.CSSProperties = {};
  if (aspectRatio && aspectRatio !== "auto") {
    inlineStyle.aspectRatio = aspectRatio;
  }
  if (minHeight) {
    inlineStyle.minHeight = minHeight;
  }

  return (
    <div
      className={`img-placeholder ${className}`}
      style={inlineStyle}
      role="img"
      aria-label={`Placeholder: ${label}`}
    >
      {/* Camera icon */}
      <div className="img-placeholder-icon" aria-hidden="true">
        📷
      </div>

      {/* Dashed border hint */}
      <div className="img-placeholder-label">
        ┌──────────────────┐
      </div>
      <div style={{ fontSize: "0.8125rem", opacity: 0.75, fontWeight: 600 }}>
        {label}
      </div>
      <div className="img-placeholder-label">
        └──────────────────┘
      </div>
    </div>
  );
}

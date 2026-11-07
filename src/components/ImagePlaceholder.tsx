interface ImagePlaceholderProps {
  label: string;
  className?: string;
}

export default function ImagePlaceholder({ label, className = '' }: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`flex items-center justify-center rounded-md bg-neutral-200 p-4 text-center text-sm text-neutral-500 ${className}`}
    >
      {label}
    </div>
  );
}

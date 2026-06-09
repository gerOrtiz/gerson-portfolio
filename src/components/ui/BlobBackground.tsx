export default function BlobBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none w-full h-full">
      <svg
        viewBox="0 0 800 600"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <ellipse cx="150" cy="180" rx="220" ry="180"
          style={{ fill: 'var(--blob-1)' }} />
        <ellipse cx="650" cy="400" rx="180" ry="220"
          style={{ fill: 'var(--blob-2)' }} />
        <ellipse cx="400" cy="500" rx="260" ry="140"
          style={{ fill: 'var(--blob-3)' }} />
      </svg>
    </div>
  )
}
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2 font-display text-[19px] font-bold tracking-tight ${className}`}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="12" cy="12" r="2.2" fill="currentColor" />
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="12" cy="3" r="1.3" fill="currentColor" />
        <circle cx="12" cy="21" r="1.3" fill="currentColor" />
        <circle cx="3" cy="12" r="1.3" fill="currentColor" />
        <circle cx="21" cy="12" r="1.3" fill="currentColor" />
        <circle cx="5.6" cy="5.6" r="1" fill="currentColor" />
        <circle cx="18.4" cy="18.4" r="1" fill="currentColor" />
        <circle cx="5.6" cy="18.4" r="1" fill="currentColor" />
        <circle cx="18.4" cy="5.6" r="1" fill="currentColor" />
      </svg>
      Creatify
    </span>
  );
}

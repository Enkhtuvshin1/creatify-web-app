const brands = [
  "GOBI",
  "MCS",
  "TDB",
  "APU",
  "UNITEL",
  "KHAN BANK",
  "MONOS",
  "TOKI",
];

export function LogoMarquee() {
  return (
    <section className="border-b border-border bg-muted/30">
      <div className="mx-auto max-w-[1400px] overflow-hidden px-6 py-10 lg:px-10">
        <div className="flex flex-wrap items-center justify-around gap-x-12 gap-y-6 opacity-80">
          {brands.map((b) => (
            <span
              key={b}
              className="font-display text-[18px] font-bold tracking-tight text-foreground/70 md:text-[22px]"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

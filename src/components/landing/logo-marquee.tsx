const categories = [
  "STREAMING",
  "GAMING",
  "FASHION",
  "REAL LIFE",
  "FOOD",
  "BEAUTY",
  "TRAVEL",
  "TECH",
  "COMEDY",
  "SPORTS",
  "LIFESTYLE",
  "EDUCATION",
];

export function LogoMarquee() {
  const allItems = [...categories, ...categories];

  return (
    <section className="border-b border-border bg-muted/30">
      <div className="mx-auto max-w-[1400px] overflow-hidden px-6 py-10 lg:px-10">
        <div className="relative overflow-hidden">
          <div className="animate-marquee flex w-max items-center gap-12 lg:gap-16">
            {allItems.map((cat, i) => (
              <span
                key={`${cat}-${i}`}
                className="shrink-0 select-none font-display text-[20px] font-bold tracking-tight text-foreground/60 md:text-[26px] lg:text-[30px]"
              >
                {cat}
                <span className="ml-12 inline-block h-[6px] w-[6px] rounded-full bg-primary/70 lg:ml-16" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

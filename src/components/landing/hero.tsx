import { Link } from "@tanstack/react-router";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      {/* decorative dots */}
      <div className="pointer-events-none absolute inset-0 opacity-60 dark:opacity-100">
        <div className="absolute right-[8%] top-[20%] h-2 w-2 rounded-full bg-primary/70 shadow-[0_0_20px_4px_rgba(59,80,255,0.35)]" />
        <div className="absolute right-[20%] top-[55%] h-1.5 w-1.5 rounded-full bg-primary/60" />
        <div className="absolute right-[14%] top-[75%] h-1 w-1 rounded-full bg-primary/50" />
        <div className="absolute right-[35%] top-[35%] h-1 w-1 rounded-full bg-primary/40" />
        <div className="absolute right-[6%] top-[40%] h-3 w-3 rounded-full border border-primary/40" />
      </div>

      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 pb-20 pt-16 md:pt-24 lg:grid-cols-[1.1fr_1fr] lg:px-10 lg:pb-28 lg:pt-28">
        <div>
          <p className="font-mono-ui mb-6 text-[12px] font-medium uppercase tracking-[0.18em] text-primary">
            Брэнд × Бүтээгч маркетплэйс
          </p>
          <h1 className="font-display text-[44px] font-bold leading-[1.02] tracking-tight md:text-[64px] lg:text-[78px]">
            Зөв брэнд, зөв бүтээгчтэй{" "}
            <span className="text-primary">товчхон</span> уулзана.
          </h1>
          <p className="mt-7 max-w-[480px] text-[16px] leading-relaxed text-muted-foreground md:text-[17px]">
            Хайлт, хэлэлцээр, Escrow төлбөр хүртэлх бүх үйл явцыг нэг дороос
            шийдсэн Монголын анхны итгэмжит платформ. Секундын дотор эхэл.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <div className="tick-frame">
              <Link
                to="/register"
                className="inline-flex h-11 items-center rounded-md bg-primary px-6 text-[14px] font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Эхлэх
              </Link>
            </div>
            <div className="tick-frame">
              <Link
                to="/jobs"
                className="inline-flex h-11 items-center rounded-md border border-border bg-background px-6 text-[14px] font-semibold text-foreground hover:bg-muted"
              >
                Демо үзэх
              </Link>
            </div>
          </div>
        </div>

        {/* Right visual */}
        <div className="relative hidden lg:block">
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="absolute right-10 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full border border-primary/30">
            <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_30px_8px_rgba(59,80,255,0.5)]" />
          </div>
          <div className="absolute right-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full border border-primary/15" />
          <div className="absolute right-32 top-1/2 h-[440px] w-[440px] -translate-y-1/2 rounded-full border border-primary/5" />
        </div>
      </div>
    </section>
  );
}

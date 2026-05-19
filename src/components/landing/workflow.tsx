const creatorSteps = [
  "Бүртгүүлэх",
  "Профайл бөглөх",
  "Зар хайх",
  "Хүсэлт илгээх",
  "Чат хийх",
  "Контент бүтээх",
  "URL илгээх",
  "Төлбөр авах",
];

const brandSteps = [
  "Бүртгүүлэх",
  "Зар нийтлэх",
  "Escrow байршуулах",
  "Хүсэлт хянах",
  "Зөвшөөрөх",
  "Чат хийх",
  "Контент хүлээн авах",
  "Мөнгө шилжүүлэх",
];

function Column({ title, color, steps }: { title: string; color: string; steps: string[] }) {
  return (
    <div className="bg-card p-8 md:p-10">
      <div className="mb-8 flex items-center gap-3">
        <span className={`h-2 w-2 rounded-full ${color}`} />
        <h3 className="font-display text-xl font-semibold tracking-tight">{title}</h3>
      </div>
      <ol className="relative space-y-5 border-l border-dashed border-border pl-6">
        {steps.map((s, i) => (
          <li key={s} className="relative">
            <span className="absolute -left-[29px] top-0.5 flex h-5 w-5 items-center justify-center rounded-full border border-border bg-background font-mono-ui text-[10px] text-muted-foreground">
              {i + 1}
            </span>
            <p className="text-[15px] font-medium">{s}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function Workflow() {
  return (
    <section id="how" className="border-b border-border bg-muted/30">
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-24">
        <div className="mb-12 max-w-[640px]">
          <p className="font-mono-ui mb-3 text-[12px] font-medium uppercase tracking-[0.18em] text-primary">
            Хэрхэн ажилладаг
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
            Хоёр талд тохирсон ил тод урсгал.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
          <Column title="Бүтээгч" color="bg-primary" steps={creatorSteps} />
          <Column title="Брэнд" color="bg-foreground" steps={brandSteps} />
        </div>
      </div>
    </section>
  );
}

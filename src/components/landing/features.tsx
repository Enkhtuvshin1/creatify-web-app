import {
  UserCircle,
  Search,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: UserCircle,
    title: "Баталгаажсан профайл",
    desc: "Категори, дагагчийн тоо, нийгмийн сүлжээгээ нэг газар цэгцлээрэй.",
  },
  {
    icon: Search,
    title: "Ухаалаг хайлт",
    desc: "Категори, байршил, дагагч, үнийн дүнгээр шүүж хамгийн тохирох талыг ол.",
  },
  {
    icon: MessageSquare,
    title: "Шууд чат & хэлэлцээр",
    desc: "Зөвшилцлийн бүх түүх нэг газар. Файл, URL хуваалцах боломжтой.",
  },
  {
    icon: ShieldCheck,
    title: "Escrow төлбөр",
    desc: "Брэндийн төлбөр нь баталгаажсаны дараа л бүтээгчид шилждэг. 0 эрсдэл.",
  },
  {
    icon: CheckCircle2,
    title: "Контент баталгаажуулалт",
    desc: "URL илгээж нийтлэлээ автоматаар баталгаажуулж, мөнгөө хүлээж ав.",
  },
  {
    icon: BarChart3,
    title: "Орлого & аналитик",
    desc: "Сар, кампанит ажил, статусаар хуваагдсан тоон үзүүлэлт.",
  },
];

export function Features() {
  return (
    <section id="features" className="border-b border-border">
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-24">
        <div className="mb-12 max-w-[640px]">
          <p className="font-mono-ui mb-3 text-[12px] font-medium uppercase tracking-[0.18em] text-primary">
            Боломжууд
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
            Эхнээс нь дуустал нэг платформ дээр.
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-muted-foreground">
            Хайлт, хэлэлцээр, чат, escrow төлбөр, контент баталгаажуулалт —
            ажил бүрийг тусдаа хэрэгсэлгүйгээр зохион байгуул.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group flex flex-col gap-4 bg-card p-8 transition-colors hover:bg-muted/40"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                <f.icon size={20} />
              </div>
              <h3 className="font-display text-[18px] font-semibold tracking-tight">
                {f.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-muted-foreground">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

const data = {
  creator: {
    steps: [
      "Профайл үүсгэж өөрийгөө таниулах",
      "Идэвхтэй зарууд харж хүсэлт илгээх",
      "Брэндтэй чатаар зөвшилцөх",
      "Контент илгээж төлбөрөө авах",
    ],
    cta: { label: "Бүтээгчээр эхлэх", to: "/register" },
  },
  brand: {
    steps: [
      "Зар нийтэлж бүтээгч хайх",
      "Категори, дагагч, байршлаар шүүх",
      "Escrow-д төлбөрөө байршуулах",
      "Контент хүлээн авч баталгаажуулах",
    ],
    cta: { label: "Брэндээр эхлэх", to: "/register" },
  },
};

export function RoleTabs() {
  const [tab, setTab] = useState<"creator" | "brand">("creator");
  const active = data[tab];

  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-20">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono-ui mb-3 text-[12px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Эхлүүлэх
            </p>
            <h2 className="font-display max-w-[600px] text-3xl font-bold tracking-tight md:text-4xl">
              Чи хэн юм бэ? Аль талаас нь эхлэхээ сонго.
            </h2>
          </div>
          <div className="font-mono-ui flex gap-6 text-[14px]">
            {(["creator", "brand"] as const).map((k) => (
              <button
                key={k}
                onClick={() => setTab(k)}
                className={`pb-1 transition-colors ${
                  tab === k
                    ? "border-b-2 border-primary text-primary"
                    : "border-b-2 border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {`{${k === "creator" ? "Бүтээгч" : "Брэнд"}}`}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-border bg-card">
          <div className="grid grid-cols-1 divide-border md:grid-cols-2 md:divide-x">
            <ol className="divide-y divide-border">
              {active.steps.map((step, i) => (
                <li key={step} className="flex items-start gap-5 px-6 py-5 md:px-8">
                  <span className="font-mono-ui mt-0.5 text-[12px] text-muted-foreground">
                    0{i + 1}
                  </span>
                  <span className="text-[15px] font-medium leading-relaxed md:text-[16px]">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
            <div className="flex flex-col justify-between gap-8 bg-muted/30 p-8 md:p-10">
              <div>
                <p className="font-mono-ui mb-3 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  Жишээ
                </p>
                <pre className="font-mono-ui overflow-x-auto rounded-md bg-foreground p-4 text-[12px] leading-relaxed text-background">
                  {tab === "creator"
                    ? `$ creatify apply --job=summer-campaign
✓ Profile verified
✓ Application sent
→ Awaiting brand response...`
                    : `$ creatify post --budget=2,500,000
✓ Escrow deposit secured
✓ Job is live
→ Receiving applications...`}
                </pre>
              </div>
              <Link
                to={active.cta.to}
                className="inline-flex items-center gap-2 self-start text-[14px] font-semibold text-primary hover:underline"
              >
                {active.cta.label} <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

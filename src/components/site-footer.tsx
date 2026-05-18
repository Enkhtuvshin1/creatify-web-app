import { Link } from "@tanstack/react-router";
import { Logo } from "./logo";

const cols = [
  {
    title: "Платформ",
    links: [
      { label: "Бүтээгчид", to: "/creators" },
      { label: "Зарууд", to: "/jobs" },
      { label: "Үнэ", to: "/" },
      { label: "Escrow", to: "/" },
    ],
  },
  {
    title: "Нөөцүүд",
    links: [
      { label: "Тусламж", to: "/" },
      { label: "Гарын авлага", to: "/" },
      { label: "Блог", to: "/" },
      { label: "Холбоо барих", to: "/" },
    ],
  },
  {
    title: "Компани",
    links: [
      { label: "Бидний тухай", to: "/" },
      { label: "Карьер", to: "/" },
      { label: "Хамтрагч", to: "/" },
      { label: "Хэвлэл", to: "/" },
    ],
  },
  {
    title: "Хууль",
    links: [
      { label: "Үйлчилгээний нөхцөл", to: "/" },
      { label: "Нууцлал", to: "/" },
      { label: "Cookies", to: "/" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      {/* CTA banner */}
      <div className="border-b border-border">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 divide-y divide-border lg:grid-cols-[1fr_1fr_auto] lg:divide-x lg:divide-y-0">
          <div className="px-6 py-10 lg:px-10">
            <h3 className="font-display text-2xl font-bold leading-tight tracking-tight md:text-3xl">
              Өнөөдрөөс Creatify дээр эхэл
            </h3>
          </div>
          <div className="px-6 py-10 lg:px-10">
            <p className="text-[15px] leading-relaxed text-muted-foreground">
              Профайлаа үнэгүй үүсгээд, эхний хамтын ажиллагаагаа өнөөдөр л
              эхлүүлээрэй. Escrow төлбөр хамгаалагдсан.
            </p>
          </div>
          <div className="flex flex-col gap-2 px-6 py-10 lg:px-10">
            <Link
              to="/register"
              className="inline-flex h-10 items-center justify-center rounded-md bg-foreground px-5 text-[14px] font-semibold text-background"
            >
              Эхлэх
            </Link>
            <Link
              to="/jobs"
              className="inline-flex h-10 items-center justify-center rounded-md border border-border px-5 text-[14px] font-medium"
            >
              Демо үзэх
            </Link>
          </div>
        </div>
      </div>

      {/* Subscribe */}
      <div className="border-b border-border">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-center gap-4 px-6 py-8 md:flex-row lg:px-10">
          <h4 className="font-display text-lg font-semibold">Creatify-д бүртгүүл</h4>
          <form className="flex w-full max-w-md gap-2">
            <input
              type="email"
              placeholder="И-мэйл хаяг"
              className="h-10 flex-1 rounded-md border border-border bg-background px-3 text-[14px] outline-none focus:border-primary"
            />
            <button
              type="submit"
              className="h-10 rounded-md bg-primary px-4 text-[14px] font-semibold text-primary-foreground"
            >
              Бүртгүүлэх
            </button>
          </form>
        </div>
      </div>

      {/* Link columns */}
      <div className="mx-auto max-w-[1400px] px-6 py-14 lg:px-10">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <Logo />
          <div className="flex gap-2 text-foreground/60">
            <a href="#" className="rounded-md border border-border p-2 hover:text-foreground">X</a>
            <a href="#" className="rounded-md border border-border p-2 hover:text-foreground">in</a>
            <a href="#" className="rounded-md border border-border p-2 hover:text-foreground">YT</a>
            <a href="#" className="rounded-md border border-border p-2 hover:text-foreground">GH</a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {cols.map((c) => (
            <div key={c.title}>
              <h5 className="mb-4 text-[13px] font-medium uppercase tracking-wider text-muted-foreground">
                {c.title}
              </h5>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-[14px] text-foreground/80 hover:text-primary">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-2 px-6 py-6 text-[13px] text-muted-foreground md:flex-row md:items-center lg:px-10">
          <p>© {new Date().getFullYear()} Creatify Systems · Улаанбаатар, Монгол</p>
          <p>Creatify нь брэнд × бүтээгч маркетплэйс юм.</p>
        </div>
      </div>
    </footer>
  );
}

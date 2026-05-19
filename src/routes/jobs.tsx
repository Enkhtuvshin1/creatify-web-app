import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/jobs")({
  component: JobsPage,
  head: () => ({
    meta: [
      { title: "Зарууд — Creatify" },
      { name: "description", content: "Идэвхтэй брэндийн кампанит ажлууд." },
      { property: "og:title", content: "Зарууд — Creatify" },
      { property: "og:url", content: "/jobs" },
    ],
    links: [{ rel: "canonical", href: "/jobs" }],
  }),
});

function JobsPage() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
      <p className="font-mono-ui mb-3 text-[12px] uppercase tracking-[0.18em] text-primary">Зарууд</p>
      <h1 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
        Идэвхтэй кампанит ажлууд.
      </h1>
      <p className="mt-6 max-w-[560px] text-muted-foreground">
        Энэ хуудсанд идэвхтэй зарууд жагсаагдана. Удахгүй нээгдэнэ.
      </p>
    </section>
  );
}

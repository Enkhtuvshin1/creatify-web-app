import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/creators")({
  component: CreatorsPage,
  head: () => ({
    meta: [
      { title: "Бүтээгчид — Creatify" },
      { name: "description", content: "Монголын шилдэг контент бүтээгчдийн жагсаалт. Тун удахгүй." },
      { property: "og:title", content: "Бүтээгчид — Creatify" },
      { property: "og:url", content: "/creators" },
    ],
    links: [{ rel: "canonical", href: "/creators" }],
  }),
});

function CreatorsPage() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-24 lg:px-10 lg:py-32">
      <p className="font-mono-ui mb-3 text-[12px] uppercase tracking-[0.18em] text-primary">Бүтээгчид</p>
      <h1 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
        Бүтээгчдийн каталог тун удахгүй.
      </h1>
      <p className="mt-6 max-w-[560px] text-muted-foreground">
        Бид Монголын шилдэг бүтээгчдийг нэгтгэж, шүүлттэй каталог нээх гэж байна.
      </p>
    </section>
  );
}

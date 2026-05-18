import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/landing/hero";
import { LogoMarquee } from "@/components/landing/logo-marquee";
import { RoleTabs } from "@/components/landing/role-tabs";
import { Features } from "@/components/landing/features";
import { Workflow } from "@/components/landing/workflow";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Creatify — Зөв брэнд, зөв бүтээгчтэй товчхон уулзана" },
      { name: "description", content: "Монголын брэнд × бүтээгч маркетплэйс. Хайлт, хэлэлцээр, escrow төлбөр нэг дороос." },
      { property: "og:title", content: "Creatify" },
      { property: "og:description", content: "Зөв брэнд, зөв бүтээгчтэй товчхон уулзана." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <RoleTabs />
      <Features />
      <Workflow />
    </>
  );
}

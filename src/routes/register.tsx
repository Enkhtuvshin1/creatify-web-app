import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/register")({
  component: RegisterPage,
  head: () => ({
    meta: [
      { title: "Бүртгүүлэх — Creatify" },
      { name: "description", content: "Брэнд эсвэл бүтээгчээр Creatify-д нэгдээрэй." },
      { property: "og:url", content: "/register" },
    ],
    links: [{ rel: "canonical", href: "/register" }],
  }),
});

function RegisterPage() {
  const [role, setRole] = useState<"creator" | "brand">("creator");
  return (
    <section className="mx-auto flex max-w-md flex-col gap-6 px-6 py-24 lg:py-32">
      <h1 className="font-display text-3xl font-bold tracking-tight">Бүртгүүлэх</h1>
      <div className="grid grid-cols-2 gap-2 rounded-md border border-border p-1">
        {(["creator", "brand"] as const).map((r) => (
          <button
            key={r}
            onClick={() => setRole(r)}
            className={`rounded px-3 py-2 text-[14px] font-medium ${
              role === r ? "bg-foreground text-background" : "text-muted-foreground"
            }`}
          >
            {r === "creator" ? "Бүтээгч" : "Брэнд"}
          </button>
        ))}
      </div>
      <form className="flex flex-col gap-3">
        <input
          placeholder={role === "creator" ? "Нэр" : "Брэндийн нэр"}
          className="h-11 rounded-md border border-border bg-background px-3 text-[14px] outline-none focus:border-primary"
        />
        <input
          type="email"
          placeholder="И-мэйл"
          className="h-11 rounded-md border border-border bg-background px-3 text-[14px] outline-none focus:border-primary"
        />
        <input
          type="password"
          placeholder="Нууц үг"
          className="h-11 rounded-md border border-border bg-background px-3 text-[14px] outline-none focus:border-primary"
        />
        <button className="h-11 rounded-md bg-primary text-[14px] font-semibold text-primary-foreground">
          Үргэлжлүүлэх
        </button>
      </form>
      <p className="text-[14px] text-muted-foreground">
        Бүртгэлтэй юу?{" "}
        <Link to="/login" className="font-medium text-primary hover:underline">
          Нэвтрэх
        </Link>
      </p>
    </section>
  );
}

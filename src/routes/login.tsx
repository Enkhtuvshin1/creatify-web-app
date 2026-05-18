import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  component: LoginPage,
  head: () => ({
    meta: [
      { title: "Нэвтрэх — Creatify" },
      { name: "description", content: "Creatify-д нэвтэрнэ үү." },
      { property: "og:url", content: "/login" },
    ],
    links: [{ rel: "canonical", href: "/login" }],
  }),
});

function LoginPage() {
  return (
    <section className="mx-auto flex max-w-md flex-col gap-6 px-6 py-24 lg:py-32">
      <h1 className="font-display text-3xl font-bold tracking-tight">Нэвтрэх</h1>
      <form className="flex flex-col gap-3">
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
          Нэвтрэх
        </button>
      </form>
      <p className="text-[14px] text-muted-foreground">
        Шинээр бүртгүүлэх үү?{" "}
        <Link to="/register" className="font-medium text-primary hover:underline">
          Бүртгүүлэх
        </Link>
      </p>
    </section>
  );
}

import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Search, Sun, Moon, Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { useTheme } from "./theme-provider";

const navItems = [
  { to: "/creators", label: "Бүтээгчид" },
  { to: "/jobs", label: "Зарууд" },
  { to: "/#features", label: "Боломжууд" },
  { to: "/#how", label: "Хэрхэн ажилладаг" },
];

export function SiteHeader() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-[64px] max-w-[1400px] items-center justify-between px-5 lg:px-10">
        <div className="flex items-center gap-10">
          <Link to="/" className="text-foreground">
            <Logo />
          </Link>
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-[14px] font-medium text-foreground/75 transition-colors hover:text-primary"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <button
            aria-label="Хайх"
            className="hidden h-9 w-9 items-center justify-center rounded-md border border-border text-foreground/70 transition-colors hover:bg-muted lg:flex"
          >
            <Search size={16} />
          </button>
          <button
            aria-label="Theme"
            onClick={toggle}
            className="hidden h-9 w-9 items-center justify-center rounded-md border border-border text-foreground/70 transition-colors hover:bg-muted lg:flex"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <Link
            to="/login"
            className="hidden h-9 items-center rounded-md px-3 text-[14px] font-medium text-foreground/80 hover:text-primary lg:inline-flex"
          >
            Нэвтрэх
          </Link>
          <Link
            to="/register"
            className="hidden h-9 items-center rounded-md bg-primary px-4 text-[14px] font-semibold text-primary-foreground transition-colors hover:opacity-90 lg:inline-flex"
          >
            Эхлэх
          </Link>

          <button
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto flex max-w-[1400px] flex-col gap-1 px-5 py-4">
            {navItems.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-[15px] font-medium text-foreground/80 hover:bg-muted"
              >
                {n.label}
              </Link>
            ))}
            <div className="mt-2 flex gap-2 border-t border-border pt-4">
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-md border border-border px-3 py-2 text-center text-[14px] font-medium"
              >
                Нэвтрэх
              </Link>
              <Link
                to="/register"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-md bg-primary px-3 py-2 text-center text-[14px] font-semibold text-primary-foreground"
              >
                Эхлэх
              </Link>
            </div>
            <button
              onClick={toggle}
              className="mt-2 flex items-center justify-center gap-2 rounded-md border border-border px-3 py-2 text-[14px]"
            >
              {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />}
              {theme === "dark" ? "Гэрэлтэй горим" : "Харанхуй горим"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig, type PluginOption } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => {
  const plugins: PluginOption[] = [
    tanstackStart({
      server: { entry: "server" },
    }),
    nitro({ preset: "vercel" }),
    react(),
    tailwindcss(),
    tsConfigPaths(),
  ];

  return { plugins };
});

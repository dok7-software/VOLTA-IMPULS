import { APP_DESCRIPTION, APP_NAME } from "@/core/constants/app";

export default function HomePage() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">{APP_NAME}</h1>
      <p className="max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
        {APP_DESCRIPTION}
      </p>
      <p className="text-sm text-zinc-500">
        Crea nuevas páginas en{" "}
        <code className="rounded bg-zinc-100 px-1.5 py-0.5 dark:bg-zinc-900">
          src/app/tu-ruta/page.tsx
        </code>
      </p>
    </div>
  );
}

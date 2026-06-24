import { APP_NAME } from "@/core/constants/app";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto max-w-5xl px-4 py-6 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} {APP_NAME}
      </div>
    </footer>
  );
}

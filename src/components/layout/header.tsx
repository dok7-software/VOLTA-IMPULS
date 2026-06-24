import Link from "next/link";
import { APP_NAME } from "@/core/constants/app";

export function Header() {
  return (
    <header className="border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex h-14 max-w-5xl items-center px-4">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          {APP_NAME}
        </Link>
      </div>
    </header>
  );
}

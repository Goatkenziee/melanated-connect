import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="font-display text-6xl font-bold text-primary">404</h1>
      <p className="text-lg text-muted-foreground">This page doesn&apos;t exist.</p>
      <Link
        href="/"
        className="rounded-full bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground"
      >
        Go Home
      </Link>
    </div>
  );
}

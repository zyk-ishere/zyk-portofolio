import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <p className="mono text-sm text-muted mb-2">$ 404</p>
        <h1 className="text-6xl md:text-8xl font-bold mb-4">404</h1>
        <p className="text-muted mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link href="/" className="btn btn-primary">
            Back to Home
          </Link>
          <Link href="/id" className="btn btn-ghost">
            Versi Indonesia
          </Link>
        </div>
      </div>
    </main>
  );
}
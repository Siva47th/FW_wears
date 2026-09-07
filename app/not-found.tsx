import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-white flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <p className="text-brand-gold tracking-[0.4em] uppercase text-xs mb-4">
          Page Not Found
        </p>
        <h1 className="font-serif text-6xl sm:text-8xl text-brand-black mb-4">
          404
        </h1>
        <p className="text-brand-gray-500 text-base sm:text-lg mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="btn-primary">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

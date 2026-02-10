import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <span className="text-7xl block mb-6">🌊</span>
        <h1 className="text-3xl font-bold text-ocean-900 mb-3">Page Not Found</h1>
        <p className="text-ocean-600 mb-8 leading-relaxed">
          Looks like this wave has already broken. The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-ocean-600 text-white font-semibold rounded-lg hover:bg-ocean-700 transition-colors"
        >
          ← Paddle Back Home
        </Link>
      </div>
    </div>
  )
}
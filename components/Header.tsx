import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-ocean-950/80 border-b border-ocean-700/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-2xl">🏄</span>
            <span className="text-xl font-bold text-white group-hover:text-ocean-300 transition-colors">
              Swell & Story
            </span>
          </Link>

          <nav className="flex items-center gap-1 sm:gap-2">
            <Link
              href="/"
              className="px-3 py-2 text-sm font-medium text-ocean-200 hover:text-white hover:bg-ocean-800/50 rounded-lg transition-all"
            >
              Home
            </Link>
            <Link
              href="/categories/destinations"
              className="px-3 py-2 text-sm font-medium text-ocean-200 hover:text-white hover:bg-ocean-800/50 rounded-lg transition-all hidden sm:block"
            >
              Destinations
            </Link>
            <Link
              href="/categories/surf-tips"
              className="px-3 py-2 text-sm font-medium text-ocean-200 hover:text-white hover:bg-ocean-800/50 rounded-lg transition-all hidden sm:block"
            >
              Surf Tips
            </Link>
            <Link
              href="/categories/gear-and-equipment"
              className="px-3 py-2 text-sm font-medium text-ocean-200 hover:text-white hover:bg-ocean-800/50 rounded-lg transition-all hidden sm:block"
            >
              Gear
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-ocean-950 text-ocean-300 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🏄</span>
              <span className="text-xl font-bold text-white">Swell & Story</span>
            </Link>
            <p className="text-sm text-ocean-400 leading-relaxed">
              Stories, guides, and tips from surfers who live for the next swell. 
              Explore the world one wave at a time.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Categories
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/categories/destinations" className="text-sm text-ocean-400 hover:text-ocean-200 transition-colors">
                  🌍 Destinations
                </Link>
              </li>
              <li>
                <Link href="/categories/surf-tips" className="text-sm text-ocean-400 hover:text-ocean-200 transition-colors">
                  🏄 Surf Tips
                </Link>
              </li>
              <li>
                <Link href="/categories/gear-and-equipment" className="text-sm text-ocean-400 hover:text-ocean-200 transition-colors">
                  🎿 Gear & Equipment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              About
            </h3>
            <p className="text-sm text-ocean-400 leading-relaxed">
              Swell & Story is powered by{' '}
              <a
                href="https://www.cosmicjs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ocean-300 hover:text-white underline transition-colors"
              >
                Cosmic
              </a>
              , the headless CMS for modern content management.
            </p>
          </div>
        </div>

        <div className="border-t border-ocean-800 mt-8 pt-8 text-center">
          <p className="text-xs text-ocean-500">
            © {new Date().getFullYear()} Swell & Story. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
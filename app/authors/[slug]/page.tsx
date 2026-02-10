// app/authors/[slug]/page.tsx
import { getAuthorBySlug, getPostsByAuthor } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import PostCard from '@/components/PostCard'
import Link from 'next/link'

interface AuthorPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: AuthorPageProps): Promise<Metadata> {
  const { slug } = await params
  const author = await getAuthorBySlug(slug)

  if (!author) {
    return { title: 'Author Not Found — Swell & Story' }
  }

  return {
    title: `${author.metadata?.name || author.title} — Swell & Story`,
    description: author.metadata?.bio || `Articles by ${author.title} on Swell & Story`,
  }
}

export default async function AuthorPage({ params }: AuthorPageProps) {
  const { slug } = await params
  const author = await getAuthorBySlug(slug)

  if (!author) {
    notFound()
  }

  const posts = await getPostsByAuthor(author.id)
  const photo = author.metadata?.photo?.imgix_url

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      {/* Author Profile */}
      <header className="text-center mb-12">
        {photo ? (
          <img
            src={`${photo}?w=300&h=300&fit=crop&auto=format,compress`}
            alt={author.title}
            className="w-28 h-28 rounded-full object-cover mx-auto mb-5 ring-4 ring-ocean-200 shadow-lg"
          />
        ) : (
          <div className="w-28 h-28 rounded-full bg-ocean-200 flex items-center justify-center mx-auto mb-5 text-4xl shadow-lg">
            ✍️
          </div>
        )}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-ocean-900 mb-3">
          {author.metadata?.name || author.title}
        </h1>
        {author.metadata?.bio && (
          <p className="text-ocean-600 max-w-lg mx-auto leading-relaxed">
            {author.metadata.bio}
          </p>
        )}
        <p className="text-sm text-ocean-400 mt-4 font-medium">
          {posts.length} {posts.length === 1 ? 'article' : 'articles'} published
        </p>
      </header>

      {/* Author's Posts */}
      {posts.length > 0 ? (
        <div>
          <h2 className="text-xl font-bold text-ocean-900 mb-6">
            Articles by {author.metadata?.name || author.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center py-12">
          <span className="text-5xl block mb-4">📝</span>
          <p className="text-ocean-600">No articles published yet. Stay tuned!</p>
        </div>
      )}

      {/* Back Link */}
      <div className="text-center mt-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-ocean-600 hover:text-ocean-800 font-medium transition-colors"
        >
          ← Back to all stories
        </Link>
      </div>
    </div>
  )
}
// app/categories/[slug]/page.tsx
import { getCategoryBySlug, getPostsByCategory, getCategories } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import PostCard from '@/components/PostCard'
import Link from 'next/link'

interface CategoryPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params
  const category = await getCategoryBySlug(slug)

  if (!category) {
    return { title: 'Category Not Found — Swell & Story' }
  }

  return {
    title: `${category.metadata?.name || category.title} — Swell & Story`,
    description: category.metadata?.description || `Browse ${category.title} articles on Swell & Story`,
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params
  const [category, categories] = await Promise.all([
    getCategoryBySlug(slug),
    getCategories(),
  ])

  if (!category) {
    notFound()
  }

  const posts = await getPostsByCategory(category.id)

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-ocean-900 mb-3">
          {category.metadata?.name || category.title}
        </h1>
        {category.metadata?.description && (
          <p className="text-ocean-600 max-w-xl mx-auto leading-relaxed">
            {category.metadata.description}
          </p>
        )}
      </header>

      {/* Category Nav */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/categories/${cat.slug}`}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
              cat.slug === slug
                ? 'bg-ocean-600 text-white border-ocean-600'
                : 'bg-white text-ocean-600 border-ocean-200 hover:border-ocean-400'
            }`}
          >
            {cat.metadata?.name || cat.title}
          </Link>
        ))}
      </div>

      {/* Posts Grid */}
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <span className="text-5xl block mb-4">🏖️</span>
          <h2 className="text-xl font-bold text-ocean-900 mb-2">No stories yet</h2>
          <p className="text-ocean-600 mb-6">
            No posts have been added to this category yet. Check back soon!
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-ocean-600 text-white font-semibold rounded-lg hover:bg-ocean-700 transition-colors"
          >
            ← Browse all stories
          </Link>
        </div>
      )}
    </div>
  )
}
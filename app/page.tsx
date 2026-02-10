import { getPosts, getCategories, getAuthors } from '@/lib/cosmic'
import PostCard from '@/components/PostCard'
import AuthorCard from '@/components/AuthorCard'
import Link from 'next/link'

export default async function HomePage() {
  const [posts, categories, authors] = await Promise.all([
    getPosts(),
    getCategories(),
    getAuthors(),
  ])

  const featuredPost = posts[0]
  const remainingPosts = posts.slice(1)

  return (
    <div>
      {/* Hero / Featured Post */}
      {featuredPost && (
        <section className="px-4 sm:px-6 pt-8 pb-4 max-w-6xl mx-auto">
          <PostCard post={featuredPost} featured />
        </section>
      )}

      {/* Categories Strip */}
      {categories.length > 0 && (
        <section className="px-4 sm:px-6 py-8 max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/categories/${cat.slug}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-ocean-200 text-ocean-700 rounded-full text-sm font-medium hover:bg-ocean-600 hover:text-white hover:border-ocean-600 transition-all duration-200 shadow-sm"
              >
                <span>{cat.metadata?.name || cat.title}</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Latest Posts */}
      {remainingPosts.length > 0 && (
        <section className="px-4 sm:px-6 py-8 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-ocean-900 mb-6">Latest Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {remainingPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* If only one post (featured), still show all */}
      {remainingPosts.length === 0 && posts.length > 0 && (
        <section className="px-4 sm:px-6 py-8 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-ocean-900 mb-6">All Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* Authors Section */}
      {authors.length > 0 && (
        <section className="px-4 sm:px-6 py-12 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-ocean-900 mb-2 text-center">Meet the Writers</h2>
          <p className="text-ocean-500 text-center mb-8 text-sm">
            The surfers and storytellers behind every article
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {authors.map((author) => {
              const authorPosts = posts.filter(
                (p) => p.metadata?.author?.id === author.id
              )
              return (
                <AuthorCard
                  key={author.id}
                  author={author}
                  postCount={authorPosts.length}
                />
              )
            })}
          </div>
        </section>
      )}

      {/* Empty State */}
      {posts.length === 0 && (
        <section className="px-4 sm:px-6 py-20 max-w-6xl mx-auto text-center">
          <span className="text-7xl block mb-6">🏄</span>
          <h2 className="text-2xl font-bold text-ocean-900 mb-3">No stories yet</h2>
          <p className="text-ocean-600 max-w-md mx-auto">
            This surf blog is ready for its first wave. Head over to your Cosmic dashboard
            to start creating posts!
          </p>
        </section>
      )}
    </div>
  )
}
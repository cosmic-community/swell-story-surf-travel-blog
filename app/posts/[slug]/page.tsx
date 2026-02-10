// app/posts/[slug]/page.tsx
import { getPostBySlug, getPosts } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import CategoryBadge from '@/components/CategoryBadge'

interface PostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return { title: 'Post Not Found — Swell & Story' }
  }

  const description = post.metadata?.content
    ? post.metadata.content.replace(/^#.*\n/gm, '').replace(/[*_#`\[\]]/g, '').trim().slice(0, 160)
    : ''

  return {
    title: `${post.title} — Swell & Story`,
    description,
    openGraph: {
      title: post.title,
      description,
      images: post.metadata?.featured_image?.imgix_url
        ? [`${post.metadata.featured_image.imgix_url}?w=1200&h=630&fit=crop&auto=format,compress`]
        : [],
    },
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const imageUrl = post.metadata?.featured_image?.imgix_url
  const author = post.metadata?.author
  const category = post.metadata?.category
  const content = post.metadata?.content || ''

  // Remove the first H1 heading (title) from content since we display it separately
  const cleanedContent = content.replace(/^# .+\n+/, '')

  return (
    <article>
      {/* Hero Image */}
      {imageUrl && (
        <div className="relative h-[350px] sm:h-[450px] lg:h-[500px] overflow-hidden">
          <img
            src={`${imageUrl}?w=1800&h=1000&fit=crop&auto=format,compress`}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-overlay" />
        </div>
      )}

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Post Header */}
        <header className={imageUrl ? '-mt-32 relative z-10' : 'pt-10'}>
          {category && (
            <div className="mb-3">
              <Link href={`/categories/${category.slug}`}>
                <CategoryBadge category={category} />
              </Link>
            </div>
          )}
          <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6 ${imageUrl ? 'text-white' : 'text-ocean-900'}`}>
            {post.title}
          </h1>

          {/* Author Info */}
          {author && (
            <Link href={`/authors/${author.slug}`} className="group inline-flex items-center gap-3 mb-8">
              {author.metadata?.photo?.imgix_url ? (
                <img
                  src={`${author.metadata.photo.imgix_url}?w=96&h=96&fit=crop&auto=format,compress`}
                  alt={author.title}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-white/50 group-hover:ring-ocean-300 transition-all"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-ocean-200 flex items-center justify-center text-lg">
                  ✍️
                </div>
              )}
              <div>
                <p className={`text-sm font-semibold group-hover:text-ocean-500 transition-colors ${imageUrl ? 'text-white' : 'text-ocean-900'}`}>
                  {author.metadata?.name || author.title}
                </p>
                <p className={`text-xs ${imageUrl ? 'text-ocean-300' : 'text-ocean-500'}`}>
                  {post.created_at
                    ? new Date(post.created_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })
                    : ''}
                </p>
              </div>
            </Link>
          )}
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none py-8">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{cleanedContent}</ReactMarkdown>
        </div>

        {/* Back Link */}
        <div className="border-t border-ocean-200 py-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-ocean-600 hover:text-ocean-800 font-medium transition-colors"
          >
            ← Back to all stories
          </Link>
        </div>
      </div>
    </article>
  )
}
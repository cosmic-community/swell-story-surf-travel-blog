import Link from 'next/link'
import type { Post } from '@/types'
import CategoryBadge from '@/components/CategoryBadge'

interface PostCardProps {
  post: Post
  featured?: boolean
}

export default function PostCard({ post, featured = false }: PostCardProps) {
  const imageUrl = post.metadata?.featured_image?.imgix_url
  const author = post.metadata?.author
  const category = post.metadata?.category
  const contentPreview = post.metadata?.content
    ? post.metadata.content.replace(/^#.*\n/gm, '').replace(/[*_#`\[\]]/g, '').trim().slice(0, 160) + '...'
    : ''

  if (featured) {
    return (
      <Link href={`/posts/${post.slug}`} className="group block">
        <article className="relative rounded-2xl overflow-hidden h-[480px] sm:h-[520px]">
          {imageUrl ? (
            <img
              src={`${imageUrl}?w=1400&h=1040&fit=crop&auto=format,compress`}
              alt={post.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-ocean-600 to-ocean-900" />
          )}
          <div className="absolute inset-0 gradient-overlay" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10">
            {category && (
              <CategoryBadge category={category} />
            )}
            <h2 className="text-2xl sm:text-4xl font-bold text-white mt-3 mb-3 leading-tight group-hover:text-ocean-200 transition-colors">
              {post.title}
            </h2>
            <p className="text-ocean-200 text-sm sm:text-base leading-relaxed line-clamp-2 max-w-2xl">
              {contentPreview}
            </p>
            {author && (
              <div className="flex items-center gap-3 mt-4">
                {author.metadata?.photo?.imgix_url && (
                  <img
                    src={`${author.metadata.photo.imgix_url}?w=80&h=80&fit=crop&auto=format,compress`}
                    alt={author.title}
                    className="w-8 h-8 rounded-full object-cover ring-2 ring-ocean-400/50"
                  />
                )}
                <span className="text-sm text-ocean-300 font-medium">{author.title}</span>
              </div>
            )}
          </div>
        </article>
      </Link>
    )
  }

  return (
    <Link href={`/posts/${post.slug}`} className="group block">
      <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-ocean-100 h-full flex flex-col">
        {imageUrl ? (
          <div className="relative h-52 overflow-hidden">
            <img
              src={`${imageUrl}?w=800&h=500&fit=crop&auto=format,compress`}
              alt={post.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {category && (
              <div className="absolute top-3 left-3">
                <CategoryBadge category={category} />
              </div>
            )}
          </div>
        ) : (
          <div className="relative h-52 bg-gradient-to-br from-ocean-400 to-ocean-700 flex items-center justify-center">
            <span className="text-5xl">🌊</span>
            {category && (
              <div className="absolute top-3 left-3">
                <CategoryBadge category={category} />
              </div>
            )}
          </div>
        )}
        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-lg font-bold text-ocean-900 group-hover:text-ocean-600 transition-colors leading-snug mb-2">
            {post.title}
          </h3>
          <p className="text-sm text-ocean-600 leading-relaxed line-clamp-3 flex-1">
            {contentPreview}
          </p>
          {author && (
            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-ocean-100">
              {author.metadata?.photo?.imgix_url && (
                <img
                  src={`${author.metadata.photo.imgix_url}?w=64&h=64&fit=crop&auto=format,compress`}
                  alt={author.title}
                  className="w-7 h-7 rounded-full object-cover"
                />
              )}
              <span className="text-xs font-medium text-ocean-500">{author.title}</span>
            </div>
          )}
        </div>
      </article>
    </Link>
  )
}
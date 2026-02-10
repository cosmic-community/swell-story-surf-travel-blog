import Link from 'next/link'
import type { Author } from '@/types'

interface AuthorCardProps {
  author: Author
  postCount?: number
}

export default function AuthorCard({ author, postCount }: AuthorCardProps) {
  const photo = author.metadata?.photo?.imgix_url

  return (
    <Link href={`/authors/${author.slug}`} className="group block">
      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-ocean-100 text-center">
        {photo ? (
          <img
            src={`${photo}?w=200&h=200&fit=crop&auto=format,compress`}
            alt={author.title}
            className="w-20 h-20 rounded-full object-cover mx-auto mb-4 ring-4 ring-ocean-100 group-hover:ring-ocean-300 transition-all"
          />
        ) : (
          <div className="w-20 h-20 rounded-full bg-ocean-200 flex items-center justify-center mx-auto mb-4 text-2xl">
            ✍️
          </div>
        )}
        <h3 className="text-base font-bold text-ocean-900 group-hover:text-ocean-600 transition-colors">
          {author.metadata?.name || author.title}
        </h3>
        {author.metadata?.bio && (
          <p className="text-xs text-ocean-500 mt-2 leading-relaxed line-clamp-2">
            {author.metadata.bio}
          </p>
        )}
        {typeof postCount === 'number' && (
          <p className="text-xs text-ocean-400 mt-3 font-medium">
            {postCount} {postCount === 1 ? 'article' : 'articles'}
          </p>
        )}
      </div>
    </Link>
  )
}
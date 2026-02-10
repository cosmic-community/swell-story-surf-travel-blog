import type { Category } from '@/types'

interface CategoryBadgeProps {
  category: Category
}

const categoryEmojis: Record<string, string> = {
  'destinations': '🌍',
  'surf-tips': '🏄',
  'gear-and-equipment': '🎿',
}

export default function CategoryBadge({ category }: CategoryBadgeProps) {
  const emoji = categoryEmojis[category.slug] || '🏷️'

  return (
    <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold rounded-full bg-ocean-500/90 text-white backdrop-blur-sm">
      <span>{emoji}</span>
      <span>{category.metadata?.name || category.title}</span>
    </span>
  )
}
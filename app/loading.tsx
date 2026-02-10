export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <div className="inline-flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-ocean-400 animate-bounce" style={{ animationDelay: '0ms' }} />
          <div className="w-3 h-3 rounded-full bg-ocean-500 animate-bounce" style={{ animationDelay: '150ms' }} />
          <div className="w-3 h-3 rounded-full bg-ocean-600 animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
        <p className="text-ocean-500 mt-4 text-sm font-medium">Loading waves...</p>
      </div>
    </div>
  )
}
export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-50 via-white to-zinc-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950">
      <div className="text-center">
        <div className="relative inline-flex">
          {/* Outer ring */}
          <div className="w-16 h-16 rounded-full border-4 border-zinc-200 dark:border-zinc-800"></div>
          
          {/* Spinning ring */}
          <div className="absolute inset-0 w-16 h-16 rounded-full border-4 border-transparent border-t-blue-600 animate-spin"></div>
        </div>
        
        <p className="mt-4 text-zinc-600 dark:text-zinc-400 font-medium">
          Loading...
        </p>
      </div>
    </div>
  );
}

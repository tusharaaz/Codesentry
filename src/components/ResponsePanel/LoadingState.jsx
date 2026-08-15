function LoadingState({ fixing, loading }) {
  if (!loading && !fixing) return null;
  return <div className="flex items-center gap-3 text-sm text-zinc-400"><div className="h-4 w-4 animate-spin rounded-full border-2 border-zinc-600 border-t-purple-500" /><span>{fixing ? "Fixing your code..." : "Reviewing your code..."}</span></div>;
}
export default LoadingState;

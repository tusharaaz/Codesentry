function FixCodeButton({ onClick, loading, disabled, darkMode }) {
  return <button onClick={onClick} disabled={disabled} aria-label={loading ? "Fixing code" : "Fix code"} className={`btnNormal min-w-0 transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50 ${darkMode ? "bg-zinc-900 text-zinc-300 hover:bg-zinc-800" : "border-zinc-300 bg-white text-zinc-800 hover:bg-zinc-100"}`}>{loading ? "Fixing..." : <><span className="sm:hidden">Fix</span><span className="hidden sm:inline">Fix code</span></>}</button>;
}
export default FixCodeButton;

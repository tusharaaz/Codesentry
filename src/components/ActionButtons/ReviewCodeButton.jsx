function ReviewCodeButton({ onClick, loading, disabled, darkMode }) {
  return <button onClick={onClick} disabled={disabled} className={`btnNormal min-w-30 transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50 ${darkMode ? "bg-zinc-900 text-zinc-300 hover:bg-zinc-800" : "border-zinc-300 bg-white text-zinc-800 hover:bg-zinc-100"}`}>{loading ? "Reviewing..." : "Review code"}</button>;
}
export default ReviewCodeButton;

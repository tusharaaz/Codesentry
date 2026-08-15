function EditorStatusBar({ language, darkMode }) {
  return <div className={`flex h-[38px] min-w-0 items-center justify-between border-t px-3 text-xs text-zinc-500 sm:px-5 ${darkMode ? "border-[#27272a] bg-[#151517]" : "border-zinc-300 bg-white"}`}><div className="flex min-w-0 items-center gap-3 sm:gap-4"><span className="whitespace-nowrap">Ln 1, Col 1</span><span className="hidden sm:inline">Spaces: 2</span><span className="hidden md:inline">UTF-8</span></div><span className="ml-2 truncate text-purple-400">{language}</span></div>;
}
export default EditorStatusBar;

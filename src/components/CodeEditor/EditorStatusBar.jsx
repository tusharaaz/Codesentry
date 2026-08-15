function EditorStatusBar({ language, darkMode }) {
  return <div className={`flex h-[38px] items-center justify-between border-t !px-5 text-xs text-zinc-500 ${darkMode ? "border-[#27272a] bg-[#151517]" : "border-zinc-300 bg-white"}`}><div className="flex items-center gap-4"><span>Ln 1, Col 1</span><span>Spaces: 2</span><span>UTF-8</span></div><span className="text-purple-400">{language}</span></div>;
}
export default EditorStatusBar;

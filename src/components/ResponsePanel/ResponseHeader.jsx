function ResponseHeader({ darkMode }) {
  return <div className={`topTab flex h-[60px] items-center justify-between border-b border-t px-1 ${darkMode ? "border-[#27272a]" : "border-zinc-300 bg-white"}`}><div className="flex items-center gap-2"><div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/10"><span className="text-purple-400">⚡</span></div><p className={`text-[17px] font-bold ${darkMode ? "text-zinc-200" : "text-zinc-900"}`}>Response</p></div></div>;
}
export default ResponseHeader;

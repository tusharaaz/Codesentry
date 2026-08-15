import Markdown from "react-markdown";

function ResponseContent({ response, darkMode }) {
  if (!response) return <div className={`text-sm leading-6 ${darkMode ? "text-zinc-500" : "text-zinc-600"}`}>Your AI code review will appear here...</div>;
  const heading = darkMode ? "text-white" : "text-zinc-900";
  const text = darkMode ? "text-zinc-300" : "text-zinc-700";
  return <div className={`text-sm leading-7 ${text}`}><Markdown components={{
    h1: ({ children }) => <h1 className={`mb-4 mt-6 text-xl font-bold ${heading}`}>{children}</h1>, h2: ({ children }) => <h2 className={`mb-4 mt-6 text-lg font-bold ${heading}`}>{children}</h2>, h3: ({ children }) => <h3 className={`mb-3 mt-6 text-base font-bold ${heading}`}>{children}</h3>,
    p: ({ children }) => <p className={`mb-4 leading-7 ${text}`}>{children}</p>, strong: ({ children }) => <strong className="font-semibold text-purple-400">{children}</strong>, em: ({ children }) => <em className={darkMode ? "text-zinc-400" : "text-zinc-600"}>{children}</em>,
    ul: ({ children }) => <ul className={`mb-4 list-disc space-y-2 pl-6 ${text}`}>{children}</ul>, ol: ({ children }) => <ol className={`mb-4 list-decimal space-y-2 pl-6 ${text}`}>{children}</ol>, li: ({ children }) => <li className="leading-6">{children}</li>,
    hr: () => <hr className={`my-6 ${darkMode ? "border-[#27272a]" : "border-zinc-300"}`} />, code: ({ children }) => <code className={`rounded px-1.5 py-0.5 ${darkMode ? "bg-zinc-800 text-purple-300" : "bg-zinc-100 text-purple-700"}`}>{children}</code>,
    pre: ({ children }) => <pre className={`my-4 overflow-x-auto rounded-lg border p-4 text-sm ${darkMode ? "border-[#27272a] bg-[#18181b] text-zinc-300" : "border-zinc-300 bg-zinc-100 text-zinc-800"}`}>{children}</pre>,
    a: ({ children, href }) => <a href={href} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">{children}</a>,
  }}>{response}</Markdown></div>;
}
export default ResponseContent;

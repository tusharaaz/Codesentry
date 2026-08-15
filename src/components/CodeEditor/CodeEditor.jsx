import Editor from "@monaco-editor/react";
import EditorHeader from "./EditorHeader";
import EditorStatusBar from "./EditorStatusBar";

function CodeEditor({ code, setCode, selectedOption, setSelectedOption, darkMode, loading, fixing, onFix, onReview }) {
  return <section className={`left flex h-[55vh] min-h-[450px] w-full shrink-0 flex-col border-b lg:h-[calc(100vh-80px)] lg:w-1/2 lg:border-b-0 lg:border-r ${darkMode ? "border-[#27272a]" : "border-zinc-300"}`}><EditorHeader selectedOption={selectedOption} setSelectedOption={setSelectedOption} darkMode={darkMode} loading={loading} fixing={fixing} onFix={onFix} onReview={onReview} /><div className="min-h-0 flex-1"><Editor height="100%" width="100%" language={selectedOption.value} value={code} onChange={(value) => setCode(value || "")} theme={darkMode ? "vs-dark" : "light"} options={{ fontSize: 14, minimap: { enabled: false }, automaticLayout: true, padding: { top: 10 }, scrollBeyondLastLine: false, wordWrap: "on", readOnly: loading || fixing }} /></div><EditorStatusBar language={selectedOption.label} darkMode={darkMode} /></section>;
}
export default CodeEditor;

import Editor from "@monaco-editor/react";
import EditorHeader from "./EditorHeader";
import EditorStatusBar from "./EditorStatusBar";

function CodeEditor({ code, setCode, selectedOption, setSelectedOption, darkMode, loading, fixing, onFix, onReview }) {
  return <section className="left h-[87%] w-[50%]"><EditorHeader selectedOption={selectedOption} setSelectedOption={setSelectedOption} darkMode={darkMode} loading={loading} fixing={fixing} onFix={onFix} onReview={onReview} /><Editor height="100%" width="100%" language={selectedOption.value} value={code} onChange={(value) => setCode(value || "")} theme={darkMode ? "vs-dark" : "light"} options={{ fontSize: 14, minimap: { enabled: false }, automaticLayout: true, padding: { top: 10 }, scrollBeyondLastLine: false, readOnly: loading || fixing }} /><EditorStatusBar language={selectedOption.label} darkMode={darkMode} /></section>;
}
export default CodeEditor;

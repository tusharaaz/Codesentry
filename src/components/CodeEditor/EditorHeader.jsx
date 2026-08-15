import FixCodeButton from "../ActionButtons/FixCodeButton";
import ReviewCodeButton from "../ActionButtons/ReviewCodeButton";
import { languages } from "../../constants/languages";
import LanguageSelector from "./LanguageSelector";

function EditorHeader({ selectedOption, setSelectedOption, darkMode, loading, fixing, onFix, onReview }) {
  const disabled = loading || fixing;
  return <div className={`tabs flex min-h-[56px] flex-wrap items-center gap-2 border-b px-3 py-2 transition-colors duration-200 sm:flex-nowrap sm:px-5 ${darkMode ? "border-[#27272a] bg-[#151517]" : "border-zinc-300 bg-white"}`}>
    <LanguageSelector selectedOption={selectedOption} setSelectedOption={setSelectedOption} options={languages} darkMode={darkMode} />
    <div className="hidden min-w-0 items-center gap-3 md:flex"><div className="flex gap-1.5"><span className="h-3 w-3 rounded-full bg-orange-400" /><span className="h-3 w-3 rounded-full bg-white/70" /><span className="h-3 w-3 rounded-full bg-yellow-300" /></div><div className={`h-5 w-px ${darkMode ? "bg-[#27272a]" : "bg-zinc-300"}`} /><span className={`truncate text-sm font-medium ${darkMode ? "text-zinc-400" : "text-zinc-600"}`}>Code Editor</span></div>
    <FixCodeButton onClick={onFix} loading={fixing} disabled={disabled} darkMode={darkMode} />
    <ReviewCodeButton onClick={onReview} loading={loading} disabled={disabled} darkMode={darkMode} />
  </div>;
}
export default EditorHeader;

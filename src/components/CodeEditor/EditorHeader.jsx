import FixCodeButton from "../ActionButtons/FixCodeButton";
import ReviewCodeButton from "../ActionButtons/ReviewCodeButton";
import { languages } from "../../constants/languages";
import LanguageSelector from "./LanguageSelector";

function EditorHeader({ selectedOption, setSelectedOption, darkMode, loading, fixing, onFix, onReview }) {
  const disabled = loading || fixing;
  return <div className={`tabs !mb-1 flex h-[40px] items-center justify-between border-b !px-5 transition-colors duration-200 ${darkMode ? "border-[#27272a] bg-[#151517]" : "border-zinc-300 bg-white"}`}>
    <LanguageSelector selectedOption={selectedOption} setSelectedOption={setSelectedOption} options={languages} darkMode={darkMode} />
    <div className="flex items-center gap-3"><div className="flex gap-1.5"><span className="h-3 w-3 rounded-full bg-orange-400" /><span className="h-3 w-3 rounded-full bg-white/70" /><span className="h-3 w-3 rounded-full bg-yellow-300" /></div><div className={`h-5 w-px ${darkMode ? "bg-[#27272a]" : "bg-zinc-300"}`} /><span className={`text-sm font-medium ${darkMode ? "text-zinc-400" : "text-zinc-600"}`}>Code Editor</span></div>
    <FixCodeButton onClick={onFix} loading={fixing} disabled={disabled} darkMode={darkMode} />
    <ReviewCodeButton onClick={onReview} loading={loading} disabled={disabled} darkMode={darkMode} />
  </div>;
}
export default EditorHeader;

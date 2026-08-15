import ResponseHeader from "./ResponseHeader";
import LoadingState from "./LoadingState";
import ResponseContent from "./ResponseContent";

function ResponsePanel({ response, darkMode, loading, fixing }) {
  return <section className={`right h-[101%] w-[50%] overflow-y-auto p-[10px] ${darkMode ? "border-[#27272a] bg-[#111113]" : "border-zinc-300 bg-[#fafafa]"}`}><ResponseHeader darkMode={darkMode} /><div className="flex-1 overflow-y-auto p-4"><LoadingState loading={loading} fixing={fixing} />{!loading && !fixing && <ResponseContent response={response} darkMode={darkMode} />}</div></section>;
}
export default ResponsePanel;

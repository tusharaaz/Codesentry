import ResponseHeader from "./ResponseHeader";
import LoadingState from "./LoadingState";
import ResponseContent from "./ResponseContent";

function ResponsePanel({ response, darkMode, loading, fixing }) {
  return <section className={`right flex h-[55vh] min-h-[450px] w-full shrink-0 flex-col overflow-y-auto overflow-x-hidden p-2 sm:p-[10px] lg:h-[calc(100vh-80px)] lg:w-1/2 ${darkMode ? "bg-[#111113]" : "bg-[#fafafa]"}`}><ResponseHeader darkMode={darkMode} /><div className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden p-3 sm:p-4"><LoadingState loading={loading} fixing={fixing} />{!loading && !fixing && <ResponseContent response={response} darkMode={darkMode} />}</div></section>;
}
export default ResponsePanel;

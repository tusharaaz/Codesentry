import Select from "react-select";

function LanguageSelector({ selectedOption, setSelectedOption, options, darkMode }) {
  const styles = {
    control: (base, state) => ({ ...base, backgroundColor: darkMode ? "#1e1e1e" : "#ffffff", borderColor: state.isFocused ? "#9333ea" : darkMode ? "#3f3f46" : "#d4d4d8", boxShadow: state.isFocused ? "0 0 0 1px #9333ea" : "none", color: darkMode ? "#ffffff" : "#18181b", width: "clamp(7.5rem, 20vw, 12.5rem)", cursor: "pointer", "&:hover": { borderColor: "#9333ea" } }),
    menu: (base) => ({ ...base, backgroundColor: darkMode ? "#1e1e1e" : "#ffffff", border: `1px solid ${darkMode ? "#3f3f46" : "#d4d4d8"}`, zIndex: 100 }),
    option: (base, state) => ({ ...base, backgroundColor: state.isSelected ? "#9333ea" : state.isFocused ? (darkMode ? "#2d2d2d" : "#f4f4f5") : (darkMode ? "#1e1e1e" : "#ffffff"), color: darkMode ? "#ffffff" : "#18181b", cursor: "pointer", "&:active": { backgroundColor: "#9333ea" } }),
    singleValue: (base) => ({ ...base, color: darkMode ? "#ffffff" : "#18181b" }), placeholder: (base) => ({ ...base, color: darkMode ? "#a1a1aa" : "#71717a" }), input: (base) => ({ ...base, color: darkMode ? "#ffffff" : "#18181b" }),
    dropdownIndicator: (base, state) => ({ ...base, color: state.isFocused ? "#9333ea" : (darkMode ? "#a1a1aa" : "#71717a"), "&:hover": { color: "#9333ea" } }), indicatorSeparator: (base) => ({ ...base, backgroundColor: darkMode ? "#3f3f46" : "#d4d4d8" }),
  };
  return <div className="min-w-0"><Select value={selectedOption} onChange={setSelectedOption} options={options} styles={styles} menuPlacement="auto" menuPosition="fixed" aria-label="Select programming language" /></div>;
}
export default LanguageSelector;

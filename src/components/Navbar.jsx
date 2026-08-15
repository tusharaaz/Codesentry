import { Brain } from "lucide-react";
import { Moon, Sun } from "lucide-react";


const Navbar = ({ darkMode, toggleTheme }) => {
  return (
    <>
      <div
        className={`nav flex h-22.5 items-center justify-between px-4 transition-colors duration-200 md:px-37.5 ${darkMode ? "bg-zinc-900" : "border-b border-zinc-300 bg-white"}`}
        style={{ padding: "0 150px" }}
      >
        <div className="logo flex items-center gap-2.5">
          <Brain size={40} color="#9333ea" />
          <span className={`ml-2 text-2xl font-bold ${darkMode ? "text-white" : "text-zinc-900"}`}>CodeSentry</span>
        </div>
        <div className="icons flex items-center gap-5">
          <button
            type="button"
            onClick={toggleTheme}
            title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            className={`flex h-10 w-10 items-center justify-center rounded-md border transition-colors duration-200 hover:border-purple-500 hover:bg-purple-500/10 ${darkMode ? "border-zinc-700 bg-zinc-800 text-white" : "border-zinc-300 bg-zinc-50 text-zinc-800"}`}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

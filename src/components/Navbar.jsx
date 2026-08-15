import { Brain } from "lucide-react";
import { Moon, Sun } from "lucide-react";


const Navbar = ({ darkMode, toggleTheme }) => {
  return (
    <>
      <nav className={`nav flex h-[72px] items-center justify-between px-4 transition-colors duration-200 sm:px-6 lg:px-12 2xl:px-20 ${darkMode ? "bg-zinc-900" : "border-b border-zinc-300 bg-white"}`}>
        <div className="logo flex min-w-0 items-center gap-2 sm:gap-2.5">
          <Brain className="shrink-0" size={32} color="#9333ea" />
          <span className={`truncate text-xl font-bold sm:text-2xl ${darkMode ? "text-white" : "text-zinc-900"}`}>CodeSentry</span>
        </div>
        <div className="icons ml-3 flex shrink-0 items-center">
          <button
            type="button"
            onClick={toggleTheme}
            title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            className={`flex h-10 w-10 items-center justify-center rounded-md border transition-colors duration-200 hover:border-purple-500 hover:bg-purple-500/10 ${darkMode ? "border-zinc-700 bg-zinc-800 text-white" : "border-zinc-300 bg-zinc-50 text-zinc-800"}`}
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

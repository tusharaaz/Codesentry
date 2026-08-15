import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import CodeEditorSection from "./components/CodeEditor/CodeEditor";
import ResponsePanel from "./components/ResponsePanel/ResponsePanel";

import { languages } from "./constants/languages";
import { useTheme } from "./hooks/useTheme";

import {
  fixCode as requestFixCode,
  reviewCode as requestReviewCode,
} from "./services/codeService";

const App = () => {
  const { darkMode, toggleTheme } = useTheme();

  const [selectedOption, setSelectedOption] = useState(
    languages[0]
  );

  const [code, setCode] = useState(
    "// Start coding..."
  );

  const [response, setResponse] = useState("");

  const [loading, setLoading] = useState(false);

  const [fixing, setFixing] = useState(false);

  // ==========================================
  // REVIEW CODE
  // ==========================================

  const handleReviewCode = async () => {
    if (!code.trim()) {
      setResponse("Please write some code first.");
      return;
    }

    setResponse("");
    setLoading(true);

    try {
      const data = await requestReviewCode(
        code,
        selectedOption.label
      );

      if (!data?.response) {
        throw new Error(
          "The review response was empty."
        );
      }

      setResponse(data.response);

    } catch (error) {
      console.error(
        "Code review failed:",
        error
      );

      setResponse(
        error.message ||
          "Something went wrong while reviewing the code."
      );

    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // FIX CODE
  // ==========================================

  const handleFixCode = async () => {
    if (!code.trim()) {
      setResponse("Please write some code first.");
      return;
    }

    setResponse("");
    setFixing(true);

    try {
      const data = await requestFixCode(
        code,
        selectedOption.label
      );

      if (!data?.code) {
        throw new Error(
          "The corrected code response was empty."
        );
      }

      // Update Monaco Editor
      setCode(data.code);

      setResponse(
        "### ✓ Code Fixed\n\nThe identified issues have been corrected."
      );

    } catch (error) {
      console.error(
        "Code fixing failed:",
        error
      );

      setResponse(
        error.message ||
          "Something went wrong while fixing the code."
      );

    } finally {
      setFixing(false);
    }
  };

  return (
    <div
      className={`min-h-screen overflow-x-hidden transition-colors duration-200 ${
        darkMode
          ? "bg-[#0f0f11] text-white"
          : "bg-[#f4f4f5] text-zinc-900"
      }`}
    >

      {/* Navbar */}

      <Navbar
        darkMode={darkMode}
        toggleTheme={toggleTheme}
      />

      {/* Main */}

      <main className="main flex min-h-[calc(100vh-60px)] flex-col overflow-x-hidden overflow-y-auto lg:h-[calc(100vh-80px)] lg:flex-row lg:overflow-hidden">

        {/* Code Editor */}

        <CodeEditorSection
          code={code}
          setCode={setCode}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          darkMode={darkMode}
          loading={loading}
          fixing={fixing}
          onFix={handleFixCode}
          onReview={handleReviewCode}
        />

        {/* Response */}

        <ResponsePanel
          response={response}
          darkMode={darkMode}
          loading={loading}
          fixing={fixing}
        />

      </main>

    </div>
  );
};

export default App;

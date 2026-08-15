import { GoogleGenAI } from "@google/genai";

function getClient() {
  if (!process.env.GEMINI_API_KEY)
    throw new Error("Gemini API key is not configured.");
  return new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
}

export async function reviewCodeWithGemini(code, language) {
  const result = await getClient().models.generateContent({
    model: "gemini-3.6-flash",
    contents: `You are an expert-level software developer and senior code reviewer reviewing a professional GitHub pull request. Review this ${language} code in a beginner-friendly but technically accurate way. Include exactly these areas: 1. Quality Rating (Better, Good, Normal, or Bad), 2. Code Explanation, 3. Bugs and Logical Errors, 4. Syntax Errors, 5. Runtime Errors, 6. Code Quality, 7. Performance, 8. Security, 9. Improvements, and 10. Solutions.\n\nProgramming Language: ${language}\n\nCode:\n\`\`\`\n${code}\n\`\`\``,
  });
  return result.text?.trim();
}

export async function fixCodeWithGemini(code, language) {
  const result = await getClient().models.generateContent({
    model: "gemini-3.6-flash",
    contents: `You are an expert ${language} developer. Fix syntax errors, logical errors, and runtime issues where possible. Improve only obvious code-quality problems, preserve original functionality, avoid unnecessary changes, and never change the programming language. Return ONLY corrected source code: no Markdown, code fences, explanations, summary, or introductory text.\n\nProgramming Language: ${language}\n\nOriginal Code:\n${code}`,
  });
  return result.text;
}

import { fixCodeWithGemini, reviewCodeWithGemini } from "../services/geminiService.js";
import { cleanCodeResponse } from "../utils/cleanCodeResponse.js";

function validateRequest(req, res) {
  const { code, language } = req.body ?? {};
  if (typeof code !== "string" || !code.trim() || typeof language !== "string" || !language.trim()) {
    res.status(400).json({ success: false, message: "Code and language are required." });
    return null;
  }
  return { code, language };
}

export async function reviewCode(req, res) {
  const request = validateRequest(req, res); if (!request) return;
  try { const response = await reviewCodeWithGemini(request.code, request.language); if (!response) throw new Error("Empty Gemini response"); res.json({ success: true, response }); }
  catch (error) { console.error("Review request failed:", error); res.status(500).json({ success: false, message: "Failed to review code." }); }
}

export async function fixCode(req, res) {
  const request = validateRequest(req, res); if (!request) return;
  try { const code = cleanCodeResponse(await fixCodeWithGemini(request.code, request.language) || ""); if (!code) throw new Error("Empty Gemini response"); res.json({ success: true, code }); }
  catch (error) { console.error("Fix request failed:", error); res.status(500).json({ success: false, message: "Failed to fix code." }); }
}

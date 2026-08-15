export function cleanCodeResponse(response) {
  let fixedCode = response.trim();
  fixedCode = fixedCode.replace(/^```[\w+#.-]*\s*/i, "");
  fixedCode = fixedCode.replace(/\s*```$/i, "");
  return fixedCode.trim();
}

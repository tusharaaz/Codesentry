const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

async function sendCodeRequest(
  endpoint,
  code,
  language,
  fallbackMessage
) {
  let response;

  try {
    response = await fetch(`${API_BASE_URL}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code,
        language,
      }),
    });
  } catch (error) {
    throw new Error(
      "Unable to connect to the review service."
    );
  }

  const data = await response.json().catch(() => ({}));

  if (!response.ok || !data.success) {
    throw new Error(
      data.message || fallbackMessage
    );
  }

  return data;
}

export const reviewCode = (code, language) =>
  sendCodeRequest(
    "review",
    code,
    language,
    "Failed to review code."
  );

export const fixCode = (code, language) =>
  sendCodeRequest(
    "fix",
    code,
    language,
    "Failed to fix code."
  );
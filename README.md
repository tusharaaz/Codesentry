# CodeSentry 🛡️

An AI-powered code review tool. Paste in your code, get instant feedback and fixes — powered by Google's Gemini API, with a React/Vite frontend and a secure Express backend that keeps your API key safely server-side.

🔗 **Live demo:** [codesentry-six.vercel.app](https://codesentry-six.vercel.app)

## ✨ Features

- 🔍 **AI code review** — submit a code snippet and get structured feedback from Gemini
- 🛠️ **AI auto-fix** — request a corrected version of your code with issues resolved
- 🔐 **Secure by design** — Gemini API calls happen only on the server; the key is never exposed to the browser or bundled into frontend code
- 🎨 **Modern editor UI** — clean, themeable code editor experience built with React
- ⚡ **Fast dev experience** — Vite-powered frontend with HMR

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React + Vite |
| Backend | Node.js + Express |
| AI | Google Gemini API |
| Linting | ESLint |
| Deployment | Vercel |

## 📁 Project Structure

```
Codesentry/
├── public/              # Static assets
├── src/                 # React frontend
│   ├── editor/           # Code editor component
│   ├── action-button/    # Review / Fix action triggers
│   ├── response-panel/   # Displays AI review/fix output
│   ├── theme-hook/       # Theme (light/dark) logic
│   ├── language-constant/# Supported language definitions
│   └── api-service/      # Frontend service layer for calling the backend
├── server/              # Express backend
│   ├── .env             # Gemini API key (never committed — see setup below)
│   └── ...              # Gemini prompt handling, validation, response cleanup
├── index.html
├── vite.config.js
├── eslint.config.js
└── package.json
```

> The backend is solely responsible for talking to Gemini — prompts, request validation, and cleanup of returned code fences all live in `server/`, never in the client.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- A [Google Gemini API key](https://ai.google.dev/)

### Installation & Setup

CodeSentry runs as two processes: the Vite frontend and the Express backend.

1. Clone the repository
   ```bash
   git clone https://github.com/tusharaaz/Codesentry.git
   cd Codesentry
   ```

2. Install frontend dependencies
   ```bash
   npm install
   ```

3. Install backend dependencies
   ```bash
   cd server
   npm install
   cd ..
   ```

4. Configure your Gemini API key

   Copy the included placeholder env file in `server/` and replace the placeholder with your own key:
   ```bash
   cd server
   cp .env.example .env   # or rename the included placeholder file
   ```
   Then edit `server/.env`:
   ```env
   GEMINI_API_KEY=YOUR_NEW_API_KEY
   ```

   ⚠️ **Never** place this key in a Vite environment variable (e.g. `VITE_*`) or anywhere in frontend source — it must stay server-side only.

5. Run both processes (in two separate terminals)

   **Terminal 1 — frontend:**
   ```bash
   npm run dev
   ```

   **Terminal 2 — backend:**
   ```bash
   cd server
   npm run dev
   ```

6. Open the app in your browser at the local URL printed by Vite (typically `http://localhost:5173`).

## 🔌 API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/review` | Submits code for AI review and returns structured feedback |
| `POST` | `/api/fix` | Submits code and returns an AI-corrected version |

## 🔐 Security Notes

- The Gemini API key lives only in `server/.env` and is read exclusively by the Express backend.
- All AI requests are proxied through the backend — the frontend never talks to Gemini directly.
- If you rotate your Gemini key, update `server/.env` and restart the backend process.

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## 📄 License

This project is currently unlicensed. Consider adding a [LICENSE](https://choosealicense.com/) file (e.g. MIT) to clarify how others may use your code.

## 👤 Author

**Tushar Biswas** — [@tusharaaz](https://github.com/tusharaaz)

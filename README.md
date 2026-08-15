# CodeSentry

CodeSentry is a React/Vite code reviewer with an Express API that keeps Gemini credentials on the server.

## Run locally

In one terminal:

```bash
npm run dev
```

In another terminal:

```bash
cd server
npm install
npm run dev
```

Create `server/.env` from the included placeholder and replace `YOUR_NEW_API_KEY` with a newly generated Gemini key. Never place this key in a Vite environment variable or frontend source.

## Architecture

The React UI is composed from editor, action-button, response-panel, theme-hook, language-constant, and API-service modules. The backend exposes `POST /api/review` and `POST /api/fix`; Gemini calls, prompts, validation, and fixed-code fence cleanup are handled only in `server/`.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

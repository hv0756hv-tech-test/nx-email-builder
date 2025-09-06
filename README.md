# Nx Email Builder

This is an Nx workspace combining Angular + React + Email Builder JS.

## Features
- Angular 20 app bootstrapped with Nx
- Angular app contains a button that toggles the React Email Builder
- React Email Builder (`email-builder-js`) is wrapped as a Web Component
- Mock backend with `angular-in-memory-web-api`

## Run in StackBlitz
1. Upload this repo to GitHub
2. Open: `https://stackblitz.com/github/<your-username>/nx-email-builder`
3. In terminal, run:
   ```bash
   npx nx serve angular-app
   ```

## Run locally
```bash
npm install
npx nx serve angular-app
```

## Folder structure
- `apps/angular-app`: Angular app
- `libs/ui-email`: React wrapper for Email Builder JS

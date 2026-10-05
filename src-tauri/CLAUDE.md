# DeskBuddy

A small always-on-top desktop pad (like a sticky note) where I add tasks
in seconds and get reminded at the right time. Later: an edge-docked
auto-hiding sidebar, an AI daily summary, and an Android version.

## Stack
- Tauri 2 (Rust core) + React + JavaScript + Vite
- Local storage: SQLite (not added yet)
- Target: macOS first, then Windows, then Android

## Commands
- Install: `npm install`
- Run in dev: `npm run tauri dev` (first run compiles Rust and is slow)

## Rules
- Make one small change at a time and explain it briefly.
- Ask before adding any new dependency or plugin.
- Keep data and logic code (storage, reminders, API calls) in separate
  files from the React screens, so it can be reused on Android.
- Never put API keys or secrets in code. Use `.env` files, which are
  git-ignored.
- Do not change `tauri.conf.json` without telling me what and why.

## Current status
Fresh Tauri + React starter. No features built yet.
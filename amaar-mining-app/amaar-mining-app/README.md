# Amaar Mining · Documentation Suite
### Desktop App — Report Generator & Meeting Minutes

---

## What's Included

| File | Purpose |
|------|---------|
| `main.js` | Electron entry point (app window config) |
| `package.json` | Project dependencies & build config |
| `src/index.html` | Home launcher screen |
| `src/report.html` | Report Generator tool |
| `src/minutes.html` | Meeting Minutes tool |

---

## Setup Guide (Step by Step)

### Step 1 — Install Node.js
> If you already have Node.js, skip to Step 2.

1. Go to https://nodejs.org
2. Download the **LTS** version (recommended)
3. Run the installer — accept all defaults
4. Open a terminal and confirm it works:
   ```
   node --version
   npm --version
   ```

---

### Step 2 — Open the Project in VS Code

1. Open **VS Code**
2. Go to **File → Open Folder**
3. Select the `amaar-mining-app` folder
4. Open the integrated terminal: **Terminal → New Terminal**

---

### Step 3 — Install Dependencies

In the VS Code terminal, run:

```bash
npm install
```

This will download Electron (~100 MB). Wait for it to finish.

---

### Step 4 — Run the App

```bash
npm start
```

The Amaar Mining Desktop App window will open. Done!

---

## Daily Use (After Setup)

Every time you want to open the app:

1. Open VS Code
2. Open the terminal (`Ctrl + `` ` ``)
3. Run: `npm start`

Or you can create a simple launcher — see the **Optional: Create a Shortcut** section below.

---

## Optional: Create a Desktop Shortcut (Windows)

Create a file called `launch.bat` in the project folder:

```bat
@echo off
cd /d "%~dp0"
npx electron .
```

Then right-click it → **Send to → Desktop (create shortcut)**.

---

## Optional: Create a Desktop Shortcut (Mac/Linux)

Create a file called `launch.sh`:

```bash
#!/bin/bash
cd "$(dirname "$0")"
npx electron .
```

Make it executable:
```bash
chmod +x launch.sh
```

---

## Building a Standalone .exe (Windows Installer)

If you want to create an installable `.exe` that doesn't need VS Code:

```bash
npm install --save-dev electron-builder
npm run build
```

The installer will appear in the `dist/` folder.

> **Note:** Building requires ~500 MB disk space and takes a few minutes.

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| `npm: command not found` | Install Node.js from nodejs.org |
| `electron: command not found` | Run `npm install` first |
| App opens but tools don't load | Make sure all files are in the `src/` folder |
| PDF download doesn't work | Use the Print dialog and choose "Save as PDF" |
| Fonts look wrong | You need an internet connection (Google Fonts) |

---

## Project Structure

```
amaar-mining-app/
├── main.js              ← Electron window (don't edit unless needed)
├── package.json         ← App config & scripts
├── README.md            ← This file
└── src/
    ├── index.html       ← Home launcher
    ├── report.html      ← Report Generator
    └── minutes.html     ← Meeting Minutes
```

---

*Amaar Mining Co. · Internal Documentation Suite · v1.0*

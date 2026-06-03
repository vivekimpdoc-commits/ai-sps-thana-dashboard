# 📊 AI-SPS Thana Dashboard (स्मार्ट पुलिसिंग सिस्टम)

A premium, modern web dashboard for police station (Thana) operations management in India, updated under the new legislative frameworks (Bharatiya Nyaya Sanhita - BNS, Bharatiya Nagarik Suraksha Sanhita - BNSS, and Bharatiya Sakshya Adhiniyam - BSA). Equipped with **Gemini AI** integrations (Crime GPT, AI Duty Scheduler, Legal Consultant).

---

## ✨ Features

- **🎙️ Crime GPT (FIR Assistant)**: Converts spoken or raw text complaint descriptions into structured First Information Report (FIR) drafts in Hindi and English with BNS legal section mappings.
- **🔐 Smart Lockup Guard**: Tracks custody inmates, health statuses, belonging manifests, and safety checklists.
- **🛡️ Armoury AI Tracker**: Logs weapons (Pistols, Rifles, Riot Control) status and coordinates field assignments.
- **📦 Evidence Malkhana Vault**: Tracks seized exhibits with case references, tag IDs, and storage safety vaults.
- **🗓️ Smart Roster Scheduling**: Optimizes police personnel shifts and duties dynamically using AI.
- **📖 Digital Beat Book**: Logs field patrol statuses and hotspots maps in live-time.

---

## 🛠️ Tech Stack

- **Frontend**: React (v19), Tailwind CSS (v4), Motion/Framer-Motion, Lucide Icons.
- **Backend**: Node.js, Express (v4), esbuild.
- **AI Engine**: Google Gemini API via `@google/genai` SDK.

---

## 🚀 Setup & Installation (Local Execution)

### Prerequisites
- Node.js (v18 or higher)
- NPM (v9 or higher)

### 1. Clone & Install Dependencies
```bash
# Clone the repository (if not already cloned)
git clone https://github.com/vivekimpdoc-commits/ai-sps-thana-dashboard.git
cd ai-sps-thana-dashboard

# Install NPM packages
npm install
```

### 2. Configure Environment Variables
Create a `.env` file in the root directory (based on `.env.example`):
```env
GEMINI_API_KEY="your-gemini-api-key-here"
APP_URL="http://localhost:3000"
```

### 3. Running the App

#### **Development Mode**
Runs the server using `tsx` and uses Vite middleware:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

#### **Production Build & Execution**
Builds the React client and compiles the backend into a CommonJS bundle (`dist/server.cjs`):
```bash
# Build & Bundle
npm run build

# Start Production Server
npm start
```

---

## ☁️ Deployment & Hosting Guide

To host this project on the web, follow these strategies:

### 1. Hosting on Render, Railway, or Glitch (Recommended for Node/Express)
Since the app features a Node/Express backend (`server.ts`) to securely connect to the Gemini API without exposing the key, static-only hosting services (like GitHub Pages) will only serve the frontend.
For a full-stack experience:
- Import this GitHub repository to [Render](https://render.com/) or [Railway](https://railway.app/).
- Set the Build Command to: `npm run build`
- Set the Start Command to: `npm start`
- Add the `GEMINI_API_KEY` to the **Environment Variables** panel in their UI.

### 2. Static Front-end Hosting + Serverless API
Alternatively, you can compile the client via `npm run build` and deploy the contents of the `dist/` directory to Vercel/Netlify, while converting the backend endpoints to serverless functions.

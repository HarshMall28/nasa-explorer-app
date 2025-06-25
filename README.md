# 🌌 NASA Explorer App — APOD & Near-Earth Objects Visualizer

This project lets you **explore NASA's Astronomy Picture of the Day (APOD)** and **visualize Near-Earth Objects (NEOs)** using real-time data from NASA's APOD and NeoWs APIs.  
It features:

- 🌠 Daily Astronomy Picture with details from NASA APOD API
- 📅 Interactive date range selection (max 7 days) for NEO data
- 🌍 3D WebGL visualization of Earth + asteroids
- ⚡ Real-time data from NASA APOD and NeoWs APIs

**Frontend:** React + Vite + TypeScript + Three.js (in `frontend/`)  
**Backend:** Node.js + Express + TypeScript (in `backend/`)

Deployed on:

- 🌐 Vercel (frontend)
- 🌐 Heroku (backend)

---

## 🌟 Live Demo

- 🌐[NASA Explorer](https://nasa-explorer-nine.vercel.app/)

---

## 📂 Project structure
```
├── frontend/
├── backend/
└── README.md
```
---

## 🚀 Local Setup Guide

### 📂 Clone the repository

```bash
git clone https://github.com/HarshMall28/nasa-explorer-app.git
cd nasa-explorer-app
```

### ⚙ Setup the backend

```bash
cd backend
npm install
```

### 👉 Create a .env file in the backend/ folder:

```bash
PORT=5150
NASA_API_KEY=your-nasa-api-key-here
NASA_BASE_URL=https://api.nasa.gov
```

Tip: You can get your NASA API key {https://api.nasa.gov/}.

### Run the backend:

```bash
npm run dev
```

### ✅ The backend will start on http://localhost:5150

### ⚙ Setup the frontend

```bash
cd ../frontend
npm install

```

### 👉 Create a .env file in the frontend/ folder:

```bash
VITE_API_URL=http://localhost:5150

```

### Run the frontend:

```bash
npm run dev
```

### ✅ The frontend will start on http://localhost:5173

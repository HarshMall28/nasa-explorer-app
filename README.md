# 🌌 NASA Explorer App — Near-Earth Objects Visualizer

This project lets you **visualize Near-Earth Objects (NEOs)** using NASA's API.  
It features:

- 📅 Interactive date range selection (max 7 days)
- 🌍 3D WebGL visualization of Earth + asteroids
- ⚡ Real-time data from NASA NeoWs API

**Frontend:** React + Vite + TypeScript + Three.js (in `frontend/`)  
**Backend:** Node.js + Express + TypeScript (in `backend/`)

Deployed on:

- 🌐 Vercel (frontend)
- 🌐 Heroku (backend)

---

## 🌟 Live Demo

- 🌐 Frontend: [NASA Explorer](https://nasa-explorer-c9y1worfj-harshs-projects-a5c8e56e.vercel.app/)
- 🌐 Backend API: [NASA Explorer API](https://nasa-api-backend-40fab7cef3b8.herokuapp.com/)

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

✅ The backend will start on http://localhost:5150

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

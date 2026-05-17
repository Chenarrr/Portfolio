# Portfolio — Chenar Abdulrazaq

Personal portfolio site. Built with React + Vite, deployed via CI to GHCR and served through the HomeLab k3s cluster.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
```

## Build

```bash
npm run build      # output → dist/
```

## Tech Stack

| Layer | Technology |
|-------|-----------|
| UI | React 19, Vite 8 |
| Styling | Tailwind CSS 4 |
| 3D | Three.js |
| Icons | react-icons 5 |
| Production | nginx (multi-stage Docker build) |
| CI | GitHub Actions → GHCR |

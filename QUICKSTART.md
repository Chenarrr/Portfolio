# 🚀 Quick Start Guide

## Prerequisites
- ✅ Docker Desktop installed and **RUNNING** (check system tray)

## Start the Portfolio

### Method 1: Using the Launcher Script (Easiest)
1. Double-click `start.bat`
2. Choose option 1 for development
3. Wait for build to complete
4. Open browser: http://localhost:5173

### Method 2: Using Command Line
```bash
# Development (with hot reload)
docker-compose up portfolio-dev

# Production (optimized)
docker-compose up portfolio-prod
```

## Access Your Portfolio
- **Development**: http://localhost:5173
- **Production**: http://localhost:8080

## Stop the Server
- Press `Ctrl + C` in terminal
- OR double-click `start.bat` → Choose option 3

## First Time Setup?
The first build takes 3-5 minutes. Subsequent starts are much faster!

---

## Common Issues

### "Docker not running" error
→ Start Docker Desktop from Start Menu

### Port already in use
→ Close any apps using port 5173/8080 or change port in docker-compose.yml

### Module not found
→ Run: `docker-compose build --no-cache portfolio-dev`

---

## Next Steps
1. ✅ Start the server
2. ✅ Open http://localhost:5173 in browser
3. ✅ Admire your portfolio! 🎉
4. 📝 Customize content (see README.md for details)

---

**Need Help?** Check the full README.md for detailed instructions!

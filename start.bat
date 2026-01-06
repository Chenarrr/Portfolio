@echo off
echo ========================================
echo   Chenar's Portfolio - Docker Launcher
echo ========================================
echo.

REM Check if Docker is running
docker info >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Docker Desktop is not running!
    echo.
    echo Please start Docker Desktop and try again.
    echo You can find Docker Desktop in your Start Menu.
    echo.
    pause
    exit /b 1
)

echo [OK] Docker is running!
echo.
echo Choose an option:
echo   1. Start Development Server (Port 5173)
echo   2. Start Production Server (Port 8080)
echo   3. Stop All Containers
echo   4. Exit
echo.

set /p choice="Enter your choice (1-4): "

if "%choice%"=="1" (
    echo.
    echo Starting Development Server...
    echo Access at: http://localhost:5173
    echo Press Ctrl+C to stop
    echo.
    docker-compose up portfolio-dev
) else if "%choice%"=="2" (
    echo.
    echo Starting Production Server...
    echo Access at: http://localhost:8080
    echo Press Ctrl+C to stop
    echo.
    docker-compose up portfolio-prod
) else if "%choice%"=="3" (
    echo.
    echo Stopping all containers...
    docker-compose down
    echo.
    echo All containers stopped!
    pause
) else if "%choice%"=="4" (
    exit
) else (
    echo.
    echo Invalid choice! Please run the script again.
    pause
)

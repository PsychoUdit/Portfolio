@echo off
echo ================================
echo Udit's Portfolio Website Setup
echo ================================
echo.

echo Step 1: Installing dependencies...
call npm install

echo.
echo Step 2: Starting development server...
echo.
echo Your portfolio will open at http://localhost:5173
echo.

call npm run dev

@echo off
REM Start the Quartz server in a new background window
start "" cmd /k "npx quartz build --serve"

REM Wait for 60 seconds
timeout /t 60 /nobreak

REM Run the Python build command
py build.py

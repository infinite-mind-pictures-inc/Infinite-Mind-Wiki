#!/bin/sh
npx quartz build --serve &
sleep 60
python3 build.py

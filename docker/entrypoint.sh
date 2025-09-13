#!/bin/bash

set -e

pm2 start /app/web/server.js --name muixstudio-website --cwd /app/web -i ${PM2_INSTANCES} --no-daemon
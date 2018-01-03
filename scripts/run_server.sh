#!/bin/bash
cd /var/www/pottypatrol
echo $PWD

ng build

pm2 start server/server.js 

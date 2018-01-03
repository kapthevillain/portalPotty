#!/bin/bash
cd /var/www/pottypatrol
echo $PWD

npm build

node server/server.js $

#!/bin/bash

su - ec2-user -c "/home/ec2-user/.nvm/versions/node/v9.3.0/bin/npm i -g pm2"
#npm i -g pm2
cd /var/www/pottypatrol
pm2 stop all


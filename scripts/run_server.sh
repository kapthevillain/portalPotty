#!/bin/bash
cd /var/www/pottypatrol
echo $PWD

# Start services
sudo service nginx start

# Start node server
su - ec2-user -c "/home/ec2-user/.nvm/versions/node/v9.3.0/bin/pm2 start /var/www/pottypatrol/server/server.js"
#pm2 start server/server.js 

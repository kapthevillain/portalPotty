#!/bin/bash
cd /var/www/pottypatrol
echo $PWD

sudo aws s3 cp s3://ppatrol/potty_nginx.conf /etc/nginx/conf.d/

# Start services
sudo service nginx start

# Start node server
su - ec2-user -c "/home/ec2-user/.nvm/versions/node/v9.*.1/bin/pm2 -f start /var/www/pottypatrol/server/server.js"

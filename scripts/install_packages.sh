#!/bin/bash
echo $PWD
cd /var/www/pottypatrol
echo $PWD
su - ec2-user -c "/home/ec2-user/.nvm/versions/node/v9.3.0/bin/npm install"
#sudo npm install

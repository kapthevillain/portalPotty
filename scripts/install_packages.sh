#!/bin/bash
echo $PWD
cd /var/www/pottypatrol
echo $PWD

sudo chown ec2-user: /var/www/pottypatrol

su - ec2-user -c "/home/ec2-user/.nvm/versions/node/v9.*.1/bin/npm --prefix /var/www/pottypatrol install"
#sudo npm install
su - ec2-user -c "(cd /var/www/pottypatrol && /home/ec2-user/.nvm/versions/node/v9.*.1/bin/ng build)"

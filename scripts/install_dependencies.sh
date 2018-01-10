#!/bin/bash

# Create pottypatrol app directory
sudo mkdir -p /var/www/pottypatrol

# Install latest NodeJS
sudo su - ec2-user -c "/home/ec2-user/.nvm/versions/node/v9.3.0/bin/npm i -g npm"

# Install Angular
sudo su - ec2-user -c "/home/ec2-user/.nvm/versions/node/v9.3.0/bin/npm i -g @angular\/cli@latest"

# Install pm2
sudo su - ec2-user -c "/home/ec2-user/.nvm/versions/node/v9.3.0/bin/npm i -g pm2"

# Install NGINX
sudo yum -y install nginx

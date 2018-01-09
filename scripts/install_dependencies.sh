#!/bin/bash

sudo su - ec2-user -c "/home/ec2-user/.nvm/versions/node/v9.3.0/bin/npm i -g npm"
# npm i -g npm
sudo su - ec2-user -c "/home/ec2-user/.nvm/versions/node/v9.3.0/bin/npm i -g @angular\/cli@latest"
# npm i -g @angular\/cli@latest
sudo su - ec2-user -c "/home/ec2-user/.nvm/versions/node/v9.3.0/bin/npm i -g pm2"


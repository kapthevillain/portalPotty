#!/bin/bash

#npm i -g pm2
#cd /var/www/pottypatrol
doesAppExist='pgrep nginx'
if [[ -n $doesAppExist ]]; then
	sudo service nginx stop
#	pm2 stop all
fi


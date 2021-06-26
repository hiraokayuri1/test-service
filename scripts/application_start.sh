#!/bin/bash

#give permission for everything in the express-app directory
sudo chmod -R 777 /home/ec2-user/test-service

echo hello1
ls

#start our node app in the background
nohup node dist/bundle.js
echo finished

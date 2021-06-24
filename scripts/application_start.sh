echo start APPLICATION_START

sudo chmod -R 777 /home/ec2-user/test-service

nohup node dist/bundle.js


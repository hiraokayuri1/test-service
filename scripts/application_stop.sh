#!/bin/bash

systemctl restart nginx
echo "Stopping any existing node servers"
# pkill node
npm stop

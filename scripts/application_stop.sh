#!/bin/bash


echo "Stopping any existing node servers"
# pkill node
npm stop
systemctl restart npm

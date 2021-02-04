#!/bin/bash
git fetch origin
git checkout origin/master
cd application/server
kill -9 $(pidof node firefox safari chrome)
nohup npm run dev &>/dev/null &

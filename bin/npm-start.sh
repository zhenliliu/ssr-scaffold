#!/usr/bin/env bash
current="`node -v`"
MIN_NODE_VERSION=10.11.0

function version_gt() { test "$(echo "$@" | tr " " "\n" | sort -V | head -n 1)" != "$1"; }

if version_gt  $MIN_NODE_VERSION ${current:1}; then
  if [ -z $(command -v nvm) ]; then
    if [ -f ~/.nvm/nvm.sh ]; then
      source ~/.nvm/nvm.sh
    else
      curl -s -o- https://raw.githubusercontent.com/creationix/nvm/v0.30.2/install.sh | bash
      source ~/.nvm/nvm.sh
      nvm install $MIN_NODE_VERSION
    fi
  fi
    echo "当前node版本不正确,当前版本为${current:1},所需版本为>=$MIN_NODE_VERSION"
    echo "正在设置node版本..."
    NODE_VERSION="`nvm ls ${MIN_NODE_VERSION}|sed 's/^[ \t]*//g'`"
  if [[ $NODE_VERSION = 'N/A' ]]; then
    echo "${MIN_NODE_VERSION}版本未安装，正在安装 ⌛️ ..."
    nvm install $MIN_NODE_VERSION
    nvm use $MIN_NODE_VERSION
  else
    nvm use $MIN_NODE_VERSION
  fi
fi
killall -v -9 node
pm2 kill 
npm install
webpack --config ./webpack.pro.js --progress --colors
pm2  start pm2.config.js --env=production

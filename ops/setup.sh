#!/bin/sh

if [[ $NODE_ENV == "production" ]]; then
    node ./dist/ops/setup/setup.js
else 
   npx ts-node -r tsconfig-paths/register ./src/ops/setup/setup.ts
fi

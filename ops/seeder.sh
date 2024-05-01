#!/bin/sh

if [[ $NODE_ENV == "production" ]]; then
    node ./dist/database/seeder/run.js
else 
   npx ts-node -r tsconfig-paths/register ./src/database/seeder/run.ts
fi

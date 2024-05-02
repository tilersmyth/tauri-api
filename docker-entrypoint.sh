#!/bin/sh
set -e

npm run typeorm migration:run -- -d ./dist/typeorm/typeorm-datasource.js
npm run start:prod

exec "$@"

# Tauri API
REST API for use with the [tauri-app repo](https://github.com/tilersmyth/tauri-app)

## Migrations
The db is synchronized in dev env so to allow us to auto generate migrations we run migrations
against the non-persisted db on port 5433
1. `npm run typeorm:migration-run`
2. `npm run typeorm:migration-generate`
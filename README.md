# Node Server Testing Guided Project

Guided project for **Node Server Testing** Module.

## Project Setup

- [ ] fork and clone this repository.
- [ ] **CD into the folder** where you cloned **your fork**.
- [ ] type `npm i` to download dependencies.
- [ ] type `npm run server` to start the API.

Please follow along as the instructor adds automated tests to the API.

## Deploy to heroku using PostgreSQL

- new app
- connect it
- add the Heroku Postgres Add On (under settings) to the application on Heroku.
- add the `pg` npm package
- configure the `production` property on the knexfile.js to use the `pg` and the `process.env.DATABASE_URL` variable as the connection.
- Resources > postgress > provision
- commit and push > should deploy
- refresh app, should still work
- Time to add postgres configuration for the database
- change knexfile
- add `pg` package
- show settings > reveal config files DATABASE_URL
commit and push 'adds production db config'
- deployed, still reading the develepment database
- open dbConfig, we use DB_ENV
- add this environment variable to heroku
- fails because hobbits table does not exist in heroku

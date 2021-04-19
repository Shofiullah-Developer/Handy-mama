# HandyMama
##Project Details:
    npm start: node backend/server
    npm run server: nodemon backend/server
    npm run client: npm start --prefix frontend
    npm run dev: concurrently npm run server npm run client
    npm run data:import: node backend seeder
    npm run data:destroy: node backend/seeder -d
    heroku-postbuild: NPM_CONFIG_PRODUCTION=false npm install --prefix frontend && npm run build --prefix fronten
  use DB: Mongodb
### Live Link:https://handymamaapp.herokuapp.com/

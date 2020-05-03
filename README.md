# Profesora (Work in progress)

Open source platform tailored for livestreaming teacher taking classes

Based on:

1. Hasura (Postgres/ GQL)
2. Auth0
3. Typescript React
4. Akka Http (Not started)
5. AntMedia Community (Streaming) - (Not started)

Envisioned:

## Architecture
![Architecture](https://github.com/akshay5995/profesora/blob/master/docs/architecture.jpg?raw=true)

## ER Diagram (WIP)
![ER Diagram](https://github.com/akshay5995/profesora/blob/master/docs/ER.jpg?raw=true)

# Development (Client Side)
Deploy Hasura instance after creating your tables based on ER diagram and import `metadata.json` from `hasura` folder.
 
Make sure you replace configs in right places. Search For `REPLACE CONFIG:` in your fav IDE :D

Rename `.env.example` to `.env` for your config to be picked up by `parcel`

`yarn`

`yarn start`

`yarn generate` Typescript bindings from hasura server

The following files are tailored for heroku dyno deployment

1. `client/Dockerfile`
2. `client/default.conf.template`
3. `client/ngnix.conf`


### Note: Susceptible to frequent change and docs will be updated along with code changes

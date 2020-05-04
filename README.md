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

Deploy Hasura instance.

Migration Guide:

1. Install `hasura-cli`
2. Add your config in `hasura/config.yaml`
3. Run `hasura migrate apply --admin-secret your-secret` to add the relations
4. Run `hasura metadata apply -admin-secret your-secret` to add the metadata tabel permssions etc.
5. Go into hasura console -> `Data` and track relations and primary keys which are listed under `Untracked` section.

Make sure you replace configs in right places. Search For `REPLACE CONFIG` in your fav IDE :D

Rename `.env.example` to `.env` for your config to be picked up by `parcel`

`yarn`

`yarn generate` Typescript bindings from hasura server

`yarn start`

The following files are tailored for heroku dyno deployment

1. `client/Dockerfile`
2. `client/default.conf.template`
3. `client/ngnix.conf`

Deployment in heroku:

Install heroku cli

1. `heroku container:push web` Build and push image to registry
2. `heroku container:release web` Release the site

### Note: Susceptible to frequent change and docs will be updated along with code changes

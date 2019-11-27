..
# ![GA Logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) 

# Project 3 Backend Starter Code

#### Project 3 Starter Code Links

- [Node/Express Backend Starter App](https://git.generalassemb.ly/Interapt/project3-backend-starter)
- [React Frontend Starter App](https://git.generalassemb.ly/Interapt/project3-frontend-starter)

<br>

## Express Backend Set-up

#### To Install

- Fork and clone `https://git.generalassemb.ly/Interapt/project3-backend-starter`
- `cd` into the app and `npm install`
- From the command line run `createdb project3-backend-dev`
- Run `npm start`. 


#### Starter End Points

You have two starter endpoints:

- `GET` `api/users`
- `POST` `api/users`

- Your `config/config/json` is set-up to access the Heroku Postgres production database instance.

```js
{
  "development": {
    "database": "project3-backend-dev",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "use_env_variable": "DATABASE_URL",
    "dialect": "postgres"
  }
}
```

- This app also has `cors` and `nodemon` installed.
- [Sequelize Cheatsheet](https://gist.github.com/vapurrmaid/a111bf3fc0224751cb2f76532aac2465)


#### Test the endpoints with Postman

![](https://i.imgur.com/MhV0c4U.png)

<br>

## React Frontend Set-up

#### To Install

- Fork and clone `https://git.generalassemb.ly/Interapt/project3-frontend-starter`
- `cd` into the app and `npm install`
- Run `npm start`. You should see this in the browser:

![](https://i.imgur.com/7CLkUI4.png)


#### Axios

The app has axios installed. You have one method called `getUsers` that hits your Express backend `api/users`. Check the browser console for the response.


<br>

# Heroku 

## Create Free Heroku Account

[Heroku Homepage](https://devcenter.heroku.com/)

![](https://i.imgur.com/hPAtUfN.png)

## Install the Heroku CLI

[Install Docs](https://devcenter.heroku.com/articles/heroku-cli)

[Heroku Node/Express Deployment Docs](https://devcenter.heroku.com/articles/getting-started-with-nodejs?singlepage=true)


- Also syncing the Sequelize models so that the tables will automatically be created:

```js
var db = require('./models');
db.sequelize.sync();
```

<br>
## Connect Heroku DB to PG Admin

#### Heroku Stuff

- Right click on `Servers` and select Create > Server...

![](https://i.imgur.com/JWvG2Nz.png)

- On your Heroku App dashboard, click on Heroku Postgres

![](https://i.imgur.com/5l5Gq6s.png)

- On the next screen choose Settings, then View Database Credentials

![](https://i.imgur.com/iikLgfj.png)

#### Database URL

For security, we'll add the Heroku Postgres URL add heroku env variable to heroku dashboard

#### PG Admin Stuff

- In the `Name` field, enter the name of your database.

![](https://i.imgur.com/Lzp0zlC.png)

- In the `Connection` Tab:
	
	- `Hostname/Address` is your Heroku Postgres `Host`
	- `Maintenance Database` is your Heroku Postgres `Database`
	- `Username` is your Heroku Postgres `User`

![](https://i.imgur.com/hQQB2MM.png)


<br>

#### Connect to your production server Terminal

Run this command from your back end app folder: `heroku run bash`

From here you can run commands like `sequelize db:migrate` or `sequelize db:seed:all`

https://project3-backend-test.herokuapp.com/users

## Additional Resources


- [React Relative Paths](https://create-react-app.dev/docs/deployment#building-for-relative-paths)

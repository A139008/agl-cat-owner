# AglCatOwner

Code challange for http://agl-developer-test.azurewebsites.net/

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.7.2.

## How to Run this Application

Step 1: install [Node.js](https://nodejs.org/en/download/) for your platform (> v8.x recommended).

Step 2: Check _npm_ is avalable and in PATH by running `npm -v` and then install _yarn_ & _http-server_ by running `npm -g install yarn http-server`

Step 3: Move to the downloaded directory (`cd agl-cat-owner`) and run `yarn install` to download all dependent node modules to run this application.()

Step 4: Then, run `ng build --prod`. The build artifacts will be stored in the **www** directory and it'll create a self-contained html application inside.

Step 5: Move to **www** directory (`cd www`) and start a server by running `http-server -g -p 81`

e.g. Suppose you've downloaded the code in directory **agl-cat-owner** and installed Node.js

```
npm -v
npm -g install yarn http-server
cd agl-cat-owner
yarn install
ng build --prod
cd www
http-server -g -p 81
```

Navigate to `http://localhost:81/` and enjoy the output.

## Developer Section

### Development server

Run `ng serve --host 0.0.0.0 --port 81` or `npm start` for a dev server. Navigate to `http://localhost:81/`. The app will automatically reload if you change any of the source files.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

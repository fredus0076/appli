# Appli

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

build pour un micro service
ng build --output-hashing=none

lancer un server du dist créer
npm i lite-server --save-dev
npx lite-server --baseDir="dist/appli"

dans l'application de reception dans son index.html ajouter ceci
<script src="http://localhost:3000/runtime.js"></script>
  <script src="http://localhost:3000/polyfills.js"></script>
  <script src="http://localhost:3000/main.js"></script>

Ajouter dans le appModule du recepteur 
schemas: [[CUSTOM_ELEMENTS_SCHEMA]
cela permet d'appeler les composant importer partout dans l'application


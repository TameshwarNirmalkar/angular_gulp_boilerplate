# Angular Gulp Boilerplate

[![Build Status](https://travis-ci.org/1oginov/Angular-Gulp-Boilerplate.svg?branch=master)](https://travis-ci.org/1oginov/Angular-Gulp-Boilerplate)
[![devDependencies Status](https://david-dm.org/1oginov/Angular-Gulp-Boilerplate/dev-status.svg)](https://david-dm.org/1oginov/Angular-Gulp-Boilerplate?type=dev)
[![Greenkeeper badge](https://badges.greenkeeper.io/1oginov/Angular-Gulp-Boilerplate.svg)](https://greenkeeper.io/)

Clean Angular 1.6 boilerplate with basic Gulp tasks designed to automate your daily development routine such as
templates, scripts, styles and translations concatenation, uglification and minimisation.

As a result your entire Angular project will be compiled to five files (`index.html`, `app.js` and `vendor.js`,
`app.css` and `vendor.css`), translations files and source maps if needed.

![Teaser](https://raw.githubusercontent.com/1oginov/Angular-Gulp-Boilerplate/master/misc/teaser.png)

## What you will get?

![Angular](https://raw.githubusercontent.com/1oginov/Angular-Gulp-Boilerplate/master/misc/angular.png)
![npm](https://raw.githubusercontent.com/1oginov/Angular-Gulp-Boilerplate/master/misc/npm.png)
![Gulp](https://raw.githubusercontent.com/1oginov/Angular-Gulp-Boilerplate/master/misc/gulp.png)
![Bower](https://raw.githubusercontent.com/1oginov/Angular-Gulp-Boilerplate/master/misc/bower.png)
![SASS](https://raw.githubusercontent.com/1oginov/Angular-Gulp-Boilerplate/master/misc/sass.png)
![ESLint](https://raw.githubusercontent.com/1oginov/Angular-Gulp-Boilerplate/master/misc/eslint.png)
![Browsersync](https://raw.githubusercontent.com/1oginov/Angular-Gulp-Boilerplate/master/misc/browsersync.png)
![Normalize](https://raw.githubusercontent.com/1oginov/Angular-Gulp-Boilerplate/master/misc/normalize.png)
![Autoprefixer](https://raw.githubusercontent.com/1oginov/Angular-Gulp-Boilerplate/master/misc/autoprefixer.png)
![UI-Router](https://raw.githubusercontent.com/1oginov/Angular-Gulp-Boilerplate/master/misc/ui-router.png)
![angular-translate](https://raw.githubusercontent.com/1oginov/Angular-Gulp-Boilerplate/master/misc/angular-translate.png)

**Angular 1.6** with **UI-Router** and **angular-translate**, automated services injecting by **ng-annotate**, gathering
HTML templates into **$templateCache** and making **source maps** for debug.

**SASS** compiler with **Autoprefixer** and making source maps for development and production versions,
**Normalize.css**.

**ESLint** with Angular plugin for code linting. 

**Bower** and **Wiredep** for automated injecting vendor dependencies.

**Browsersync** for comfortable development and live reloading.

HTML, JS and CSS concatenation, uglification, minimisation and adding hash like app-**442e02212b**.js to avoid caching
for production version.

Dynamic internationalization and localization with translation files separated by the components. Gulp tasks can help
you with translation files concatenation that will be used dynamically by **angular-translate**. **angular-i18n** and
**angular-dynamic-locale** implements native dynamic Angular localization.

## Quick start

### Dependencies

Boilerplate needs `npm` and `bower` to work. For running gulp tasks from command line, install it globally:

```sh
$ npm install -g gulp
```

### Install

Clone repository from GitHub:

```sh
$ git clone https://github.com/TameshwarNirmalkar/angular_gulp_boilerplate NewProject
```

Jump into `NewProject` directory and install `npm` dependencies:

```sh
$ cd NewProject
$ npm install
```

Next, install `bower` dependencies:

```sh
$ bower install
```

And that's it! Now, you can use gulp task to check if everything is awesome:

```sh
$ gulp serve
```

Your default browser will be launched at `http://localhost:3000` serving your project.

## Gulp tasks

### Main tasks

* `gulp default` is for production, cleans `dist` folder and builds your entire project into it;
* `gulp serve` is for development, launches your project at `http://localhost:3000` and watches for changes in sources.

## Credits

Awesome [generator-gulp-angular](https://github.com/Swiip/generator-gulp-angular) was used as a basis for this project,
specifically Gulp tasks. At the moment this generator is unmaintained, but I try to provide new functional and keep all
dependencies updated.

[![Build Status](https://travis-ci.org/andela-hpopoola/headlines.svg?branch=develop)](https://travis-ci.org/andela-hpopoola/headlines)
[![Coverage Status](https://coveralls.io/repos/github/andela-hpopoola/headlines/badge.svg?branch=fix-improve-application-ui-145086165)](https://coveralls.io/github/andela-hpopoola/headlines?branch=fix-improve-application-ui-145086165)
[![Code Climate](https://codeclimate.com/github/andela-hpopoola/headlines/badges/gpa.svg)](https://codeclimate.com/github/andela-hpopoola/headlines)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()

# Headlines
> Headlines is simple a front-end application that takes advantage of the functionalities NewsAPI provides.

The application is similar to a modern RSS feed that allows people to view all headlines from different news sources and link to the original articles/news on those sources. A live version this project can be viewed via [link](http://haruna-headlines.herokuapp.com).


## Getting Started

1. Clone the repository:
```
https://github.com/andela-hpopoola/headlines.git
```
2. Navigate into the cloned repository folder

3. Install dependencies:
```
$ npm install
```

4. Start the application:

```
http://localhost:3000/
```


## Testing the Application
The application is tested with mocha, enzyme, istanbul and React Test Utils. The application can be tested via
```
$ npm test
```

## Technologies

This project built with React and Flux architecture. Nodejs and Express are used for server side development. The application is styled with SASS and bundled with Webpack.

1. React & Flux: React is used for rapid front-end web developement. React is the "V" in your MVC, but with the Flux Application Architecture you can add the "M & C" to easily wire up components into a working application.
2. NodeJS: NodeJS is a server-side JavaScript runtime engine built on Chrome's V8 JavaScript engine. Express is used as a web development framework.
3. Sass: Sass stands for Syntactically Awesome Style Sheets. It is the most mature, stable, and powerful professional grade CSS extension language in the world.
4. Webpack: Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging modules.

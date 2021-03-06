[![Build Status](https://travis-ci.org/andela-hpopoola/headlines.svg?branch=develop)](https://travis-ci.org/andela-hpopoola/headlines)
[![Coverage Status](https://coveralls.io/repos/github/andela-hpopoola/headlines/badge.svg?branch=fix-improve-application-ui-145086165)](https://coveralls.io/github/andela-hpopoola/headlines?branch=fix-improve-application-ui-145086165)
[![Code Climate](https://codeclimate.com/github/andela-hpopoola/headlines/badges/gpa.svg)](https://codeclimate.com/github/andela-hpopoola/headlines)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()

# Headlines
> Headlines is simple a front-end application that takes advantage of the functionalities NewsAPI provides.

The application is similar to a modern RSS feed that allows people to view all headlines from different news sources and link to the original articles/news on those sources. The application retrieves data from NewsAPI which gives access to over 70 news sources over the world. A live version this project can be viewed via [link](http://haruna-headlines.herokuapp.com).



## Table of Contents

1. Technologies
2. Installation and Setup
3. Testing the application
4. Limitations
5. How To Contribute
6. License



## Technologies

This project built with React and Flux architecture. Nodejs and Express are used for server side development. The application is styled with SASS and bundled with Webpack.

1. React & Flux: React is used for rapid front-end web developement. React is the "V" in your MVC, but with the Flux Application Architecture you can add the "M & C" to easily wire up components into a working application.
2. NodeJS: NodeJS is a server-side JavaScript runtime engine built on Chrome's V8 JavaScript engine. Express is used as a web development framework.
3. Sass: Sass stands for Syntactically Awesome Style Sheets. It is the most mature, stable, and powerful professional grade CSS extension language in the world.
4. Webpack: Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging modules.



## Installation and Setup

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

The application is tested with `mocha`, `enzyme`, `istanbul` and `React Test Utils`. The application can be tested on the command line via
```
$ npm test
```


## Limitations

Healines has the following limitations:

1. Users can only login via Google+
2. Users cannot mark articles as favorites
3. Users cannot create favorites lists for news sources and group articles in these lists.
4. Articles are not scraped from the original sources. Users are redirected to the original sources to read any article.


## Contribution
To contribute to the project, follow the instructions below
 1. **Fork** the repo on GitHub
 2. **Clone** the project to your own machine
 3. **Commit** changes to your own branch
 4. **Push** your work back up to your fork
 5. Submit a **Pull request** so that I can review your changes

NOTE: Be sure to merge the latest from "upstream" before making a pull request!


## License
This project is authored by [Haruna Popoola]() and is licensed 
for your use, modification, and distribution under [the MIT license](https://en.wikipedia.org/wiki/MIT_License).
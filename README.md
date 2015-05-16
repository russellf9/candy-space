# CandyStore Code Challenge


## Installation

I've used the [healthy-gulp-angular](https://github.com/paislee/healthy-gulp-angular) seed, so follow the same installation instructions:

1. Check out this repository
2. Ensure you have node installed
3. Run `npm install` in the root directory (this will install bower dependencies too)


(The original healthy-gulp-angular README can be found here: [healthy-angular-README.md](healthy-angular-README.md) )


## Running the app

```
$ gulp watch-dev
```

Open `http://localhost:8080/` in Chrome

## The Code Challenges


### Instructions

- To create a mobile web interface that allows the user to browse through text-only posts from users (data attached as CSV).

- The site should be responsive up to the resolution of a tablet.

- Desktop users should be redirected to http://www.candyspace.com

- Name, email (clickable), text body and posted date should be visible on each post.

- Data should be stored on the backend and made accessible to the UI via a RESTful API. No security is required on the API.

- Feel free to use any technologies and methods you think are suitable and are comfortable with to achieve this task.

- Code should include a build process that converts source code into production ready files where applicable.

**Things to consider:**

Tools and frameworks. (We believe in processes that allow us to rapidly develop and deploy web applications to the highest quality)

UX - How many posts should be shown to the user at once, and how should they load more?

Please also provide a general overview of your approach. Just a brief explanation of your thoughts behind major technical decisions (e.g. I chose to use framework X because Y).


## Tools and frameworks

- I've chosen Angular as it is my JS framework of choice and is perfect for making scalable Web Apps which need to use a REST api.

- I'll use Node.js as it's part of my JS Web Stack

- I'm using Twitter Bootstrap to add style to the UI elements

- To parse the csv data I'm using [node-csvtojson](https://github.com/Keyang/node-csvtojson), perhaps not the ideal solution a stream might be better.

- I'm using [Gulp](http://gulpjs.com) as my task runner as it fast, can be modular and gets everything done.

- I'm using SASS as this is essential for writing cleaner and extensible CSS

- Project structure - I try and make all the elements (JS and SASS) as modular as possible.

### App Code

- Posts - The `main` Angular Controller

- Posts.Directive - A Directive which holds and displays all the posts

- Posts.Service - A Service responsible for the CRUD operations on the data ( On the specs only the READ operation is required. )


### Re-direct

I'm using a JS solution for this, as the `navigator.userAgent` would be more reliable than doing a test on the CSS style or screen width, as tablets are getting larger than desktops!


### State of the test

- The design and UI is very plain for now. (It would be relatively easy to create new `palette.sass` file to modify the colours

- Data - At present all the data is being loaded at once. It would be be beneficial to use some sort of pagination to load the data in say groups of ten.

- There is an issue with the `build-app-prod` script, the Angular code is not being minified properly. Would need something like [ng-annotate](https://github.com/olov/ng-annotate) to be run in the Gulp task.

- Also, I assume a for the scripts to be deployed and work a node server would have to be set up client side.

### TODO

* [ ] Fix production build issue

* [ ] Add pagination

* [ ] Add Unit Tests

* [ ] Add E2E Tests



### To run the Unit Test Suite: (TODO)

`gulp test`

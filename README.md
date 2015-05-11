This is a project for the Gojimo Code Challenge


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

## The Challenge

Develop a very simple working application on your chosen platform
(Android / iOS / Web) with the following functionality:

1.  Read the following JSON feed containing a list of qualifications (a
    sample is presented below for your reference):
    https://api.gojimo.net/api/v4/qualifications

2.  Display a list of qualifications based on the data provided by the
    feed.

3.  Allow users to click a qualification to be presented with a list of
    subjects for that qualification.

```
{
    id: "d45945e4-b724-48ab-9f99-21e61f1648ad",
    name: "11+ Common Entrance", subjects: [
    {
        id: "ef319206-aa64-41f5-ac67-17a4fb8d10f6",
        title: "English",
        link: "/api/v4/subjects/ef319206-aa64-41f5-ac67-17a4fb8d10f6",
        colour: "\#ECF7E2"
    }],
    default_products: [ ],
    created_at: "2014-04-12T10:06:33.000Z", updated\_at:
    "2014-04-12T10:06:33.000Z",
    link: "/api/v4/qualifications/d45945e4-b724-48ab-9f99-21e61f1648ad"
}
```

### BONUS POINTS

Whilst not essential, we will be very pleased to see you take the challenge further by:

1. Using the data provided to its full potential by taking advantage of fields like colour for subjects.

2. Making the GUI as appealing and responsive as possible.

3. Storing the data locally and refresh from the server as requested, taking advantage of the HTTP headers to avoid downloads of non-stale data.

4. Unit testing your code.



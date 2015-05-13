This is a project for the Energy Aspects Code Challenge


## Installation

I've used the [healthy-gulp-angular](https://github.com/paislee/healthy-gulp-angular) seed, so follow the same installation instructions:

1. Check out this repository
2. Ensure you have node installed
3. Run `npm install` in the root directory (this will install bower dependencies too)


(The original healthy-gulp-angular README can be found here: [healthy-angular-README.md](healthy-angular-README.md) )

**Note:**

One first launch after forking this repo I encountered an few errors''

```
Error: Cannot find module 'gulp-karma'

# ran
$ npm install --save-dev gulp-karma

```

## Running the app

```
$ gulp watch-dev
```

Open `http://localhost:8080/` in Chrome

## Energy Aspects Front End Developer Code Challenges

There are two code separate challenges, both of which we require you to complete. Code for the second challenge should be submitted via a  Git repository. Ideally we would like to see how you got to the end result via a series of commits as opposed to one large commit.
 >
There is no time limit for each challenge, but please notify us of the time worked on each challenge so that we can correlate if there are any large gaps in commit messages.

Your code will be judged on implementation, and style.

## Challenge 1
** Recreate this widget using HTML and CSS.**
[http://codepen.io/energyaspects/pen/XbWQbx](http://codepen.io/energyaspects/pen/XbWQbx)

he final code doesn't need to process any data, or interact with an API but bonus points will be awarded for any additional functionality, or improvements that are added (simple client-side validation with feedback, for example).

![](media/image2.jpeg)

The code for this challenge should be submitted via a Codepen.

For my pen see: [pen](http://codepen.io/anon/pen/qdZdag)

## Challenge 2 - A simple wallet application using Angular.js

our task is to create a simple wallet application that allows you to add and remove amounts to and from your wallet. Once a deposit or withdrawal takes place, it should be listed along with the date and time the transaction took place.
 >
The wallet should show a total, displaying how much money is currently in the wallet.

### Instructions


1. The JavaScript logic should be built on Angular.js

2. The input to deposit or withdraw an amount should have error checking and reporting.

3. The wallet should not be able to have a negative balance.

4. The wallet data should persist on page refresh, until the user presses a ‘reset’ button, which will clear the wallet’s total and transactions. You can choose the persistence method.

5. The code should be hosted in a Git repository.

6.  The method of adding or removing a value to the wallet can be via  separate inputs, or a single input with a select box for add/remove.


### BONUS POINTS

-   Consider how large numbers of transactions will be handled. For  example, if a wallet was created a year ago, it could have hundreds, or thousands of deposits and withdrawals. How could these be displayed?

-   Users may be able to have more than one wallet, with different currencies. How would these work, and be presented to the user?

-  Thinking of a typical bank or credit card organisation, many accounts will exist for many different users. External companies can make charge requests against each account, and transfers can be made between internal accounts. How could your application implement this?

 Although this is a fairly entry-level exercise, we’ll be paying close attention to the style of your code, as well as its implementation, with extra marks being awarded for the bonus points above, consideration for the application’s appearance, UX and any intuitive extra features.

 That being said, it doesn’t need to be a production ready, piece of art. Good luck!



### APP SCOPE

- Wallet - the 'main' Controller, responsible for the top-level of the app

- Total - a Directive which is responsible for displaying the total of the Account

- Account - a Service which is responsible for handling all Credits and Debits

- Debit - a Directive which is responsible for the user action of making a withdrawal

- Credit - A Directive which is responsible for the user action of making a deposit

- Reset -  A Directive which is responsible for clearing all the Balance and all the recorded Transactions

- Transactions - Displays all the users transactions



### State of the test

* [ ] Add Transactions

* [ ] Add Tests


### To run the Unit Test Suite: (TODo)

`gulp test`

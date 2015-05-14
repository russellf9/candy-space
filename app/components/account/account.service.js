// the Service for the Accounts

// A service responsible for CRUD operations on the Account
(function() {

    'use strict';


    angular.module('wallet-app.accounts', []).service('Accounts', ['$q', 'localStorageService', function($q, localStorageService) {

        // use local storage to cache reference
        // TODO need a getter for this property to work correctly!
        var _accounts = localStorageService.get('accounts');

        // TODO - extract all calls to the `localStorageService` to a `wrapper/proxy` function

        return {

            getTotal: function() {

                _accounts = localStorageService.get('accounts');

                console.log('\n----\nAccounts::getTotal | _accounts: ', _accounts, '\n----\n');

                // if the initial value is null reset to the default
                if (!_accounts) {
                    console.log('no accounts!');
                    _accounts = {total: 0, transactions: []};
                    localStorageService.set('accounts', _accounts);
                }
                // There will always be a promise so always declare it.
                var deferred = $q.defer();

                // Resolve the deferred $q object before returning the promise
                deferred.resolve(_accounts.total);

                return deferred.promise;

            },

            withdrawal: function(sum) {


                // TODO - Refactor
                _accounts = localStorageService.get('accounts');

                var deferred = $q.defer();

                if (_accounts) {

                    var total = _accounts.total - sum;

                    // check if the withdraw will create an over-draft!
                    if(total < 0) {

                        // error
                        console.log('Error - can`t have an overdraft!');
                        deferred.resolve(_accounts.total);

                    } else {

                        _accounts.total = total;
                        // TODO create shared function
                        // add transaction
                        var date = new Date();
                        var transaction = {type: 'debit', date: date, amount: sum, total: _accounts.total};
                        _accounts.transactions.push(transaction);
                        localStorageService.set('accounts', _accounts);

                        // TODO handle error here...
                        deferred.resolve(_accounts.total);
                    }

                } else {
                    // else- not in cache
                    deferred.reject("Error: no data as yet ");
                }

                return deferred.promise;

            },
            deposit: function(sum) {

                _accounts = localStorageService.get('accounts');

                var deferred = $q.defer();

                if (_accounts) {

                    var total = _accounts.total + sum;
                    _accounts.total = total; // TODO - nasty code!

                    // add transaction
                    var date = new Date();
                    var transaction = {type: 'credit', date: date, amount: sum, total: _accounts.total};

                    console.log('ok - _accounts: ', _accounts);

                    _accounts.transactions.push(transaction);
                    _accounts = localStorageService.set('accounts', _accounts);

                    // TODO handle error here...
                    deferred.resolve(_accounts.total);
                    return deferred.promise;
                } else {
                    // else- not in cache
                    deferred.reject("Error: no data as yet ");
                }

                return deferred.promise;

            },
            reset: function() {

                _accounts = localStorageService.get('accounts');

                var deferred = $q.defer();

                if (_accounts) {
                    // TODO create shared function
                    //localStorageService.set('accounts', {total: 0, transactions: []});

                    // try removing
                    localStorageService.remove('accounts');


                    _accounts = localStorageService.get('accounts');

                    // TODO handle error here...
                    deferred.resolve(_accounts);

                    return deferred.promise;
                } else {
                    // else- not in cache
                    deferred.reject("Error: no data as yet ");
                }

                return deferred.promise;

            },
            // TODO see if we can make this a getter for the _variable
            getAccounts: function() {
                return _accounts
            },
            getTransactions: function() {

                _accounts = localStorageService.get('accounts');
                var deferred = $q.defer();

                if (_accounts) {

                    deferred.resolve(_accounts.transactions);
                    return deferred.promise;
                } else {
                    // else- not in cache
                    deferred.reject("Error: no data as yet ");
                }

                return deferred.promise;
            }
        };
        // TODO set the data
        //  localStorageService.set('accounts', data);
    }
    ]);
})();


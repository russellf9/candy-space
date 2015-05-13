// the Service for the Accounts

// A service responsible for CRUD operations on the Account
(function() {

    'use strict';


    angular.module('wallet-app.accounts', []).service('Accounts', ['$q', 'localStorageService', function($q, localStorageService) {

        // use local storage to cache reference
        var _accounts = localStorageService.get('accounts');

        return {

            getTotal: function() {

                console.log('getTotal');
                // There will always be a promise so always declare it.
                var deferred = $q.defer();

                if (_accounts) {
                    // Resolve the deferred $q object before returning the promise
                    deferred.resolve(_accounts.total);
                    if(!_accounts.transactions) {
                        _accounts.transactions = [];
                    }
                    return deferred.promise;
                } else {
                    // else- not in cache
                    // set the total to zero
                    var accounts = {total: 0, transactions:[]};
                    localStorageService.set('accounts', accounts);
                    _accounts = localStorageService.get('accounts');

                    deferred.resolve(_accounts.total);

                    //deferred.reject("Error: no data as yet ");
                }

                return deferred.promise;
            },

            withdrawal: function(sum) {

                var deferred = $q.defer();

                if (_accounts) {

                    var total = _accounts.total - sum;

                    localStorageService.set('accounts', {total: total});
                    _accounts = localStorageService.get('accounts');


                    // add transaction
                    var date = new Date();
                    var transaction = {type:'debit', date:date, amount:sum};
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
            deposit: function(sum) {

                var deferred = $q.defer();

                if (_accounts) {

                    var total = _accounts.total + sum;

                    localStorageService.set('accounts', {total: total});
                    _accounts = localStorageService.get('accounts');

                    // add transaction
                    var date = new Date();
                    var transaction = {type:'deposit', date:date, amount:sum};

                    console.log('_accounts: ', _accounts)
                    if(!_accounts.transactions) {
                        _accounts.transactions = [];
                    }
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

                var deferred = $q.defer();

                if (_accounts) {

                    localStorageService.set('accounts', {total: 0, transactions:[]});
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
            getAccounts : function() {
                return _accounts
            },
            getTransactions : function() {
                return _accounts.transactions;
            }
    };
    // TODO set the data
    //  localStorageService.set('accounts', data);
}
])
;
}
()
)
;
// the Service for the Accounts

// A service responsible for all calls to the back-end to get menu data
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
                    return deferred.promise;
                } else {
                    // else- not in cache
                    deferred.reject("Error: no data as yet ");
                }

                return deferred.promise;
            },

            withdrawal: function(sum) {

                var deferred = $q.defer();

                if (_accounts) {

                    var total = _accounts.total - sum;

                    localStorageService.set('accounts', {total:total});

                    // TODO handle error here...
                    deferred.resolve(_accounts.total);
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
    }]);
}());
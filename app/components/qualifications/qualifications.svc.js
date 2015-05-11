// the Service for the Qualifications

// A service responsible for all calls to the back-end to get menu data
(function() {

    'use strict';


    angular.module('gojimo.code-challenge.qualifications').service('QualificationsService',  ['$q', '$http', 'localStorageService', function($q, $http, localStorageService) {

        // use local storage to cache reference
        var _qualifications = localStorageService.get('qualifications'),
            url = 'https://api.gojimo.net/api/v4/qualifications';

        return {

            getQualifications: function() {
                // There will always be a promise so always declare it.
                var deferred = $q.defer();

                if (_qualifications) {
                    // Resolve the deferred $q object before returning the promise
                    deferred.resolve(_qualifications);
                    return deferred.promise;
                }
                // else- not in cache
                $http.get(url).success(function(data){

                    localStorageService.set('qualifications', data);
                    _qualifications = data;
                    
                    deferred.resolve(data);
                }).error(function(data, status, headers, config) {
                    deferred.reject("Error: request returned status " + status);
                });
                return deferred.promise;
            }
        }
    }]);
}());
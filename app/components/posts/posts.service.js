// the Service for the Posts

// A service responsible for CRUD operations on the Posts
(function() {

    'use strict';


    angular.module('posts-app.services', []).service('PostsService', ['$q', function($q) {

        // TODO need a getter for this property to work correctly!
        var _posts;

        return {

            getPosts: function() {

                console.log('\n----\nAccounts::getPosts!');
                // There will always be a promise so always declare it.
                var deferred = $q.defer();

                // if the initial value is null reset to the default
                if (!_posts) {
                    deferred.reject("Error: no data as yet ");
                }


                // Resolve the deferred $q object before returning the promise
                deferred.resolve({});

                return deferred.promise;

            }


        };
    }
    ]);
})();


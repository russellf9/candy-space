// the Service for the Posts

// A service responsible for CRUD operations on the Posts
(function() {

    'use strict';


    angular.module('posts-app.services', []).service('PostsService', ['$q', '$http', function($q, $http) {

        // TODO need a getter for this property to work correctly!
        var _posts;

        return {

            getPosts: function() {

                console.log('\n----\nAccounts::getPosts!');
                return $http.get('/posts').then(function(result) {
                    return result.data;
                });

            }


        };
    }
    ]);
})();


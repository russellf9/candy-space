// the Service for the Posts

// A service responsible for CRUD operations on the Posts
(function() {

    'use strict';


    angular.module('posts-app.services', []).service('PostsService', ['$q', '$http', function($q, $http) {

        // TODO save the property for re-use
        var _posts;

        return {
            getPosts: function() {
                return $http.get('/posts').then(function(result) {
                    return result.data;
                });
            }
        };
    }
    ]);
})();


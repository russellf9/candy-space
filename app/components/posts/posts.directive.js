(function() {
    angular.module('posts-app.posts', [])
        .directive('posts', Posts);

    /**
     * The <Posts> directive is responsible for:
     * - displaying the UI to display the Posts
     */

    function Posts(PostsService) {

        return {
            restrict: 'EA',
            scope: {
                // TODO - we could add the appropriate `call back` functions here to relate back to the Controller
                update: '&'
            },
            templateUrl: 'components/posts/posts.html',
            link: function(scope) {

                console.log('Posts directive!');

                scope.parseData  = function(obj) {
                    console.log('Posts parseData | string: ', obj);

                    return "OK " + string;
                };

                // the function get the set of all qualifications
                PostsService.getPosts().then(function(result) {
                    console.log('A POSTS ---- results: ',result);
                    scope.posts = result;
                }, function(error) {
                    console.log('error: ',error);
                });

            }
        };
    }

})();

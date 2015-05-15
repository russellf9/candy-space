angular.module('posts-app', ['ui.router', 'posts-app.posts', 'posts-app.services']).controller('Posts', Posts)


.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider

            .state('home', {
                url: '/',
                templateUrl: 'components/home.html',
                controllerAs: Posts
            });
    }]);


function Posts($rootScope) {

    var vm = this;
    console.log('Posts!');


}
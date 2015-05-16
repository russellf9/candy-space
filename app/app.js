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


// for now a completely `flat` controller, It could have the responsibility of handling updates
function Posts($rootScope) {
    var vm = this;
}

(function() {
    // a simple JS function to re-direct the page
    function detectUserAgent() {
        var isMobile = navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i);

        if (!isMobile) {
            // Note: Comment out this line for testing on Desktop
            window.location = "http://www.candyspace.com";
        }
    }

    detectUserAgent()

})();
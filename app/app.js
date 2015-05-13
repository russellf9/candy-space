angular.module('wallet-app', ['ui.router', 'wallet-app.total', 'LocalStorageModule']).controller('Wallet', Wallet)


.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider

            .state('home', {
                url: '/',
                templateUrl: 'components/home.html',
                controllerAs: Wallet
            });
    }])

.config(function (localStorageServiceProvider) {
    localStorageServiceProvider
        .setPrefix('wallet-app');
});

//angular.module('wallet-app.total', []);


function Wallet($http) {

    var vm = this;
    console.log('Wallet!')

}
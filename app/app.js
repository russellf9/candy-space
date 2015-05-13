angular.module('wallet-app', ['ui.router', 'wallet-app.total', 'wallet-app.accounts', 'wallet-app.debit', 'wallet-app.credit', 'wallet-app.reset', 'LocalStorageModule']).controller('Wallet', Wallet)


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


function Wallet($http) {

    var vm = this;
    console.log('Wallet!')

}
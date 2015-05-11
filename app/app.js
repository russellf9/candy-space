angular.module('gojimo.code-challenge', ['ui.router']).controller('Qualifications', Qualifications)


.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider

            .state('home', {
                url: '/',
                templateUrl: 'components/home.html',
                controllerAs: Qualifications
            });

    }]);


function Qualifications($http) {

    var vm = this;

    console.log('Qualifications!');

    vm.name = 'russell';

}
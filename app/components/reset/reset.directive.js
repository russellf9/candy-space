(function() {
    angular.module('wallet-app.reset', [])
        .directive('reset', Reset);

    /**
     * The <Reset> directive is responsible for:
     * - displaying the UI to make the call to reset the account
     * - informing when the data has been loaded or updated (perhaps)
     * - informing when there has been an error when attempting to load the data - TODO
     */

    function Reset(Accounts) {

        return {
            restrict: 'EA',
            scope: {
                update: '&'
            },
            templateUrl: 'components/reset/reset.html',
            link: function(scope) {

                scope.reset = function() {
                    console.log('reset');

                    Accounts.reset().then(function(result) {
                        console.log('results: ', result);
                        scope.update()(result.total);
                        scope.data = result;

                    }, function(error) {
                        console.log('error: ', error);
                    });

                };
            }
        };
    }

})();

(function() {
    angular.module('wallet-app.debit', [])
        .directive('debit', Debit);

    /**
     * The <Debit> directive is responsible for:
     * - displaying the UI to make withdrawals from the account
     * - informing when the data has been loaded or updated (perhaps)
     * - informing when there has been an error when attempting to load the data - TODO
     */

    function Debit(Accounts) {

        return {
            restrict: 'EA',
            scope: {
                // TODO - we could add the appropriate `call back` functions here to relate back to the Controller
            },
            templateUrl: 'components/debit/debit.html',
            link: function(scope) {

                console.log('debit!');

                // the function get the set of all qualifications
                Accounts.withdrawal(sum).then(function(result) {
                    console.log('results: ',result);
                    //scope.onReceived()();
                    scope.data = result;

                }, function(error) {
                    console.log('error: ',error);
                });
            }
        };
    }

})();

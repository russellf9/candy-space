(function() {
    angular.module('wallet-app.credit', [])
        .directive('credit', Credit);

    /**
     * The <Credit> directive is responsible for:
     * - displaying the UI to make deposits to the account
     * - informing when the data has been loaded or updated (perhaps)
     * - informing when there has been an error when attempting to load the data - TODO
     */

    function Credit(Accounts) {

        return {
            restrict: 'EA',
            scope: {
                // TODO - we could add the appropriate `call back` functions here to relate back to the Controller
            },
            templateUrl: 'components/credit/credit.html',
            link: function(scope) {

                console.log('credit!');
                //TODO plugin function

                // the function get the set of all qualifications
                //Accounts.deposit(sum).then(function(result) {
                //    console.log('results: ',result);
                //    //scope.onReceived()();
                //    scope.data = result;
                //
                //}, function(error) {
                //    console.log('error: ',error);
                //});
            }
        };
    }

})();

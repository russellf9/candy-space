(function() {
    angular.module('wallet-app.reset', [])
        .directive('reset', Reset);

    /**
     * The <Reset> directive is responsible for:
     * - displaying the UI to make reset from the account
     * - informing when the data has been loaded or updated (perhaps)
     * - informing when there has been an error when attempting to load the data - TODO
     */

    function Reset(Accounts) {

        return {
            restrict: 'EA',
            scope: {
                // TODO - we could add the appropriate `call back` functions here to relate back to the Controller
            },
            templateUrl: 'components/reset/reset.html',
            link: function(scope) {

                console.log('reset!');
                //TODO plugin function

                // the function to plugin
                //Accounts.reset().then(function(result) {
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

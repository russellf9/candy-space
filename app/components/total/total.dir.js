(function() {
    angular.module('wallet-app.total', [])
        .directive('total', Total);

    /**
     * The <Total> directive is responsible for:
     * - displaying the total of the account
     * - informing when the data has been loaded or updated (perhaps)
     * - informing when there has been an error when attempting to load the data - TODO
     */

    // todo add - AccountService
    function Total() {

        return {
            restrict: 'E',
            scope: {
                // TODO - we could add the appropriate `call back` functions here to relate back to the Controller
            },
            templateUrl: 'components/total/total.html',
            link: function(scope) {

                console.log('total!')

                // the function get the set of all qualifications
                //AccountService.getTotal().then(function(result) {
                //    console.log('results: ',result);
                //    //scope.onReceived()();
                //    scope.data = result;
                //    console.log('len: ',scope.data.length);
                //
                //});
            }
        };
    }

})();
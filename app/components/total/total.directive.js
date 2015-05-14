(function() {
    angular.module('wallet-app.total', [])
        .directive('total', Total);

    /**
     * The <Total> directive is responsible for:
     * - displaying the total of the account
     * - informing when the data has been loaded or updated (perhaps)
     * - informing when there has been an error when attempting to load the data - TODO
     */

    function Total(Accounts, $rootScope) {

        return {
            restrict: 'E',
            scope: {
                // TODO - we could add the appropriate `call back` functions here to relate back to the Controller
            },
            templateUrl: 'components/total/total.html',
            link: function(scope) {

                // the function get the set of all qualifications
                Accounts.getTotal().then(function(result) {
                    console.log('A TOTAL ---- results: ',result);
                    scope.data = result;
                }, function(error) {
                    console.log('error: ',error);
                });

                // watch for updates sent by the controller
                //  TODO we are trusting the data in the call use the getTotal function!
                $rootScope.$on('Accounts::Update', function(event, result) {
                    console.log('update in total directive: ',result);
                    // NASTY not DRY!!
                    Accounts.getTotal().then(function(result) {
                        console.log('B TOTAL ---- results: ',result);
                        scope.data = result;
                    }, function(error) {
                        console.log('error: ',error);
                    });
                });



                // CANT GET THIS TO WORK :-(
                // Watch for changes in the service
                scope.$watch(function(){
                    return Accounts.getAccounts;
                }, function(newVal, oldVal){

                    if(newVal) Accounts.getAccounts(function(response){
                        console.log('response: ',response);
                        scope.data = response;
                    });
                })
            }
        };
    }

})();

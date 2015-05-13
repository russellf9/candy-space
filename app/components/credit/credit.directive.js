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
                update: '&'
            },
            templateUrl: 'components/credit/credit.html',
            link: function(scope) {
                // makes the call to deposit the current amount into the account
                scope.deposit = function() {
                    console.log('deposit: ', scope.amount);
                    // check the value is a number
                    var num = Number(scope.amount);

                    if(isNaN(num)) {
                        console.log('Error not a number!');
                        scope.amount = '';
                    } else {
                        console.log('OK');

                        Accounts.deposit(scope.amount).then(function(result) {
                            console.log('results: ',result);
                            //scope.onReceived()();
                            scope.data = result;

                            scope.update()(result);

                        }, function(error) {
                            console.log('error: ',error);
                        });
                    }

                };
                // an item has been selected
                scope.selectItem = function(id) {
                    //console.log('menu::selectItem: ',id);
                    scope.onSelect()(id);
                };

                console.log('credit!');
                //TODO plugin function

                // the function get the set of all qualifications

            }
        };
    }

})();

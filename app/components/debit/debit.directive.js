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
                update: '&'
            },
            templateUrl: 'components/debit/debit.html',
            link: function(scope) {

                console.log('debit!');

                scope.withdraw = function() {
                    console.log('withdraw: ', scope.amount);
                    // check the value is a number
                    var num = Number(scope.amount);

                    if(isNaN(num)) {
                        console.log('Error not a number!');
                        scope.amount = '';
                    } else {
                        console.log('OK');

                        Accounts.withdrawal(scope.amount).then(function(result) {
                            console.log('results: ',result);
                            scope.update()(result);
                            scope.data = result;

                        }, function(error) {
                            console.log('error: ',error);
                        });
                    }

                };

            }
        };
    }

})();

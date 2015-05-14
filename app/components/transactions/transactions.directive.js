(function() {
    angular.module('wallet-app.transactions', [])
        .directive('transactions', Transactions);

    /**
     * The <Transactions> directive is responsible for:
     * - displaying the transactions from the account
     */

    function Transactions(Accounts, $rootScope) {

        var self = this;

        return {
            restrict: 'EA',
            scope: {
                update: '&'
            },
            templateUrl: 'components/transactions/transactions.html',
            link: function(scope) {

                // watch for updates sent by the controller
                $rootScope.$on('Accounts::Update', function(event, result) {
                    Accounts.getTransactions().then(function(data){
                        console.log('\n----\nTransaction::getTransactions ( from update )- Result ', data + '\n----\n');
                        scope.transactions = data;
                    });
                });

                //TODO plugin shared function?

                Accounts.getTransactions().then(function(data){
                    console.log('\n----\nTransaction::getTransactions ( from initial load ) - Result ', data + '\n----\n');
                    scope.transactions = data;
                });
            }
        };
    }

})();

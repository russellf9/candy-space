(function() {
    angular.module('wallet-app.transactions', [])
        .directive('transactions', Transactions);

    /**
     * The <Transactions> directive is responsible for:
     * - displaying the transactions from the account
     */

    function Transactions(Accounts, $rootScope) {

        var self = this;

        this.getTransactions =  function() {
            console.log('get transactions!');
        };

        return {


            restrict: 'EA',
            scope: {
                update: '&'
            },
            templateUrl: 'components/transactions/transactions.html',
            link: function(scope) {

                // watch for updates sent by the controller
                //  TODO we are trusting the data in the call use the getTotal function!
                $rootScope.$on('Accounts::Update', function(event, result) {
                    console.log('update in transactions directive: ', result);
                    scope.transactions = self.getTransactions();
                });

                console.log('transactions!');
                //TODO plugin function

                self.getTransactions();

                // the function get the set of all qualifications

            }
        };


    }

})();

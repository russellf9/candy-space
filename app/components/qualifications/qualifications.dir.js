(function() {
    angular.module('gojimo.code-challenge.qualifications', [])
        .directive('qualifications', Qualifications);

    /**
     * The <qualifications> directive is responsible for:
     * - reading the JSON feed
     * - informing when the data has been loaded
     * - informing when there has been an error when attempting to load the data
     */
    function Qualifications($window, QualificationsService) {

        return {
            restrict: 'E',
            scope: {
                // TODO - add the data here
                //data: '=',
                // TODO - add the appropriate `call back` functions here
                //onRemoved: '&',
                //onServed: '&'
            },
            templateUrl: 'components/qualifications/qualifications.html',
            link: function(scope) {

                // the function get the set of all food to order
                QualificationsService.getQualifications().then(function(res) {
                    console.log('results: ',res);
                    //scope.onReceived()();
                    //scope.items = res;
                });

            }
        }
    }

})();

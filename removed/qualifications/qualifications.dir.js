(function() {
    angular.module('wallet-app.qualifications', [])
        .directive('qualifications', Qualifications);

    /**
     * The <qualifications> directive is responsible for:
     * - reading the JSON feed
     * - informing when the data has been loaded
     * - informing when there has been an error when attempting to load the data - TODO
     */
    function Qualifications(QualificationsService) {

        return {
            restrict: 'E',
            scope: {
                // TODO - we could add the appropriate `call back` functions here to relate back to the Controller
            },
            templateUrl: 'components/qualifications/qualifications.html',
            link: function(scope) {

                // the function get the set of all qualifications
                QualificationsService.getQualifications().then(function(result) {
                    console.log('results: ',result);
                    //scope.onReceived()();
                    scope.data = result;
                    console.log('len: ',scope.data.length);

                });
            }
        };
    }

})();

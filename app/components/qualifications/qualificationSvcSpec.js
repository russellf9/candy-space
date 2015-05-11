'use strict';

describe("The Qualification Service", function() {

    var scope,
        compile,
        service,
        url = 'https://api.gojimo.net/api/v4/qualifications',
        httpLocalBackend,
        httpResponse = [{
            id: "d45945e4-b724-48ab-9f99-21e61f1648ad",
            name: "11+ Common Entrance", subjects: [
                {
                    id: "ef319206-aa64-41f5-ac67-17a4fb8d10f6",
                    title: "English",
                    link: "/api/v4/subjects/ef319206-aa64-41f5-ac67-17a4fb8d10f6",
                    colour: "#ECF7E2"
                }],
            default_products: [],
            created_at: "2014-04-12T10:06:33.000Z", updated_at: "2014-04-12T10:06:33.000Z",
            link: "/api/v4/qualifications/d45945e4-b724-48ab-9f99-21e61f1648ad"
        }, {"stuffId": 2}];


    // before each test, creates a new fresh scope
    // the inject function interest is to make use of the angularJS
    // dependency injection to get some other services in our test
    // here we need $rootScope to create a new scope
    beforeEach(function() {

        // add the app module
        module('gojimo.code-challenge');

        module('LocalStorageModule');

        inject(function(_QualificationsService_, _$rootScope_, _$compile_, _$httpBackend_, $q) {
            service = _QualificationsService_;
            compile = _$compile_;
            scope = _$rootScope_.$new();
            httpLocalBackend = _$httpBackend_;

            httpLocalBackend.expectGET(url).respond(200, httpResponse);

            var deferred = $q.defer();
            deferred.resolve(httpResponse); //  always resolved, you can do it from your spec

            // spyOn(service, 'getQualifications').and.returnValue(deferred.promise); // causing an error...
        });
    });

    it('should have a service', function () {
        expect(service).not.toBe(null);
    });

    it('should return a list of qualifications', function() {
        var result;
        service.getQualifications().then(function(res){
            result = res;
            expect(result.length).toBe(2); // will match the number of items in the dummy data
        });
    });
});

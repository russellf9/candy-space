'use strict';

describe("The Qualification Directive", function() {

    var element,   // our directive jqLite element
        scope,     // the scope where our directive is inserted
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

        // add the templates as js files
        module('templates');

        inject(function(_$rootScope_, _$compile_, _$httpBackend_, QualificationsService) {
            compile = _$compile_;
            scope = _$rootScope_.$new();
            httpLocalBackend = _$httpBackend_;
            service = QualificationsService;

            httpLocalBackend.expectGET(url).respond(200, httpResponse);

            // create a dummy HTML element to load the directive
            element = angular.element('<qualifications></qualifications>');

            compile(element)(scope);

            scope.$digest();
        });
    });

    describe('when the page compiles the Qualification Directive', function() {

        describe('the function to get the data', function() {
            it('should have a Service to get the Qualifications', function() {
                httpLocalBackend.whenGET(url).respond(200, httpResponse);
               // httpLocalBackend.flush(); // NOTE this is causing an issue...

                expect(scope).toBeDefined();
                expect(service).toBeDefined();
            });

            it('should be able to get the Qualifications data', function() {
                httpLocalBackend.whenGET(url).respond(200, httpResponse);
                httpLocalBackend.flush();

                service.getQualifications().then(function(result) {
                    expect(result.length).toBe(2); // will match the number of items in the dummy data

                });
                scope.$digest();
            })
        });
    });
});

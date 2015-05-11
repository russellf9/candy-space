// Karma configuration
// Generated on Mon May 11 2015 16:34:55 GMT+0100 (BST)

module.exports = function(config) {
    config.set({

        // base path, that will be used to resolve files and exclude
        basePath: 'app',


        // frameworks to use
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [

            '../bower_components/angular/angular.js',
            '../bower_components/angular-animate/angular-animate.js',
            '../bower_components/angular-local-storage/dist/angular-local-storage.js',
            '../bower_components/angular-mocks/angular-mocks.js',
            '../bower_components/angular-ui-router/release/angular-ui-router.js',
            //'bower_components/angular-sanitize/angular-sanitize.js',
            '../bower_components/jquery/dist/jquery.js',


            '../app/**/*.js',
            '../app/**/*Spec.js',

            // if you wanna load template files in nested directories, you must use this
            '../app/**/*.html'
        ],


        // list of files to exclude
        exclude: [],

        plugins: [
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-ng-html2js-preprocessor'
        ],


        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['progress'],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            "**/*.html": ["ng-html2js"]
        },

        ngHtml2JsPreprocessor: {
            // the name of the Angular module to create
            moduleName: "templates"
        },


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera (has to be installed with `npm install karma-opera-launcher`)
        // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
        // - PhantomJS
        // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
        browsers: ['Chrome'],


        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,


        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false
    });
};

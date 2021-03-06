//var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
  framework: 'jasmine2',
  seleniumAddress: 'http://localhost:9515',
  allScriptsTimeout: 60000,
  specs: ['spec.js'],
  capabilities:{
          browserName: 'phantomjs',
          'phantomjs.cli.args': ['--logfile=PATH', '--loglevel=DEBUG'] 
        },

	plugins: [{
        package: 'jasmine2-protractor-utils',
        disableHTMLReport: false,
        disableScreenshot: false,
        screenshotPath:'./reports/screenshots',
        screenshotOnExpectFailure:true,
        screenshotOnSpecFailure:true,
        clearFoldersBeforeTest: true,
        htmlReportDir: './reports/htmlReports',
        failTestOnErrorLog: {
                    failTestOnErrorLogLevel: 900,
                    excludeKeywords: ['keyword1', 'keyword2']
                }
      }],
	  jasmineNodeOpts: {defaultTimeoutInterval: 90000}
      //framework: 'jasmine2',

	   
 }

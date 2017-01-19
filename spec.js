describe('Mesaforte-ui Demo App', function(){
	it('should have a title and fields', function(){
		browser.get('http://localhost:8888/');

	    expect(browser.getTitle()).toEqual('Mesaforte');
	    expect(element(by.id('username')).isPresent());
	    element(by.model('login.username')).sendKeys('Suport');
	    element(by.model('login.passwd')).sendKeys('w4Suport');
	});

	it('Testing a Ruleset', function(){
		browser.get('http://localhost:8888/#/home/plan/ruleset/');

		expect(browser.getTitle()).toEqual('Mesaforte');
		element(by.model('beanCtrl.gridOptions.quickFilterText')).sendKeys('dent');
	});
});


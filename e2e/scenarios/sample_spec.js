describe('サンプルテスト', function() {
  browser.ignoreSynchronization = true;

  it('GoogleのタイトルはGoogle', function() {

    browser.get('http://www.google.com/');

    expect(browser.getTitle()).toEqual('Google');
  });
});

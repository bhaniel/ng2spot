import { Ng2spotPage } from './app.po';

describe('ng2spot App', function() {
  let page: Ng2spotPage;

  beforeEach(() => {
    page = new Ng2spotPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

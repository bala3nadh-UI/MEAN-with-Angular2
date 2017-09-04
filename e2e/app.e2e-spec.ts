import { VikPage } from './app.po';

describe('vik App', function() {
  let page: VikPage;

  beforeEach(() => {
    page = new VikPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

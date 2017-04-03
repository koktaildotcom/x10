import { X10ClientPage } from './app.po';

describe('x10-client App', () => {
  let page: X10ClientPage;

  beforeEach(() => {
    page = new X10ClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

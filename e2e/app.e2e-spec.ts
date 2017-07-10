import { AppPortalPage } from './app.po';

describe('app-portal App', () => {
  let page: AppPortalPage;

  beforeEach(() => {
    page = new AppPortalPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

import { AppShellPage } from './app.po';

describe('app-shell App', () => {
  let page: AppShellPage;

  beforeEach(() => {
    page = new AppShellPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

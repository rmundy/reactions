import { ReactionsPage } from './app.po';

describe('reactions App', () => {
  let page: ReactionsPage;

  beforeEach(() => {
    page = new ReactionsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

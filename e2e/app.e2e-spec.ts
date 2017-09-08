import { AgGridCliPage } from './app.po';

describe('ag-grid-cli App', () => {
  let page: AgGridCliPage;

  beforeEach(() => {
    page = new AgGridCliPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

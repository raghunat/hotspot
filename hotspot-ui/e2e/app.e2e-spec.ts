import { HotspotUiPage } from './app.po';

describe('hotspot-ui App', () => {
  let page: HotspotUiPage;

  beforeEach(() => {
    page = new HotspotUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

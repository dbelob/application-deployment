import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

const mockServer = require('mockttp').getLocal();

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  beforeEach(() => mockServer.start(8080));

  it('should display welcome message', () => {
    mockServer.get('/api/hello/message').thenReply(200, '""Hello, world!"');
    mockServer.get('/api/hello/message').withQuery({name: 'first'}).thenReply(200, '""Hello, first!"');
    mockServer.get('/api/hello/message').withQuery({name: 'second'}).thenReply(200, '""Hello, second!"');
    mockServer.get('/api/hello/message').withQuery({name: 'third'}).thenReply(200, '""Hello, third!"');

    page.navigateTo();
    expect(page.getTitleText()).toEqual('First page');
  });

  afterEach(() => mockServer.stop());

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

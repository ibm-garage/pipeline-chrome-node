const { Builder } = require("selenium-webdriver");
const { Options: ChromeOptions } = require("selenium-webdriver/chrome");

describe("The Google homepage", () => {
  let driver;

  beforeAll(async () => {
    driver = await new Builder()
      .forBrowser("chrome")
      .setChromeOptions(new ChromeOptions().addArguments("headless"))
      .build();
  });

  afterAll(async () => {
    await driver.quit();
  });

  beforeEach(async () => {
    await driver.get("http://www.google.com/");
  });

  it("has a title of Google", async () => {
    expect(await driver.getTitle()).toBe("Google");
  });
});

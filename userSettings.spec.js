import { test, expect } from "../fixtures.js";
// import { LoginPage } from "../pages/login.page";
import { NavPage } from "../pages/nav.page";
import { SettingsPage } from "../pages/settings.page";
import { faker } from "@faker-js/faker";

test("test 2", async ({ homePage }) => {
  //   const loginPage = new LoginPage(page);
  const navPage = new NavPage(homePage); // instead of 'page' fixtures use 'homePage'
  const settingsPage = new SettingsPage(homePage);
  const userName = faker.lorem.word();

  //   await page.goto("/");
  //   await navPage.clickSignInIcon();
  //   await loginPage.fillInEmail("boo@gmail.com");
  //   await loginPage.fillInPassword("boo");
  //   await loginPage.pressSignInBtn();

  await navPage.clickSettingsIcon();
  await settingsPage.fillInUserName(userName);
  await settingsPage.clickUpdateSettingsBtn();
  await expect(homePage.getByRole("heading")).toContainText(userName);
});

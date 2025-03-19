import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login.page";
import { NavPage } from "../pages/nav.page";

test("test", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const navPage = new NavPage(page);

  await page.goto("/");
  await navPage.clickSignInIcon();
  await loginPage.fillInEmail("boo@gmail.com");
  await loginPage.fillInPassword("boo");
  await loginPage.pressSignInBtn();
  await expect(
    navPage.profileIcon,
    "should be visible profile icon"
  ).toBeVisible();
});

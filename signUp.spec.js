import { test, expect } from "@playwright/test";
import { SignUpPage } from "../pages/singUp.page";
import { NavPage } from "../pages/nav.page";
import { faker } from "@faker-js/faker";

test("test", async ({ page }) => {
  const signUpPage = new SignUpPage(page);
  const navPage = new NavPage(page);
  const userName = faker.internet.username();
  const email = faker.internet.email();
  const password = faker.internet.password();

  await page.goto("/");
  await navPage.clickSignUpIcon();
  await signUpPage.fillInUserName(userName);
  await signUpPage.fillInEmail(email);
  await signUpPage.fillInPassword(password);
  await signUpPage.pressSignUpBtn();
  await expect(
    page.getByRole("link", { name: `user image ${userName}` })
  ).toBeVisible();
});

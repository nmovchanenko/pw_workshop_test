import { test as base, expect as baseExpect } from "@playwright/test";
import { LoginPage } from "./pages/login.page";
import { NavPage } from "./pages/nav.page";
import { NewArticlePage } from "./pages/newArticle.page.js";
import { SignUpPage } from "./pages/singUp.page";
import { faker } from "@faker-js/faker";

export const test = base.extend({
  homePage: async ({ page }, use) => {
    // const loginPage = new LoginPage(page);
    const navPage = new NavPage(page);
    const signUpPage = new SignUpPage(page);
    const userName = faker.internet.username();
    const email = faker.internet.email();
    const password = faker.internet.password();

    await page.goto("/");
    await navPage.clickSignUpIcon();
    await signUpPage.fillInUserName(userName);
    await signUpPage.fillInEmail(email);
    await signUpPage.fillInPassword(password);
    await signUpPage.pressSignUpBtn();
    // await navPage.clickSignInIcon();
    // await loginPage.fillInEmail(email + "@gmail.com");
    // await loginPage.fillInPassword(password);
    // await loginPage.pressSignInBtn();

    await use(page);
  },

  commentPage: async ({ page }, use) => {
    const navPage = new NavPage(page);
    const signUpPage = new SignUpPage(page);
    const newArticle = new NewArticlePage(page);
    const userName = faker.internet.username();
    const email = faker.internet.email();
    const password = faker.internet.password();
    const title = faker.lorem.word();

    await page.goto("/");
    await navPage.clickSignUpIcon();
    await signUpPage.fillInUserName(userName);
    await signUpPage.fillInEmail(email);
    await signUpPage.fillInPassword(password);
    await signUpPage.pressSignUpBtn();
    // await expect(
    //   page.getByRole("link", { name: `user image ${userName}` })
    // ).toBeVisible();

    await navPage.clickNewArtilceIcon();
    await newArticle.fillTitle(title);
    await newArticle.fillAbout("It's about boo");
    await newArticle.fillArticle("Boo boo boo. Don't be afraid");
    await newArticle.fillTags("Boo");
    await newArticle.clickPublishBtn();
    await expect(page.getByRole("heading")).toContainText(title);

    await use(page);
  },
});

export const expect = baseExpect;

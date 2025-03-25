import { test as base, expect as baseExpect } from "@playwright/test";
import { NavBar } from "./pages/nav.bar.js";
import { NewArticlePage } from "./pages/newArticle.page";
import { SignUpPage } from "./pages/signUp.page";
import { faker } from "@faker-js/faker";

// Helper function to sign up a new user
async function signUpUser(page) {
    const navBar = new NavBar(page);
    const signUpPage = new SignUpPage(page);

    const user = {
        userName: faker.internet.username(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };

    await page.goto("/");
    await navBar.clickSignUpButton();
    await signUpPage.fillInUserName(user.userName);
    await signUpPage.fillInEmail(user.email);
    await signUpPage.fillInPassword(user.password);
    await signUpPage.clickSignUpButton();

    return { page, user };
}

export const test = base.extend({
    homePageFixture: async ({ page }, use) => {
        const { page: signedUpPage } = await signUpUser(page);
        await use(signedUpPage);
    },

    newArticlePageFixture: async ({ page }, use) => {
        const { page: signedUpPage } = await signUpUser(page);
        const navBar = new NavBar(signedUpPage);
        const newArticle = new NewArticlePage(signedUpPage);

        const title = faker.lorem.word();

        await navBar.clickNewArticleButton();
        await newArticle.fillInTitle(title);
        await newArticle.fillInDescription(`Description of the article ${title}`);
        await newArticle.fillInBody(`Body of the article ${title}`);
        await newArticle.fillInTags("#playwright");
        await newArticle.clickPublishButton();

        await use(signedUpPage);
    },
});

export const expect = baseExpect;
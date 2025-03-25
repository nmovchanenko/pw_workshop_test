import {test, expect} from '@playwright/test';
import {NavBar} from '../pages/nav.bar';
import {SignUpPage} from '../pages/signUp.page';
import {faker} from '@faker-js/faker';

test('Test 5 - Sign Up without fixture', async ({ page }) => {
    const signUpPage = new SignUpPage(page);
    const navPage = new NavBar(page);

    const userName = faker.internet.username();
    const email = faker.internet.email();
    const password = faker.internet.password();

    await page.goto("/");
    await navPage.clickSignUpButton();
    await signUpPage.fillInUserName(userName);
    await signUpPage.fillInEmail(email);
    await signUpPage.fillInPassword(password);
    await signUpPage.clickSignUpButton();
    await expect(page.getByRole("link", {name: `user image ${userName}`})).toBeVisible();
});
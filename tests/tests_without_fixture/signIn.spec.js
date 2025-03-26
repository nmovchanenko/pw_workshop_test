import 'dotenv/config';
import {test, expect} from '@playwright/test';
import {NavBar} from '../../pages/nav.bar.js';
import {SignInPage} from '../../pages/signIn.page.js';

test('Test - Sign In without fixture', async ({ page }) => {
    const signInPage = new SignInPage(page);
    const navBar = new NavBar(page);

    const email = process.env.EMAIL;
    const password = process.env.PASSWORD;

    await page.goto("/");
    await navBar.clickSignInButton();
    await signInPage.fillInEmail(email);
    await signInPage.fillInPassword(password);
    await signInPage.clickSignInButton();
    await expect(navBar.profileButton,"should be visible profile icon").toBeVisible();
});
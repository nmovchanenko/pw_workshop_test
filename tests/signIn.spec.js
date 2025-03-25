import {test, expect} from '@playwright/test';
import {NavBar} from '../pages/nav.bar';
import {SignInPage} from '../pages/signIn.page';

test('Test 4 - Sign In without fixture', async ({ page }) => {
    const signInPage = new SignInPage(page);
    const navPage = new NavBar(page);

    const email = "bilbao@gmail.com";
    const password = "bilbao";

    await page.goto("/");
    await navPage.clickSignInButton();
    await signInPage.fillInEmail(email);
    await signInPage.fillInPassword(password);
    await signInPage.clickSignInButton();
    await expect(navPage.profileButton,"should be visible profile icon").toBeVisible();
});
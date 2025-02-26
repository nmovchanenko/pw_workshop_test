import { test, expect } from '@playwright/test';
import {LoginPage} from '../pages/login.page.js';
import {NavPage} from '../pages/nav.page.js';

test('test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const navPage = new NavPage(page);

    await page.goto('/');
    await navPage.clickSignInIcon();
    await loginPage.fillEmail('foo@gmail.com');
    await loginPage.fillPassword('foo');
    await loginPage.clickSignIn();

    await expect(navPage.profileIcon, 'should be visible profile icon').toBeVisible();
});



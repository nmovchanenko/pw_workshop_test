import path from 'node:path';
import { test } from '@playwright/test';
import {LoginPage} from '../../pages/login.page.js';
import {NavPage} from '../../pages/nav.page.js';

test('authenticate', async ({page, request}) => {
    console.log('authenticate step');
    const loginPage = new LoginPage(page);
    const navPage = new NavPage(page);

    await page.goto('/');
    await navPage.clickSignInIcon();
    await loginPage.fillEmail('foo@gmail.com');
    await loginPage.fillPassword('foo');
    await loginPage.clickSignIn();
    await page.waitForTimeout(1000); // todo: fix
    await page.context().storageState({path: path.join(process.cwd(), './.auth/user.json')});
});
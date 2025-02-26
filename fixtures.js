import { test as base, expect as baseExpect} from '@playwright/test';
import {LoginPage} from './pages/login.page.js';
import {NavPage} from './pages/nav.page.js';

export const test = base.extend({
    homePage: async ({page}, use) => {
        const loginPage = new LoginPage(page);
        const navPage = new NavPage(page);

        await page.goto('/');
        await navPage.clickSignInIcon();
        await loginPage.fillEmail('foo@gmail.com');
        await loginPage.fillPassword('foo');
        await loginPage.clickSignIn();

        await use(page);
    },

    oneMorePage: async ({page}, use) => {
        console.log('Im in the ONE MORE PAGE')
        await use(page);
    },
});

export const expect = baseExpect;
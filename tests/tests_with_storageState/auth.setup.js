import 'dotenv/config';
import { test as setup, expect } from '@playwright/test';
import {SignInPage} from "../../pages/signIn.page.js";
import {NavBar} from "../../pages/nav.bar.js";

const email = process.env.EMAIL;
const password = process.env.PASSWORD;

setup('authenticate', async ({ page }) => {
    const signInPage = new SignInPage(page);
    const navBar = new NavBar(page);

    await page.goto("/");
    await navBar.clickSignInButton();
    await signInPage.fillInEmail(email);
    await signInPage.fillInPassword(password);
    await signInPage.clickSignInButton();
    await expect(navBar.profileButton,"should be visible profile icon").toBeVisible();
    await page.context().storageState({ path: '.auth/auth.json' });
});
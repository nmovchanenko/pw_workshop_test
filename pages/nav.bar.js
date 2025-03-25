import {test} from '@playwright/test';

export class NavBar {
    constructor(page) {
        this.page = page;
        /* loggedOut state */
        this.homeButton = page.locator("//a[text()=' Home ']");
        this.signInButton = page.locator("//a[text()=' Sign in ']");
        this.singUpButton = page.locator("//a[text()=' Sign up ']");
        /* loggedIn state */
        this.profileButton = page.locator("//a[starts-with(@href, '/profile/')]");
        this.settingsButton = page.locator("//a[@href='/settings']");
        this.newArticleButton = page.locator("//a[@href='/editor']");
    }

    async clickSignInButton() {
        await test.step("User clicks Sign-in button on nav bar", async () => {
            await this.signInButton.click();
        });
    }

    async clickSignUpButton() {
        await test.step("User clicks Sign-up button on nav bar", async () => {
            await this.singUpButton.click();
        });
    }

    async clickSettingsButton() {
        await test.step("User clicks Settings button on nav bar", async () => {
            await this.settingsButton.click();
        });
    }

    async clickNewArticleButton() {
        await test.step("User clicks New Article button on nav bar", async () => {
            await this.newArticleButton.click();
        });
    }
}
import {test} from '@playwright/test';

export class SignInPage {
    constructor(page) {
        this.page = page;
        this.emailInput = page.locator('//input[@formcontrolname=\'email\']');
        this.passwordInput = page.locator('//input[@formcontrolname=\'password\']');
        this.signInButton = page.locator('//button[text()=\' Sign in \']');
    }

    async fillInEmail(email) {
        await test.step(`User fills in email (${email})`, async () => {
            await this.emailInput.fill(email);
        });
    }

    async fillInPassword(password) {
        await test.step(`User fills in password (${password})`, async () => {
            await this.passwordInput.fill(password);
        });
    }

    async clickSignInButton() {
        await test.step(`User clicks sing in button`, async () => {
            await this.signInButton.click();
        });
    }
}

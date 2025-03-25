import { test } from "@playwright/test";

export class SignUpPage {
    constructor(page) {
        this.page = page;
        this.userNameInput = page.locator('//input[@formcontrolname=\'username\']');
        this.emailInput = page.locator('//input[@formcontrolname=\'email\']');
        this.passwordInput = page.locator('//input[@formcontrolname=\'password\']');
        this.signUpButton = page.locator('//button[text()=\' Sign up \']');
    }

    async fillInUserName(userName) {
        await test.step(`User fills in username (${userName})`, async () => {
            await this.userNameInput.fill(userName);
        });
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

    async clickSignUpButton() {
        await test.step(`User clicks sign up button`, async () => {
            await this.signUpButton.click();
        });
    }
}
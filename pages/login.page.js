import {test} from '@playwright/test';

export class LoginPage {
    constructor(page) {
        this.page = page;
        this.emailInput = page.getByRole('textbox', {name: 'Email'});
        this.passwordInput = page.getByRole('textbox', {name: 'Password'});
        this.signInBtn = page.getByRole('button', {name: 'Sign in'});
    }

    async fillEmail(email) {
        await test.step(`user fill in email (${email})`, async () => {
            await this.emailInput.fill(email);
        });
    }

    async fillPassword(pass) {
        await test.step(`user fill in password (${pass})`, async () => {
            await this.passwordInput.fill(pass);
        });
    }

    async clickSignIn() {
        await test.step('user click sign in', async () => {
            await this.signInBtn.click();
        })
    }
}
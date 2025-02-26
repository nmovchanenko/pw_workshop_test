import {test} from '@playwright/test';

export class NavPage {
    constructor(page) {
        this.page = page;
        this.homeIcon = page.getByRole('link', {name: 'Home'});
        this.signInIcon = page.getByRole('link', {name: 'Sign in'});
        this.signUpIcon = page.getByRole('link', {name: 'Sign up'});
        this.profileIcon = page.getByRole('link', {name: 'user image foo_2'});
        this.settingsIcon = page.getByRole('link', {name: '  Settings'});
    }

    async clickSignInIcon() {
        await test.step('user click sign in on nav bar', async () => {
            await this.signInIcon.click();
        });
    }

    async clickSettingsIcon() {
        await test.step('user click settings', async () => {
            await this.settingsIcon.click();
        })
    }
}
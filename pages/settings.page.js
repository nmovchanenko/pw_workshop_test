import {test} from '@playwright/test';

export class SettingsPage {
    constructor(page) {
        this.userNameInput = page.getByRole('textbox', {name: 'Username'});
        this.updateSettingsBtn = page.getByRole('button', {name: 'Update Settings'});
    }

    async fillUserName(name) {
        await test.step('user fill name', async () => {
            await this.userNameInput.fill(name);
        })
    }

    async clickUpdateSettings() {
        await test.step('user click update button', async () => {
            await this.updateSettingsBtn.click();
        })
    }
}
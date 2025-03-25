import { test } from '@playwright/test';

export class SettingsPage {
    constructor(page) {
        this.page = page;
        this.userNameInput = page.locator('//input[@formcontrolname=\'username\']');
        this.updateSettingsButton = page.locator('//button[text()=\' Update Settings \']');
    }

    async fillInUserName(name) {
        await test.step(`User fills in userName`, async () => {
            await this.userNameInput.fill(name);
        });
    }

    async clickUpdateSettingsButton() {
        await test.step(`User clicks Update Settings button`, async () => {
            await this.updateSettingsButton.click();
        });
    }
}
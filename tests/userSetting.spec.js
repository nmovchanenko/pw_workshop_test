import {test, expect} from '@playwright/test';
import {NavPage} from '../pages/nav.page.js';
import {SettingsPage} from '../pages/settings.page.js';

test('test 2', async ({ page }) => {
    const navPage = new NavPage(page);
    const settingsPage = new SettingsPage(page);

    await page.goto('/');
    await navPage.clickSettingsIcon();
    await settingsPage.fillUserName('lsjdflsadf');
    await settingsPage.clickUpdateSettings();

    await expect(page.locator('.user-img')).toBeVisible();
});
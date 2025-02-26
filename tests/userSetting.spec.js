import {test, expect} from '../fixtures.js';
import {NavPage} from '../pages/nav.page.js';
import {SettingsPage} from '../pages/settings.page.js';

test('test 2', async ({ homePage }) => {
    const navPage = new NavPage(homePage);
    const settingsPage = new SettingsPage(homePage);

    await navPage.clickSettingsIcon();
    await settingsPage.fillUserName('lsjdflsadf');
    await settingsPage.clickUpdateSettings();

    await expect(homePage.getByRole('heading')).toContainText('foo_3');
});
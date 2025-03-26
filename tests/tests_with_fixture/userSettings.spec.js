import {test, expect} from '../../fixtures.js';
import {NavBar} from '../../pages/nav.bar.js';
import {SettingsPage} from '../../pages/settings.page.js';
import {faker} from '@faker-js/faker';

test('Test - Change userName', async ({homePageFixture})=> {
    const navPage = new NavBar(homePageFixture); // instead of 'page' fixtures use 'homePage'
    const settingsPage = new SettingsPage(homePageFixture);
    const userName = faker.lorem.word();

    await navPage.clickSettingsButton();
    await settingsPage.fillInUserName(userName);
    await settingsPage.clickUpdateSettingsButton();
    await expect(homePageFixture.locator("//a[@href='/settings']/following::h4")).toContainText(userName);
});
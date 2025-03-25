import {test, expect} from '../fixtures';
import {NavBar} from '../pages/nav.bar';
import {SettingsPage} from '../pages/settings.page';
import {faker} from '@faker-js/faker';

test('Test 6 - Change userName', async ({homePageFixture})=> {
    const navPage = new NavBar(homePageFixture); // instead of 'page' fixtures use 'homePage'
    const settingsPage = new SettingsPage(homePageFixture);
    const userName = faker.lorem.word();

    await navPage.clickSettingsButton();
    await settingsPage.fillInUserName(userName);
    await settingsPage.clickUpdateSettingsButton();
    await expect(homePageFixture.locator("//a[@href='/settings']/following::h4")).toContainText(userName);
});
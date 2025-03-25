import { test } from "@playwright/test";

export class NewArticlePage {
    constructor(page) {
        this.page = page;
        this.titleInput = page.locator('//input[@formcontrolname=\'title\']');
        this.descriptionInput = page.locator('//input[@formcontrolname=\'description\']');
        this.bodyInput = page.locator('//textarea[@formcontrolname=\'body\']');
        this.tagsInput = page.locator('//input[@placeholder=\'Enter tags\']');
        this.publishButton = page.locator('//button[text()=\' Publish Article \']');
    }

    async fillInTitle(title) {
        await test.step(`User fills in article title`, async () => {
            await this.titleInput.fill(title);
        });
    }

    async fillInDescription(about) {
        await test.step(`User fills in article description`, async () => {
            await this.descriptionInput.fill(about);
        });
    }

    async fillInBody(article) {
        await test.step(`User fills in article text`, async () => {
            await this.bodyInput.fill(article);
        });
    }

    async fillInTags(tags) {
        await test.step(`User fills in article tags`, async () => {
            await this.tagsInput.fill(tags);
        });
    }

    async clickPublishButton() {
        await test.step(`User clicks Publish Article button`, async () => {
            await this.publishButton.click();
        });
    }
}
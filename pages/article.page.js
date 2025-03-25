import { test } from "@playwright/test";

export class ArticlePage {
    constructor(page) {
        this.page = page;
        this.editArticleButton = page.locator("(//a[text()=' Edit Article '])[1]");
        this.deleteArticleButton = page.locator("(//button[text()=' Delete Article '])[1]");
        this.commentInput = page.locator("//textarea[@placeholder='Write a comment...']");
        this.postCommentButton = page.locator("//button[text()=' Post Comment ']");
    }

    async fillInComment(comment) {
        await test.step(`User fills in comment`, async () => {
            await this.commentInput.fill(comment);
        });
    }

    async clickPostCommentButton() {
        await test.step("User clicks Post Comment button", async () => {
            await this.postCommentButton.click();
        });
    }

    async clickEditArticleButton() {
        await test.step("User clicks Edit Article button", async () => {
            await this.editArticleButton.click();
        });
    }
}
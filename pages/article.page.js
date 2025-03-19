import { test } from "@playwright/test";

export class ArticlePage {
  constructor(page) {
    this.page = page;
    this.heading = page.getByRole("heading", { name: "My article" });
    this.editBtn = page.getByRole("link", { name: " Edit Article" });
    this.deleteBtn = page.getByRole("button", { name: " Delete Article" });
    this.commentInput = page.getByRole("textbox", {
      name: "Write a comment...",
    });
    this.postCommentBtn = page.getByRole("button", { name: "Post Comment" });
  }

  async fillComment(comment) {
    await test.step(`user fill comment`, async () => {
      await this.commentInput.fill(comment);
    });
  }

  async clickCommentBtn() {
    await test.step("user click post comment button", async () => {
      await this.postCommentBtn.click();
    });
  }
}

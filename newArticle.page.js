import { test } from "@playwright/test";

export class NewArticlePage {
  constructor(page) {
    this.page = page;
    this.titleInput = page.getByRole("textbox", { name: "Article Title" });
    this.aboutInput = page.getByRole("textbox", {
      name: "What's this article about?",
    });
    this.articleInput = page.getByRole("textbox", {
      name: "Write your article (in",
    });
    this.tagsInput = page.getByRole("textbox", { name: "Enter tags" });
    this.publishBtn = page.getByRole("button", { name: "Publish Article" });
  }

  async fillTitle(title) {
    await test.step(`user fill title of article`, async () => {
      await this.titleInput.fill(title);
    });
  }

  async fillAbout(about) {
    await test.step(`user fill about info of article`, async () => {
      await this.aboutInput.fill(about);
    });
  }

  async fillArticle(article) {
    await test.step(`user fill text of article`, async () => {
      await this.articleInput.fill(article);
    });
  }

  async fillTags(tags) {
    await test.step(`user fill tags`, async () => {
      await this.tagsInput.fill(tags);
    });
  }

  async clickPublishBtn() {
    await test.step(`user click publish article`, async () => {
      await this.publishBtn.click();
    });
  }
}

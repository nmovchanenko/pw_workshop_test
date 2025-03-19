import { test } from "@playwright/test";

export class NavPage {
  constructor(page) {
    this.page = page;
    this.homeIcon = page.getByRole("link", { name: "Home" });
    this.signInIcon = page.getByRole("link", { name: "Sign in" });
    this.singUpIcon = page.getByRole("link", { name: "Sign up" });
    this.profileIcon = page.getByRole("link", { name: "user image boo" });
    this.settingsIcon = page.getByRole("link", { name: "  Settings" });
    this.newArticleIcon = page.getByRole("link", { name: "  New Article" });
  }

  async clickSignInIcon() {
    await test.step("user click sign in icon on nav bar", async () => {
      await this.signInIcon.click();
    });
  }

  async clickSignUpIcon() {
    await test.step("user click sign up icon on nav bar", async () => {
      await this.singUpIcon.click();
    });
  }

  async clickSettingsIcon() {
    await test.step("user click settings on nav bar", async () => {
      await this.settingsIcon.click();
    });
  }

  async clickNewArtilceIcon() {
    await test.step("user click new article on nav bar", async () => {
      await this.newArticleIcon.click();
    });
  }
}

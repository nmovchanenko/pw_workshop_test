import { test } from '@playwright/test';

export class NavPage {
  constructor(page) {
    this.page = page;
    this.signInButton =  page.locator('a[href="/login"]');
    this.goToArticlePageButton = page.locator('a[href="/editor"]'); 
  }

  async goToLoginPage() {
    await test.step('Click on Sign In button to go to Login Page', async () => {
      await this.signInButton.click();
    });
  }

  async goToArticlePage() {
    await test.step('Click on Go to Article/Editor Page button', async () => {
      await this.goToArticlePageButton.click();
    });
  }
}

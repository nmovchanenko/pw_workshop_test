import { test } from '@playwright/test';

export class LoginPage {
    constructor(page) {
      this.page = page;
      this.emailInput = page.getByPlaceholder('Email');
      this.passwordInput = page.getByPlaceholder('Password');
      this.loginButton = page.locator('button:has-text("Sign in")')
    }
  
    async fillEmailInput(email) {  
      await test.step('Fill in the email input field', async () => {
      await this.emailInput.fill(email);
      });
    }
  
    async fillPasswordInput(password) {
      await test.step('Fill in the password input field', async () => {
      await this.passwordInput.fill(password);
      });
    }
    async clickOnLoginButton() {
      await test.step('Wait for the login button to be visible and enabled', async () => {    
      await this.loginButton.waitFor({ state: 'visible' });
      await this.loginButton.waitFor({ state: 'attached' });
      await this.loginButton.click();
      });
    }
  }
  
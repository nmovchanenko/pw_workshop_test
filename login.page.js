import { test } from "@playwright/test";

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailIntup = page.getByRole("textbox", { name: "Email" });
    this.passwordInput = page.getByRole("textbox", { name: "Password" });
    this.signInBtn = page.getByRole("button", { name: "Sign in" });
  }

  async fillInEmail(email) {
    await test.step(`user fill in email (${email})`, async () => {
      await this.emailIntup.fill(email);
    });
  }

  async fillInPassword(pass) {
    await test.step(`user fill in password (${pass})`, async () => {
      await this.passwordInput.fill(pass);
    });
  }

  async pressSignInBtn() {
    await test.step(`user press sing in button`, async () => {
      await this.signInBtn.click();
    });
  }
}

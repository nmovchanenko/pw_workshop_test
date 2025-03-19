import { test } from "@playwright/test";

export class SignUpPage {
  constructor(page) {
    this.page = page;
    this.userNameInput = page.getByRole("textbox", { name: "Username" });
    this.emailInput = page.getByRole("textbox", { name: "Email" });
    this.passwordInput = page.getByRole("textbox", { name: "Password" });
    this.signUpBtn = page.getByRole("button", { name: "Sign up" });
  }

  async fillInUserName(userName) {
    await test.step(`user fill username (${userName})`, async () => {
      await this.userNameInput.fill(userName);
    });
  }

  async fillInEmail(email) {
    await test.step(`user fill in email (${email})`, async () => {
      await this.emailInput.fill(email);
    });
  }

  async fillInPassword(pass) {
    await test.step(`user fill in password (${pass})`, async () => {
      await this.passwordInput.fill(pass);
    });
  }

  async pressSignUpBtn() {
    await test.step(`user press sing up button`, async () => {
      await this.signUpBtn.click();
    });
  }
}

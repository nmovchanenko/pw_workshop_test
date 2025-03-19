import { test } from "@playwright/test";

export class SettingsPage {
  constructor(page) {
    this.page = page;
    this.userNameInput = page.getByRole("textbox", { name: "Username" });
    this.updateSettingsBtn = page.getByRole("button", {
      name: "Update Settings",
    });
  }

  async fillInUserName(name) {
    await test.step(`user fill in name`, async () => {
      await this.userNameInput.fill(name);
    });
  }

  async clickUpdateSettingsBtn() {
    await test.step(`user click update settings button`, async () => {
      await this.updateSettingsBtn.click();
    });
  }
}

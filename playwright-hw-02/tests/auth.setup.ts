import { test as setup, expect } from '@playwright/test';
import { fileURLToPath } from 'url';
import path from 'path';
import { NavPage } from '../pages/NavPage';
import { LoginPage } from '../pages/LoginPage';
import { MainPage } from '../pages/MainPage';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const authFile = path.resolve(__dirname, '../.auth/user.json');
console.log('Auth file path:', authFile);

setup('authenticate', async ({ page }) => {

  
  const loginPage = new LoginPage(page);
  const navPage = new NavPage(page);
  const mainPage = new MainPage(page);
  await page.goto(process.env.BASE_URL || 'https://angular-realworld-example-app-neon.vercel.app/');

  await navPage.goToLoginPage();
  await loginPage.fillEmailInput(process.env.LOGIN_EMAIL);
  await loginPage.fillPasswordInput(process.env.LOGIN_PASSWORD);
  await loginPage.clickOnLoginButton();


  await page.waitForURL(process.env.BASE_URL || 'https://angular-realworld-example-app-neon.vercel.app/');

  await expect(mainPage.homePageUser).toBeVisible();



  await page.context().storageState({ path: authFile });
});

import { test, expect } from '@playwright/test';
import { NavPage } from '../pages/NavPage.js';
import { EditorPage } from '../pages/NewArticlePage';
import { MainPage } from '../pages/MainPage'; 


test('Verify - Go to new article page path', async ({ page }) => {
const navPage = new NavPage(page);
const editorPage = new EditorPage(page);
const mainPage = new MainPage(page);

await page.goto(`${process.env.BASE_URL}/`);

await expect(mainPage.homePageUser).toBeVisible();
await expect(page.url()).toBe(`${process.env.BASE_URL}/`);

await navPage.goToArticlePage();
await expect(editorPage.createArticleButton).toBeVisible();
await expect(page.url()).toBe(`${process.env.BASE_URL}/editor`);

});

test('Verify the creation of a new article', async ({ page }) => {
   const editorPage = new EditorPage(page);
   const mainPage = new MainPage(page);

   await page.goto(`${process.env.BASE_URL}/editor`);
   await expect(editorPage.createArticleButton).toBeVisible();
   await expect(page.url()).toBe(`${process.env.BASE_URL}/editor`);

   await editorPage.fillArticleForm();

   //Assertions for new created article
   await expect(page.locator('h1')).toHaveText(`${editorPage.randomStrings[0]}`);
   await expect(page.url()).toBe(`${process.env.BASE_URL}/article/${editorPage.randomStrings[0]}`);
   
   //Assertions that the new articvle is added to the list of articles on the main page
   await page.goto(`${process.env.BASE_URL}/`);
   await expect(mainPage.globalFeed).toBeVisible();
   await mainPage.globalFeed.click();
   await expect(page.getByRole('link', { name: `${editorPage.randomStrings[0]} ${editorPage.randomStrings[1]} Read more` })).toBeVisible();

   editorPage.randomStrings = [];


   });

   
test('Verify the creation of 5 new articles', async ({ page }) => {
   const editorPage = new EditorPage(page);
   const mainPage = new MainPage(page);
   const numOfArticles = 5;

 for (let i =0; i<numOfArticles; i++) {

   await page.goto(`${process.env.BASE_URL}/editor`);
   await expect(editorPage.createArticleButton).toBeVisible();
   await expect(page.url()).toBe(`${process.env.BASE_URL}/editor`);

   await editorPage.fillArticleForm();

   //Assertions for new creted article
   await expect(page.locator('h1')).toHaveText(`${editorPage.randomStrings[0]}`);
   await expect(page.url()).toBe(`${process.env.BASE_URL}/article/${editorPage.randomStrings[0]}`);
   
 //Assertions that the new articvle is added to the list of articles on the main page
   await page.goto(`${process.env.BASE_URL}/`);
   await expect(mainPage.globalFeed).toBeVisible();
   await mainPage.globalFeed.click();
   await expect(page.getByRole('link', { name: `${editorPage.randomStrings[0]} ${editorPage.randomStrings[1]} Read more` })).toBeVisible();
   console.log(`Number of added articles is ${i}`);

   editorPage.randomStrings = [];
}
   
   });

test('Verify that new article is not added when no input is filled', async ({ page }) => {
      const editorPage = new EditorPage(page);
   
      await page.goto(`${process.env.BASE_URL}/editor`);
      await expect(editorPage.createArticleButton).toBeVisible();
      await expect(page.url()).toBe(`${process.env.BASE_URL}/editor`);
   
      await editorPage.createArticleButton.click();
   
      //Assertions for staying at the aditor page - negative scenario
      await expect(editorPage.createArticleButton).toBeVisible();
      await expect(page.url()).toBe(`${process.env.BASE_URL}/editor`);
      
      });

test('Verify that new article is not added when the same string is added to all form inputs', async ({ page }) => {
      const editorPage = new EditorPage(page);
      
      await page.goto(`${process.env.BASE_URL}/editor`);
      await expect(editorPage.createArticleButton).toBeVisible();
      await expect(page.url()).toBe(`${process.env.BASE_URL}/editor`);
      
      await editorPage.fillArticleForm('test', 'test', 'test', 'test');
      
      //Assertions for staying at the editor page - negative scenario
      await expect(editorPage.createArticleButton).toBeVisible();
      await expect(page.url()).toBe(`${process.env.BASE_URL}/editor`);
      });

      
   
   

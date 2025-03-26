import {test, expect} from '../../fixtures.js';
import {NavBar} from '../../pages/nav.bar.js';
import {NewArticlePage} from '../../pages/newArticle.page.js';
import {ArticlePage} from '../../pages/article.page.js';
import {faker} from '@faker-js/faker';

test('Test - Create new article', async ({page}) => {
    const navBar = new NavBar(page);
    const newArticle = new NewArticlePage(page);

    const title = faker.lorem.word();

    await page.goto("/");

    await navBar.clickNewArticleButton();
    await newArticle.fillInTitle(title);
    await newArticle.fillInDescription(`Description of the article ${title}`);
    await newArticle.fillInBody(`Body of the article ${title}`);
    await newArticle.fillInTags("#playwright");
    await newArticle.clickPublishButton();
    await expect(page.locator("//app-article-page/div/div[1]/div/h1")).toContainText(title);
});

test('Test - Create comment to new article', async ({page}) => {
    const navBar = new NavBar(page);
    const newArticle = new NewArticlePage(page);
    const articlePage = new ArticlePage(page);

    const title = faker.lorem.word();
    const comment = faker.lorem.sentence();

    await page.goto("/");

    await navBar.clickNewArticleButton();
    await newArticle.fillInTitle(title);
    await newArticle.fillInDescription(`Description of the article ${title}`);
    await newArticle.fillInBody(`Body of the article ${title}`);
    await newArticle.fillInTags("#playwright");
    await newArticle.clickPublishButton();

    await articlePage.fillInComment(comment);
    await articlePage.clickPostCommentButton();
    await expect(page.locator("app-article-comment")).toContainText(comment);
});

test('Test - Edit title of new article', async ({page}) => {
    const navBar = new NavBar(page);
    const newArticle = new NewArticlePage(page);
    const articlePage = new ArticlePage(page);

    const title1 = faker.lorem.word();
    const title2 = faker.lorem.word();

    await page.goto("/");

    await navBar.clickNewArticleButton();
    await newArticle.fillInTitle(title1);
    await newArticle.fillInDescription(`Description of the article ${title1}`);
    await newArticle.fillInBody(`Body of the article ${title1}`);
    await newArticle.fillInTags("#playwright");
    await newArticle.clickPublishButton();

    await articlePage.clickEditArticleButton();
    await newArticle.fillInTitle(title2);
    await newArticle.clickPublishButton();
    await expect(page.locator("//app-article-page/div/div[1]/div/h1")).toContainText(title2);
});
import {test, expect} from '../../fixtures.js';
import {NavBar} from '../../pages/nav.bar.js';
import {NewArticlePage} from '../../pages/newArticle.page.js';
import {ArticlePage} from '../../pages/article.page.js';
import {faker} from '@faker-js/faker';

test('Test 1 - Create new article', async ({homePageFixture}) => {
    const navPage = new NavBar(homePageFixture);
    const newArticle = new NewArticlePage(homePageFixture);

    const title = faker.lorem.word();

    await navPage.clickNewArticleButton();
    await newArticle.fillInTitle(title);
    await newArticle.fillInDescription(`Description of the article ${title}`);
    await newArticle.fillInBody(`Body of the article ${title}`);
    await newArticle.fillInTags("#playwright");
    await newArticle.clickPublishButton();
    await expect(homePageFixture.locator("//app-article-page/div/div[1]/div/h1")).toContainText(title);
});

test('Test 2 - Create comment to new article', async ({newArticlePageFixture}) => {
    const articlePage = new ArticlePage(newArticlePageFixture);

    const comment = faker.lorem.sentence();

    await articlePage.fillInComment(comment);
    await articlePage.clickPostCommentButton();
    await expect(newArticlePageFixture.locator("app-article-comment")).toContainText(comment);
});

test('Test 3 - Edit title of new article', async ({newArticlePageFixture}) => {
    const articlePage = new ArticlePage(newArticlePageFixture);
    const newArticle = new NewArticlePage(newArticlePageFixture);

    const title = faker.lorem.word();

    await articlePage.clickEditArticleButton();
    await newArticle.fillInTitle(title);
    await newArticle.clickPublishButton();
    await expect(newArticlePageFixture.locator("//app-article-page/div/div[1]/div/h1")).toContainText(title);
});
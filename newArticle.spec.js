import { test, expect } from "../fixtures.js";
import { NavPage } from "../pages/nav.page";
import { NewArticlePage } from "../pages/newArticle.page.js";
import { ArticlePage } from "../pages/article.page.js";
import { faker } from "@faker-js/faker";

test("create new article", async ({ homePage }) => {
  const navPage = new NavPage(homePage);
  const newArticle = new NewArticlePage(homePage);
  const title = faker.lorem.word();

  await navPage.clickNewArtilceIcon();
  await newArticle.fillTitle(title);
  await newArticle.fillAbout("It's about boo");
  await newArticle.fillArticle("Boo boo boo. Don't be afraid");
  await newArticle.fillTags("Boo");
  await newArticle.clickPublishBtn();
  await expect(homePage.getByRole("heading")).toContainText(title);
});

test("live a comment to article", async ({ commentPage }) => {
  const articalePage = new ArticlePage(commentPage);
  const comment = faker.lorem.sentence();

  await articalePage.fillComment(comment);
  await articalePage.clickCommentBtn();
  await expect(commentPage.locator("app-article-comment")).toContainText(
    comment
  );
});

/* eslint-disable no-undef */
const assert = require('assert');

Feature('Post Review');

Scenario('User can post a review', async ({ I }) => {
  I.amOnPage('/');

  I.waitForElement('.contentlist a', 5);
  I.click(locate('.contentlist a').first());

  I.waitForElement('#reviewFormContainer', 5);

  const name = 'yadi (tester e2e)';
  const review = 'test 12345';

  I.fillField('#reviewName', name);
  I.fillField('#reviewText', review);
  I.click('#title-button');

  I.waitForElement('.customerReviews', 5);

  const lastReviewName = locate('.customerReview .custName').last();
  const lastReviewContent = locate('.customerReview .custReview').last();

  const lastReviewNameText = await I.grabTextFrom(lastReviewName);
  const lastReviewContentText = await I.grabTextFrom(lastReviewContent);

  I.wait(2);
  assert.ok(lastReviewNameText.includes(name), 'The last review name doesn\'t contain the expected text');
  assert.strictEqual(lastReviewContentText, `"${review}"`);
});

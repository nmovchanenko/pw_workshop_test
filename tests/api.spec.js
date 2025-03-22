import {expect, test} from '@playwright/test';

test.only('api test', async ({page}) => {
    await page.routeFromHAR('./hars/api.har', {
        url: '**/api/**',
        update: false,
    });

    await page.goto('/');
    await page.getByText('Global Feed').click();

    await page.pause();
});

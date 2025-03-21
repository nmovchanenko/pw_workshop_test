import { test as base, expect as baseExpect} from '@playwright/test';

export const test = base.extend({
    homePage: async ({page}, use) => {
        await use(page);
    },
});

export const expect = baseExpect;
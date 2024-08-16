import test, { expect } from "@playwright/test";

test("Native Title Bar not displayed on web", async ({ page }) => {
    await page.goto('http://localhost:8082/#root/_hidden/_options/_optionsAppearance');
    await expect(page.getByRole('heading', { name: 'Theme' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Native Title Bar (requires' })).toBeHidden();
});

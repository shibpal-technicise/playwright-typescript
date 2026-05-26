import { test, expect } from '@playwright/test';

test('My First Test', async ({ page }) => {
/*
    await page.goto('https://google.com');
    await page.locator('textarea[name="q"]').fill('Playwright');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000);
    const results = await page.locator('h3').allTextContents();
    expect(results.length).toBeGreaterThan(0);
*/
    await page.goto('https://playwright.dev');
    await page.locator('text=Docs').click();
    const headings = await page.locator('h1').allTextContents();
    expect(headings.length).toBeGreaterThan(0);
});
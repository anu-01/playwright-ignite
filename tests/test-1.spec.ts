import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://app-web-usvppav53docu.azurewebsites.net/');
  await page.locator('form').filter({ hasText: '[ ADD TO BASKET ] .NET Bot' }).getByRole('button').click();
  await page.getByRole('spinbutton').click();
  await page.getByRole('spinbutton').click();
  await page.getByRole('spinbutton').click();
  await page.getByRole('spinbutton').fill('32');
  await page.locator('.esh-basket-items > section').first().click();
  await page.getByRole('link', { name: '[ Checkout ]' }).click();
  await page.getByLabel('Email').click();
  await page.getByText('User: demouser@microsoft.com').click();
});
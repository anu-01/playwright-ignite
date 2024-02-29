import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://app-web-usvppav53docu.azurewebsites.net/');
  await page.locator('label').filter({ hasText: 'All Mug Sheet T-Shirt USB' }).click();
  await page.getByLabel('All Mug Sheet T-Shirt USB').selectOption('1');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByText('.NET Black & White Mug').click();
  await page.locator('form').filter({ hasText: '[ ADD TO BASKET ] .NET Black' }).getByRole('img').click();
  await page.locator('form').filter({ hasText: '[ ADD TO BASKET ] .NET Black' }).getByRole('img').click();
  await page.locator('form').filter({ hasText: '[ ADD TO BASKET ] .NET Black' }).getByRole('button').click();
  await page.getByRole('link', { name: '1' }).click();
  await page.getByRole('link', { name: '1' }).click();
  await expect(page.getByRole('banner')).toContainText('1');
  await page.getByRole('link', { name: '[ Checkout ]' }).click();
});
const { test, expect } = require('@playwright/test');

test('Открытие главной страницы', async ({ page }) => {
  await page.goto('https://fstravel.com/');

  // Ждем появления header с таймаутом до 10 секунд
  const header = page.locator('header.new-header');
  await header.waitFor({ state: 'visible', timeout: 20000 });

  // Проверка, что header виден
  await expect(header).toBeVisible();

  // Проверка title
  await expect(page).toHaveTitle(/FUN&SUN/i);
});

import { test, expect } from '@playwright/test';

test('abre home', async ({ page }) => {

await page.goto('/');

await expect(page).toHaveTitle(/Portal/);

});

test('navega para eventos', async ({ page }) => {

await page.goto('/');

await page.click('text=Eventos');

await expect(page).toHaveURL(/eventos/);

});

test('filtra evento', async ({ page }) => {

await page.goto('/eventos.html');

await page.fill('#pesquisa','Feira');

await expect(
page.locator('.card-evento').first()
).toContainText('Feira');

});
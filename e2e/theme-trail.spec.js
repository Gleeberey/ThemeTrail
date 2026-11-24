import { expect, test } from '@playwright/test'

test.describe('ThemeTrail user flows', () => {
  test('user can switch the route theme', async ({ page }) => {
    await page.goto('/')

    await page
      .getByRole('button', {
        name: /Архитектура XX века/i,
      })
      .click()

    await expect(page.locator('.route-header h2')).toHaveText(
      'Архитектура XX века',
    )
  })

  test('user can configure walking route parameters', async ({ page }) => {
    await page.goto('/')

    await page.getByLabel('Стартовая точка').fill('Hotel Vilnia')

    await page.getByLabel('Продолжительность').selectOption('90')

    await page
      .getByRole('button', {
        name: /Применить параметры/i,
      })
      .click()

    const successMessage = page.locator('.form-success')

    await expect(successMessage).toBeVisible()
    await expect(successMessage).toContainText('Hotel Vilnia')
    await expect(successMessage).toContainText('90 минут')
  })
})

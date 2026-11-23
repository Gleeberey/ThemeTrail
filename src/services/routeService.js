import { themes } from '../data/places'

const MOCK_DELAY = 400

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

export async function getThemes() {
  await wait(MOCK_DELAY)

  return themes
}

export async function getThemeById(themeId) {
  await wait(MOCK_DELAY)

  const theme = themes[Number(themeId)]

  if (!theme) {
    throw new Error('Route not found')
  }

  return theme
}
import { HttpResponse, http, delay } from 'msw'

import { themes } from '../data/places'

const MOCK_DELAY = 400

export const handlers = [
  http.get('/api/themes', async () => {
    await delay(MOCK_DELAY)

    return HttpResponse.json(themes)
  }),

  http.get('/api/themes/:themeId', async ({ params }) => {
    await delay(MOCK_DELAY)

    const theme = themes[Number(params.themeId)]

    if (!theme) {
      return HttpResponse.json(
        { message: 'Route not found' },
        { status: 404 },
      )
    }

    return HttpResponse.json(theme)
  }),
]
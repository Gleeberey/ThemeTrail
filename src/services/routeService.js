async function apiRequest(url) {
  const response = await fetch(url)

  if (!response.ok) {
    let message = 'Request failed'

    try {
      const data = await response.json()

      if (data.message) {
        message = data.message
      }
    } catch {
      // Keep default message.
    }

    throw new Error(message)
  }

  return response.json()
}

export function getThemes() {
  return apiRequest('/api/themes')
}

export function getThemeById(themeId) {
  return apiRequest(`/api/themes/${themeId}`)
}

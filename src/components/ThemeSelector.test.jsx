// @vitest-environment jsdom

import '@testing-library/jest-dom/vitest'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, test, vi } from 'vitest'

import ThemeSelector from './ThemeSelector'
import { themes } from '../data/places'

afterEach(() => {
  cleanup()
})

describe('ThemeSelector', () => {
  test('calls onSelectTheme when another theme is selected', async () => {
    const user = userEvent.setup()
    const onSelectTheme = vi.fn()

    render(
      <ThemeSelector
        themes={themes}
        selectedTheme={themes[0]}
        onSelectTheme={onSelectTheme}
      />,
    )

    const architectureButton = screen.getByRole('button', {
      name: /Архитектура XX века/i,
    })

    await user.click(architectureButton)

    expect(onSelectTheme).toHaveBeenCalledTimes(1)
    expect(onSelectTheme).toHaveBeenCalledWith(themes[1])
  })
})

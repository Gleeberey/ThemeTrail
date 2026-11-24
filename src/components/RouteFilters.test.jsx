// @vitest-environment jsdom

import '@testing-library/jest-dom/vitest'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, test, vi } from 'vitest'

import RouteFilters from './RouteFilters'

afterEach(() => {
  cleanup()
})

describe('RouteFilters', () => {
  test('updates search query', async () => {
    const user = userEvent.setup()
    const onSearchChange = vi.fn()

    render(
      <RouteFilters
        searchQuery=""
        onSearchChange={onSearchChange}
        sortOrder="default"
        onSortChange={vi.fn()}
      />,
    )

    const searchInput = screen.getByLabelText(/Поиск маршрута/i)

    await user.type(searchInput, 'архитектура')

    expect(onSearchChange).toHaveBeenCalled()
    expect(onSearchChange).toHaveBeenLastCalledWith('а')
  })

  test('changes sorting option', async () => {
    const user = userEvent.setup()
    const onSortChange = vi.fn()

    render(
      <RouteFilters
        searchQuery=""
        onSearchChange={vi.fn()}
        sortOrder="default"
        onSortChange={onSortChange}
      />,
    )

    const sortSelect = screen.getByLabelText(/Сортировка/i)

    await user.selectOptions(sortSelect, 'title-desc')

    expect(onSortChange).toHaveBeenCalledWith('title-desc')
  })
})
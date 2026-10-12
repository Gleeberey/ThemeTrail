// @vitest-environment jsdom

import '@testing-library/jest-dom/vitest'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, test } from 'vitest'

import App from './App'

afterEach(() => {
  cleanup()
})

describe('ThemeTrail', () => {
  test('отображает приложение и стартовый исторический маршрут', () => {
    render(<App />)

    const mainHeading = screen.getByRole('heading', {
      level: 1,
    })

    expect(mainHeading).toHaveTextContent(
      /Откройте Вильнюс\s*по-новому/i,
    )

    expect(
      screen.getByText('Кафедральный собор'),
    ).toBeInTheDocument()

    expect(
      screen.getByText('Башня Гедимина'),
    ).toBeInTheDocument()
  })

  test('переключает маршрут при выборе другой темы', async () => {
    const user = userEvent.setup()

    render(<App />)

    const architectureButton = screen.getByRole('button', {
      name: /Архитектура XX века/i,
    })

    await user.click(architectureButton)

    expect(
      screen.getByText('Дворец бракосочетаний'),
    ).toBeInTheDocument()

    expect(
      screen.getByText('Театр оперы и балета'),
    ).toBeInTheDocument()

    expect(
      screen.queryByText('Кафедральный собор'),
    ).not.toBeInTheDocument()
  })

  test('отображает четыре объекта выбранного маршрута', () => {
    render(<App />)

    const placeCards = screen.getAllByRole('article')

    expect(placeCards).toHaveLength(4)
  })
})
// @vitest-environment jsdom

import '@testing-library/jest-dom/vitest'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, test } from 'vitest'

import RoutePlannerForm from './RoutePlannerForm'
import { useRoutePreferencesStore } from '../store/routePreferencesStore'

beforeEach(() => {
  useRoutePreferencesStore.setState({
    city: 'Vilnius',
    selectedThemeIndex: 0,
    duration: 120,
    startPoint: '',
  })
})

afterEach(() => {
  cleanup()
})

describe('RoutePlannerForm', () => {
  test('shows validation error when start point is empty', async () => {
    const user = userEvent.setup()

    render(<RoutePlannerForm />)

    const submitButton = screen.getByRole('button', {
      name: /Применить параметры/i,
    })

    await user.click(submitButton)

    expect(
      screen.getByText('Укажите стартовую точку маршрута.'),
    ).toBeInTheDocument()
  })

  test('saves valid route parameters', async () => {
    const user = userEvent.setup()

    render(<RoutePlannerForm />)

    const startPointInput = screen.getByLabelText(/Стартовая точка/i)
    const durationSelect = screen.getByLabelText(/Продолжительность/i)

    await user.type(startPointInput, 'Hotel Vilnia')
    await user.selectOptions(durationSelect, '90')

    await user.click(
      screen.getByRole('button', {
        name: /Применить параметры/i,
      }),
    )

    expect(screen.getByText(/Параметры сохранены/i)).toBeInTheDocument()

    expect(screen.getByText(/Hotel Vilnia/i)).toBeInTheDocument()

    expect(screen.getByText(/90 минут/i)).toBeInTheDocument()

    const state = useRoutePreferencesStore.getState()

    expect(state.startPoint).toBe('Hotel Vilnia')
    expect(state.duration).toBe(90)
  })
})

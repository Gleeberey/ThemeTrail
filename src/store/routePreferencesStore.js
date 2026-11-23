import { create } from 'zustand'

export const useRoutePreferencesStore = create((set) => ({
  city: 'Vilnius',
  selectedThemeIndex: 0,
  duration: 120,
  startPoint: '',

  setSelectedThemeIndex: (selectedThemeIndex) =>
    set({ selectedThemeIndex }),

  setDuration: (duration) =>
    set({ duration }),

  setStartPoint: (startPoint) =>
    set({ startPoint }),

  resetPreferences: () =>
    set({
      city: 'Vilnius',
      selectedThemeIndex: 0,
      duration: 120,
      startPoint: '',
    }),
}))
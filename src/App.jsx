import { Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage'
import RoutesPage from './pages/RoutesPage'
import RoutePage from './pages/RoutePage'
import AboutPage from './pages/AboutPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/routes" element={<RoutesPage />} />
      <Route path="/routes/:themeId" element={<RoutePage />} />
      <Route path="/about" element={<AboutPage />} />
    </Routes>
  )
}

export default App

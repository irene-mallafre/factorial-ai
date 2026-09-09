import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/p/home" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/p/home" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

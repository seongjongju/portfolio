import './App.css'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from "framer-motion";
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'

function App() {
  const location = useLocation();

  return (
    <>
      {/* router */}
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path='/home' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </AnimatePresence>
      {/* router */}
    </>
  )
}

export default App

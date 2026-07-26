import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from "framer-motion";
import HomePage from './pages/HomePage'

function App() {
  const location = useLocation();

  return (
    <>
      {/* router */}
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </AnimatePresence>
      {/* router */}
    </>
  )
}

export default App

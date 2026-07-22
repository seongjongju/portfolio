import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutMe from './pages/AboutMe'
import Home from './pages/Home'

function App() {
  return (
    <>
      {/* router */}
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<AboutMe />} />
      </Routes>
      {/* router */}
    </>
  )
}

export default App

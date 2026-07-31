import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from "framer-motion";
import HomePage from './pages/HomePage'
import ProjectViewPage from './pages/project_view/ProjectViewPage';

function App() {
  const location = useLocation();

  return (
    <>
      {/* router */}
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<HomePage />} />
          
          {/* 프로젝트 서브페이지 */}
          <Route path='/projects/:id' element={<ProjectViewPage />} />
        </Routes>
      </AnimatePresence>
      {/* router */}
    </>
  )
}

export default App

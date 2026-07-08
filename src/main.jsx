import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SectionContextProvider } from './context/SectionContext.jsx';
import Header from './inc/Header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SectionContextProvider>
      <Header />
      <App />
    </SectionContextProvider>
  </StrictMode>,
)

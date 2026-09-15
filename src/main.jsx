import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'src/assets/styled/reset.css';
import 'src/assets/styled/common.css';
import App from './App.jsx'
import { SectionContextProvider } from './context/SectionContext.jsx';
import Header from './inc/Header.jsx'
import { GsapContextProvider } from './context/GsapContext.jsx';
import { BrowserRouter } from 'react-router-dom';
import Footer from './inc/Footer';
import { DarkModeContextProvider } from './context/DarkModeContext.jsx';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <BrowserRouter>
      <DarkModeContextProvider>
        <SectionContextProvider>
          <GsapContextProvider>
            <Header />
            <App />
            <Footer />
          </GsapContextProvider>
        </SectionContextProvider>
      </DarkModeContextProvider>
    </BrowserRouter>
  //</StrictMode>,
)

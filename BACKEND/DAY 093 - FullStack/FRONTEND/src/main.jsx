import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NotexContext from './context/NotexContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NotexContext>
      <App />
    </NotexContext>
  </StrictMode>
)

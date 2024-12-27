import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContextProvidder from './Features/ContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <ContextProvidder>
    <App />
  </ContextProvidder>
  ,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Css/main.css'
import './Css/media.css'
import './Css/pace.css'
import './Css/select.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { BasketProvider } from './context/BasketContext.jsx'

createRoot(document.getElementById('root')).render(
<BasketProvider>
    <BrowserRouter>
    <App />
  </BrowserRouter>,
</BasketProvider>
)

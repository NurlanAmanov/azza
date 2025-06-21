import React, { useEffect } from 'react'
import Router from './Router/Router'
import './Css/main.css'
import './Css/media.css'
import './Css/pace.css'
import './Css/select.css'
import './Css/main.css'
import './Css/media.css'
import './Css/pace.css'
import { useLocation } from 'react-router-dom'
function App() {
    const { pathname } = useLocation()
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname])
  return (
    <><Router/></>
  )
}

export default App
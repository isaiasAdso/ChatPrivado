import { useState } from 'react'
import { HashRouter } from 'react-router-dom'
import './App.css'
import { CookieProvider } from '../Context/CookieContext'
import AppRoutes from '../routes/Routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <HashRouter>
      <CookieProvider>
        <AppRoutes/>
      </CookieProvider>
    </HashRouter>
  )
}

export default App

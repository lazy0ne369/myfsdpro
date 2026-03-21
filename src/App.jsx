import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import Login from './components/login'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState('')
  const [currentPage, setCurrentPage] = useState('home')

  const handleLogin = (username) => {
    setIsLoggedIn(true)
    setUser(username)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUser('')
    setCurrentPage('home')
  }

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <Home />
      case 'about': return <About />
      case 'contact': return <Contact />
      default: return <Home />
    }
  }

  return (
    <div className="app-layout">
      <Navbar user={user} onLogout={handleLogout} currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="main-content">
        {renderPage()}
      </main>
    </div>
  )
}

export default App

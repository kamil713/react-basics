import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)

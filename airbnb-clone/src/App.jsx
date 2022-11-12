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
      <Card 
          img="katie-zaferes.png"
          rating="5.0"
          reviewCount={6}
          country="USA"
          title="Life Lessons with Katie Zaferes"
          price={13}
      />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)

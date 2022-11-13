import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar'
import Card from './components/Card'
import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <section>
        <Card />
        <div className='line'></div>
        <Card />
        <div className='line'></div>
        <Card />
      </section>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
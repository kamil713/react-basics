import React from 'react'
import ReactDOM from 'react-dom/client'
import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interests'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className='container'>
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)

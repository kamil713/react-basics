import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import './App.css'

function App() {
  return (
    <div>
      <Header />
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
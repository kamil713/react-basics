import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/Navbar'
import Card from './components/Card'
import data from './separate'
import './App.css'

function App() {
  const cardElements = data.map(item => {
    return <Card 
      key={item.id}
      {...item}
    />
  })

  return (
    <div>
      <Navbar />
      <section>
        {cardElements[0]}
        <div className='line'></div>
        {cardElements[1]}
        <div className='line'></div>
        {cardElements[2]}
      </section>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
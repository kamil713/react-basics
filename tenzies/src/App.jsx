import ReactDOM from 'react-dom/client'
import Die from './components/Die';
import './App.css'

function App() {
  return (
    <main>
      <div className='dice-container'>
        <Die value={4} />
        <Die value={1} />
        <Die value={2} />
        <Die value={4} />
        <Die value={3} />
        <Die value={1} />
        <Die value={5} />
        <Die value={6} />
        <Die value={1} />
        <Die value={2} />
      </div>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
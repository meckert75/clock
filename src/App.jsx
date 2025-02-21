import { useState } from 'react'
import './App.css'
import Clock from './components/Clock/Clock.jsx'
import ClockCard from './components/Clock/ClockCard.jsx'
import CardContainer from './components/Clock/ClockContainer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CardContainer />
    </>
  )
}

export default App

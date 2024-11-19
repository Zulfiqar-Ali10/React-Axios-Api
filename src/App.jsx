import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Services from './Components/Services'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
         <Route path='/' element={<Header />} />
         <Route path='/services' element={<Services />} />

      </Routes>
    </>
  )
}

export default App

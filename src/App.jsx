import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Outlet } from "react-router-dom"

import Header from "./components/Header.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <Outlet />
    </>
  )
}

export default App

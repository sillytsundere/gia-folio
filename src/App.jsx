import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Outlet } from "react-router-dom"

import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default App

import React from 'react'
import './App.css'
import { GlobalCss } from './styles'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Calculator from './Components/Calculator'

function App() {
  return (
    <>
      <GlobalCss />
      <Header />
      <Calculator />
      <Footer />
    </>
  )
}

export default App

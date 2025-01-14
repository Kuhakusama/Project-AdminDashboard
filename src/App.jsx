//import { useState } from 'react'
//const [count, setCount] = useState(0)

import { Routes, Route } from "react-router-dom"

import { HomePage } from "./Pages/HomePage"
import ProductPage from "./Pages/ProductPage"
import { SideBar } from "./Componets/SideBar"

function App() {
  
  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
      {/* BG */ }
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 opacity-80" />
        <div className="absolute inset-0 backdrop-blur-sm" />
      </div>
      <SideBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
    </div>
  )
}

export default App

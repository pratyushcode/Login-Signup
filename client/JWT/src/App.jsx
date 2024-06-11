import { useState } from 'react'
import Header from './pages/header/Header'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/auth/login/Login'
import Signup from './pages/auth/signup/Signup'
import Dashboard from './pages/dashboard/Dashboard'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Routes>

        <Route path="/login" element={<Login/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
      </Routes>
    </>
  )
}

export default App

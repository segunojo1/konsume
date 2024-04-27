import { useState } from 'react'
import './App.css'
import SignUp from './pages/SignUp'
import Setup from './pages/Setup'
import Login from './pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import SetupContext, { SetupProvider } from './context/SetupContext'
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <div className="bg-[#EDFAE7] font-[poppins]">
     <BrowserRouter>
       <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path='/signup' element={<SignUp />} />
        {/* <Route path='/setup'  element={
            <PrivateRoute>
              <Setup />
            </PrivateRoute>
          } /> */}
          <Route path='/setup' element={
          <SetupProvider>
            <Setup />
          </SetupProvider>
          }/>
          <Route path='/dashboard' element={<Dashboard />}/>
          
       </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App

import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Sign from './pages/Sign'
import Room from './pages/Room'


export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Sign />} />
        <Route path='/home' element={<Home />} />
        <Route path='/room/:roomId' element={<Room />} />
      </Routes>
    </div>
  )
}

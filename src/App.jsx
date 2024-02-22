import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Favorites from './pages/favorite/Favorites'
import Home from './pages/home/Home'
import Details from './pages/details/Details'
import NavBar from './components/NavBar'
const App = () => {
  return (
    <>
      <div className="min-h-screen bg-white text-lg text-gray-600">

        {/* Nav Bar component */}
        <NavBar />

        <Routes>

          {/* Navigate to Home page */}
          <Route path='/' element={<Home />}></Route>

          {/* Navigate to Home page */}
          <Route path='/details/:id' element={<Details />}></Route>

          {/* Navigate to Favorites page */}
          <Route path='/favorites' element={<Favorites />}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
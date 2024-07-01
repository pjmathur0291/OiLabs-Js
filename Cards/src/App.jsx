import React from 'react'
import './App.css'
import Card from './Card'
import Home from './Home'
import Login from './Login'
import Footer from './Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  // const products = [
  //   {
  //     id: 1,
  //     Name: "Shoes",
  //     Company: "Red Tape",
  //     description: "lorem ipsum",
  //     Price: "2000",
  //     image: img
  //   },
  //   {
  //     id: 2,
  //     Name: "Shoes",
  //     Company: "Red Tape",
  //     description: "lorem ipsum",
  //     Price: "2000",
  //     image: img
  //   },
  //   {
  //     id: 3,
  //     Name: "Shoes",
  //     Company: "Red Tape",
  //     description: "lorem ipsum",
  //     Price: "2000",
  //     image: img
  //   },
  //   {
  //     id: 4,
  //     Name: "Shoes",
  //     Company: "Red Tape",
  //     description: "lorem ipsum",
  //     Price: "2000",
  //     image: img
  //   }
  // ]
  return (
    


      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Card' element={<Card />}></Route>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/Footer' element={<Footer />}></Route>
        </Routes>
      </Router>


  )
}
export default App
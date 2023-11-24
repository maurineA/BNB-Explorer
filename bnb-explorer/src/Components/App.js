import React from 'react'
import NavBar from './NavBar'
import { Route ,Routes } from 'react-router-dom'
import Home from './Home'
import Services from './Services'
import BookingForm from './BookingForm'
import PostForm from './PostForm'
import Reviews from './Reviews'
import Footer from './Footer'

function App() {
  return (
    <div>
      < NavBar />
      <Routes>
        <Route path='/'element={<Home/>}></Route>
      <Route path="/services"element={<Services/>}  ></Route>
      <Route path='/home'element={<Home/>}></Route>
      <Route path= "/boking form"element={<BookingForm/>}></Route>
      <Route path="/postForm"element={<PostForm/>}></Route>
      <Route path="/reviews" element={<Reviews/>}></Route>
          </Routes>
          <Footer />
    </div>
  )
}

export default App
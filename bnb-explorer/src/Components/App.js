import React from 'react'
import NavBar from './NavBar'
import { Route ,Routes } from 'react-router-dom'
import Home from './Home'
import Services from './Services'
import BookingForm from './BookingForm'
import PostingForm from './PostingForm'
import Reviews from './Reviews'
import Footer from './Footer'

function App() {
  return (
    <>
      < NavBar />
      <Routes>
        <Route path='/'element={<Home/>}></Route>
      <Route path="/services"element={<Services/>}  ></Route>
      <Route path='/home'element={<Home/>}></Route>
      <Route path= "/boking form"element={<BookingForm/>}></Route>
      <Route path="/postingForm"element={<PostingForm/>}></Route>
      <Route path="/reviews" element={<Reviews/>}></Route>
          </Routes>
          <Footer />
    </>
  )
}

export default App
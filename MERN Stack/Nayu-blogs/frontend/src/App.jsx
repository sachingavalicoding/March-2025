import React from 'react'
import HomePage from './pages/HomePage'
import {Routes , BrowserRouter as Router , Route} from "react-router-dom"
import Navbar from './Components/Navbar'
import BlogPage from './pages/BlogPage'
import BlogDetails from './Components/sections/BlogDetails'
import AddBlog from './Components/sections/AddBlog'
const App = () => {
  return (
    <Router>
       <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
       <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/blogs' element={<BlogPage />} />
        <Route path='/addblog' element={<AddBlog />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
      </Routes>
      </div>
    </Router>
  )
}

export default App
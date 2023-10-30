import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Home, CreatePost } from './pages'
const App = () => {
  return (
    <BrowserRouter>
      <header className='w-fulll flex justify-between items-center border-b border-b-[#e6ebf4]'>
        <Link to="/">LOGO</Link>
        <Link to="create-post" className='bg-[#6469ff] text-white rounded-md '>CREATE</Link>
      </header>
      <main className='bg-[#f9fafe] min-h-[calc(100vh-73px)]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-post' element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
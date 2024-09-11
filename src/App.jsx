import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import Hero from './Component/Hero/Hero'
import About from './Component/About/About'
import Services from './Component/Services/Services'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Work from './Component/Mywork/Work'
function App() {
  const router = createBrowserRouter([
    {
      path : "/",
      element : <>
<Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Work/>
      </>
    }
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
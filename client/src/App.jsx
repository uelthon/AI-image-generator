import React, { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ScrolltoTop from './components/ScrolltoTop'
import SuspenseHook from './components/SuspenseHook'

const Generate = lazy(() => import('./pages/Generate'))
const Gallery = lazy(() => import('./pages/Gallery'))

const App = () => {
  return (
    <HelmetProvider>
      <Navbar />
      <main className='pt-[64px] flex flex-col justify-start items-center'>
        <section className='w-full md:w-4/5'>
          <Routes>
            <Route
              path='/'
              element={<Home />}
            />
            <Route
              path='/generate/:prompt'
              element={<SuspenseHook height='80vh' component={<Generate />} />}
            />
            <Route
              path='/gallery'
              element={<SuspenseHook height='80vh' component={<Gallery />} />}
            />
          </Routes>
        </section>
      </main>
      <ScrolltoTop />
      <Footer />
    </HelmetProvider>
  )
}

export default App

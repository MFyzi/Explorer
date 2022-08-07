import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Upcoming from './components/page_events/upcoming'
import Episode from './components/page_events/episode'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <Upcoming />
      <Episode />
      <Footer />
      {/* <Hero /> */}
    </div>
  )
}

export default App
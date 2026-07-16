import React from 'react'
import Navbar from './Navbar/Navabar'
import Footer from "./Footer/Footer"
import Page from './Home/Page'
import Pagetwo from './Home/Pagetwo'
import Natijalar from './Components/Natijalar'
import Xizmatlar from './Components/Xizmatlar'
import Telegram from './Components/Telegram'
function App() {
  return (
    <div>
      <Navbar/>
      <Page/>
      <Pagetwo/>
      <Natijalar/>
      <Xizmatlar/>
      <Telegram/>
      <Footer/>
    </div>
  )
}

export default App

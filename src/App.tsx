import React from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Contacts from './page/sections/Contacts'
import Header from './page/sections/Header'
import Home from './page/sections/Home'
import Projects from './page/sections/Projects'
import Skills from './page/sections/Skills'
import Footer from './page/sections/Footer'
import ScrollToTop from './page/components/ScrollToTop'

const App = () => {
  React.useEffect(() => {
    Aos.init({
      duration: 1500,
    })
  }, [])
  return (
    <div className=" bg-bgprimary ">
      <div className="bg-bgprimary">
        <ScrollToTop />
        <Header></Header>
        <Home></Home>
        <Skills></Skills>
        <Projects></Projects>
        <Contacts></Contacts>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default App

import './App.css'
import { useState, useEffect } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = ()=> {
  const [scrollHeight, setScrollHeight] = useState(0)
  
  const handleScroll = ()=> {
    const position = window.pageYOffset;
    setScrollHeight(position)
  }

  useEffect(()=>{
    window.addEventListener('scroll', handleScroll)
  }, [scrollHeight])

  return (
    <div className='App'>
      <Navbar isScrolling={scrollHeight}/>
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App

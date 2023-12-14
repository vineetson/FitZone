"use client"
import Navbar from '../components/main/Navbar'
import Home from '../components/main/Home'
import Plans from '../components/main/Plans'
import About from '../components/main/About'
import Trainers from '../components/main/Trainers'
import Contact from '../components/main/Contact'
import Footer from '../components/main/Footer'




export default function HomePage() {
  return (
    
    <div className='bg-black text-white'>
        <main>
          <div id="home">
            <Home />
          </div>

          <div id="plans">
            <Plans />
          </div>

          <div id="about">
            <About />
          </div>

          <div id="trainers">
            <Trainers />
          </div>

          <div id="contact">
            <Contact />
          </div>
        </main> 
    </div>
  )
}

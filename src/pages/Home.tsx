import { useState } from 'react'
import About from '../components/About'
import Education from '../components/Education'
import Intro from '../components/Intro'
import Sidebar from '../components/Sidebar'
import Skills from '../components/Skills'

function Home() {
  const [activeSection, setActiveSection] = useState('about')
  return (
    <>
        <div className='bg-gray-900 h-screen flex'>

          <div className='flex flex-col size-20 grow-4 px-12 py-15'>
            <Intro/>
            <Sidebar activeSection={activeSection} setActiveSection={setActiveSection}/>
          </div>

          <div className='flex flex-col size-20 grow-6 px-6'>
            {activeSection == "about" && <About/>}
            {activeSection == "experience" && <Education/>}
            <Skills/>
          </div>

        </div>
    </>
  )
}

export default Home

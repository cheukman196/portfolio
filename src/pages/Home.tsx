import { useState } from 'react'
import About from '../components/About'
import Education from '../components/Education'
import Intro from '../components/Intro'
import Sidebar from '../components/Sidebar'
import Skills from '../components/Skills'
import Links from '../components/Links'
import Projects from '../components/Projects'

function Home() {
  const [activeSection, setActiveSection] = useState('about')
  return (
    <>
        <div className='bg-gray-900 h-screen min-h-screen flex overflow-y-scroll scroll-smooth'>

          <div className='flex flex-col size-20 flex-grow px-20 py-15 sticky top-0'>
            <Intro/>
            <Sidebar activeSection={activeSection} setActiveSection={setActiveSection}/>
            <Links/>
          </div>

          <div className='flex flex-col flex-2 px-6'>
            {activeSection == "about" && <About/>}
            {activeSection == "experience" && <><Skills/> <Education/></> }
            {activeSection == "projects" && <Projects/> }
          </div>

        </div>
    </>
  )
}

export default Home

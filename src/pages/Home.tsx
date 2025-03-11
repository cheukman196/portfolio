import About from '../components/About'
import Education from '../components/Education'
import Intro from '../components/Intro'
import Sidebar from '../components/Sidebar'

function Home() {

  return (
    <>
        <div className='bg-gray-900 h-screen flex'>
          <div className='flex flex-col size-20 grow-4 px-12 py-15'>
            <Intro/>
            <Sidebar/>
          </div>
          <div className='flex flex-col size-20 grow-6 px-6'>
            <About/>
            <Education/>
          </div>
        </div>
    </>
  )
}

export default Home

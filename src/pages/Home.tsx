import Intro from '../components/Intro'
import Sidebar from '../components/sidebar'

function Home() {

  return (
    <>
        <div className='bg-radial-[at_25%_25%] from-gray-900 to-gray-800 h-screen'>
          <Intro/>
          <Sidebar/>
        </div>
    </>
  )
}

export default Home

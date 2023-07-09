import Hero from './components/Hero'
import Demo from './components/Demo'

import './App.css'

const App = () => {
  return (
    <main>
      <div className='main'>
        <div className='gradient'>
        </div>
      </div>
        <div className="relative z-10 flex justify-center items-center flex-col max-w-7xl mx-auto sm: px-16 px-6">
        <Hero />
        <Demo />
      </div>


    </main>
  )
}

export default App
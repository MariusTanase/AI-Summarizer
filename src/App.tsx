import Hero from './components/Hero'
import AIComponent from './components/AIComponent'

import './App.css'

const App = () => {
  return (
    <main>
      <div className='main'>
        <div className='gradient'>
        </div>
      </div>
        <div className="relative z-10 flex justify-center items-center flex-col max-w-7xl mx-auto sm: px-16">
        <Hero />
        <AIComponent />
      </div>


    </main>
  )
}

export default App
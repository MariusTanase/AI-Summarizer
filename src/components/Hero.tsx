import { logo } from '../assets'

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full p-3 mb-7'>
        <h2 className='text-white bg-black p-2 rounded-lg text-2xl'>AI Summz</h2>
        <button type='button' onClick={() => window.open('https://github.com/MariusTanase/AI-Summarizer')} className='ease-in-out duration-300 rounded-full border border-black bg-black py-1.5 px-5 text-sm text-white transition-all hover:bg-white hover:text-black'>
          Github
        </button>

      </nav>
    </header>
  )
}

export default Hero
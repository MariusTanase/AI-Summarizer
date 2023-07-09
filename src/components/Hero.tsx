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

      <h1 className='mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl text-center'>
        Summarize articles with <br className='max-md:hidden' />
        <span className='bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent'>OpenAI Model</span>
      </h1>
      <h2 className='mt-5 text-lg text-gray-600 sm:text-xl text-center max-w-2xl'>
          Simplify your reading with AI Summz, an AI-powered summarizer that can summarize any article in a few seconds.
      </h2>
    </header>
  )
}

export default Hero
import {useState, useEffect} from 'react'
import {copy, linkIcon, loader, tick} from '../assets';
const Demo = () => {
  return (
    <section className='mt-16 w-full max-w-xl'>

      <div className='flex flex-col w-full gap-2'>
        <form className='flex relative justify-center items-center'
          onSubmit={()=> {}}>
            <img
            src={linkIcon}
            alt="link icon"
            className='absolute left-0 my-2 ml-2 w-5'
          />
          <input className='peer block w-full rounded-lg border-2 transition-all duration-300 ease-in-out outline-none border-gray-300 bg-white shadow-lg font-satoshi focus:border-black focus:outline-none focus:ring-0 py-2.5 pl-10 pr-12 text-sm'
            type='url'
            placeholder='Enter the article URL'
            onChange={()=> {}}
            value=""
            required
          />

          <button
          type='submit'
          className='peer-focus:border-gray-700 peer-focus:text-gray-700 hover:border-gray-700 transition-all duration-300 ease-in-out hover:text-gray-700 absolute inset-y-0 text-xl flex justify-center items-center right-0 my-1.5 mr-1.5 flex w-fit px-2 items-center justify-center rounded border border-gray-200 font-sans text-sm font-medium text-gray-400'
          >
           <span>Search</span>
          </button>
          </form>
      </div>

    </section>
  )
}

export default Demo
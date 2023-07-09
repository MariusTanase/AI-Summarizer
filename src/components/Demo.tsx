/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState, useEffect } from 'react'
import { copy, linkIcon, loader, tick } from '../assets';

import { useLazyGetSummaryQuery } from '../services/article';

const Demo = () => {
  const [article, setArticle] = useState({
    url: '',
    summary: ''
  });

  const [history, setHistory] = useState([]);

  useEffect(() => {
    const historyFromLocalStorage = JSON.parse(localStorage.getItem('history'))
    if (historyFromLocalStorage) {
      setHistory(historyFromLocalStorage);
    }
  }, []);

  const [getSummary, { isLoading, isError }] = useLazyGetSummaryQuery();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { data } = await getSummary({ articleUrl: article.url });
    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };

      const updatedHistory = [newArticle, ...history];

      setHistory(updatedHistory);
      setArticle(newArticle);

      localStorage.setItem('history', JSON.stringify(updatedHistory));
    }
  }

  const [copied, setCopied] = useState('');

  const handleCopy = (copyUrl) => {
    setCopied(copyUrl)
    navigator.clipboard.writeText(copyUrl)

    setTimeout(() => {
      setCopied('')
    },3000)

  }


  return (
    <section className='mt-16 w-full max-w-xl'>

      <div className='flex flex-col w-full gap-2'>
        <form className='flex relative justify-center items-center'
          onSubmit={(e) => handleSubmit(e)}>
          <img
            src={linkIcon}
            alt="link icon"
            className='absolute left-0 my-2 ml-2 w-5'
          />
          <input className='peer block w-full rounded-lg border-2 transition-all duration-300 ease-in-out outline-none border-gray-300 bg-white shadow-lg font-satoshi focus:border-black focus:outline-none focus:ring-0 py-2.5 pl-10 pr-12 text-sm'
            type='url'
            placeholder='Enter the article URL'
            onChange={(e) => { setArticle({ ...article, url: e.target.value }) }}
            value={article.url}
            required
          />

          <button
            type='submit'
            className='peer-focus:border-gray-700 peer-focus:text-gray-700 hover:border-gray-700 transition-all duration-300 ease-in-out hover:text-gray-700 absolute inset-y-0 text-xl flex justify-center items-center right-0 my-1.5 mr-1.5 w-fit px-2 rounded border border-gray-200 font-sans font-medium text-gray-400'
          >
            <span>Search</span>
          </button>
        </form>

        {/* Searched URLs history */}
        <div className='flex flex-col gap-2 max-h-60 overflow-y-auto'>
          <h2 className='text-lg font-medium'>History</h2>
          {history.map((item, index) => (
            <div key={`key-${index}`} onClick={() => setArticle(item)} className='p-3 flex justify-start items-center flex-row bg-white border border-gray-200 gap-3 rounded-lg cursor-pointer'>
              <div onClick={() => handleCopy(item.url)} className='w-7 h-7 rounded-full bg-white/10 shadow-[inset_10px_-50px_94px_0_rgb(199, 199, 199, 0.2)] backdrop-blur flex justify-center items-center cursor-pointer'>
                <img src={copied === item.url ? tick : copy} alt='copy icon' className='w-[40%] h-[40%] object-contain' />
              </div>
              <p className='flex-1 font-satoshi text-blue-800 text-md font-medium truncate'>
                {item.url}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Display the result form API */}

      <div className='my-10 max-w-full flex justify-center items-center'>
        {isLoading ? (
          <div className='flex flex-col justify-center items-center'>
            <img src={loader} alt='loader' className='w-20 h-20' />
            <p className='font-satoshi text-gray-500 text-sm'>Loading...</p>
          </div>
        ) : isError ? (
          <div className='flex flex-col justify-center items-center'>
            <p className='font-inter font-bold text-red-900 text-center'>
              Error!
              <br />

              <span className='font-satoshi font-normal text-gray-800'>
                {isError?.data?.error || 'Something went wrong'}

              </span>

            </p>
          </div>
        ) : (
          article.summary && (
            <div className='flex flex-col gap-4'>
              <h2 className='font-satosh font-bold text-gray-700 text-xl'>Article <span className='font-black bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent'>Summary</span></h2>
              <div className='rounded-xl border border-gray-200 bg-white/20 shadow-[inset_10px_-50px_94px_0_rgb(199, 199, 199, 0.2)] backdrop-blur p-4'>
                <p className='font-inter font-medium text-sm text-gray-800'>
                  {article.summary}
                </p>
              </div>
            
            </div>
          )
        )}
      </div>

    </section>
  )
}

export default Demo
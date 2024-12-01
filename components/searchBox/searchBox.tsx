'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
const SearchBox = () => {
  let [query, setQuery] = useState('');
  let router = useRouter();

  let handleSubmit = (e: any) => {
    e.preventDefault();
    if (query) {
      const x1: any = localStorage?.getItem('history');
      const currentDate: any = new Date().toISOString().split('T')[0];
      const time = new Date().toTimeString().split(' ')[0];
      const serialNumber = Math.floor(10000 + Math.random() * 90000);
      if (x1) {
        const x2 = JSON.parse(x1);
        x2.push({
          date: currentDate,
          searchQuery: query,
          time: time,
          no: serialNumber,
        });
        localStorage?.setItem('history', JSON.stringify(x2));
      } else {
        localStorage?.setItem(
          'history',
          JSON.stringify([
            {
              date: currentDate,
              searchQuery: query,
              time: time,
              no: serialNumber,
            },
          ]),
        );
      }
      router.push(`/results?query=${query}`);
    } else {
      Swal.fire({
        icon: 'info',
        text: 'Type your query first.',
      });
    }
  };
  return (
    <div className='container mx-auto px-6 py-16 text-center'>
      <div className='mx-auto max-w-lg'>
        <Link href='/'>
          <Image src='/logo.png' alt='Logo' width={500} height={170} />
        </Link>
        <h1 className='animate-jump bg-gradient-to-r from-blue-500 via-[#0DBFDF] to-purple-500 bg-clip-text text-3xl font-semibold text-transparent animate-thrice dark:text-white lg:text-4xl'>
          Create beautiful website layout with Meraki UI.
        </h1>

        <div className='mx-auto mt-6 w-full max-w-sm rounded-md border bg-transparent focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 focus-within:ring-opacity-40 dark:border-gray-700 dark:focus-within:border-blue-300'>
          <form onSubmit={handleSubmit} className='flex flex-col md:flex-row'>
            <input
              value={query}
              onChange={(e: any) => setQuery(e.target.value)}
              type='text'
              placeholder='Search anything'
              className='m-1 h-10 flex-1 appearance-none border-none bg-transparent px-4 py-2 text-gray-700 placeholder-gray-400 focus:placeholder-transparent focus:outline-none focus:ring-0 dark:text-gray-200'
            />
            <button
              type='submit'
              className='m-1 h-10 transform rounded-md bg-[#0DBFDF]  px-4 py-2 text-white transition-colors duration-300 hover:bg-blue-400 focus:bg-blue-400 focus:outline-none'
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;

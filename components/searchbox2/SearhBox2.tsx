'use client';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const SearchBox2 = ({ query, suggestion }: any) => {
  let [searchQuery, setSearchQuery] = useState(query);
  //   const paramsObject = Object.fromEntries(searchParams.entries());
  //   console.log(paramsObject);
  let router = useRouter();
  useEffect(() => {
    setSearchQuery(query);
  }, [query]);

  let handleSubmit = (e: any) => {
    e.preventDefault();
    if (searchQuery) {
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
      router.push(`/results?query=${searchQuery}`);
    } else {
      Swal.fire({
        icon: 'info',
        text: 'Type your query first.',
      });
    }
  };
  return (
    <div className='mb-4 mt-4 flex items-center justify-center'>
      <form
        onSubmit={handleSubmit}
        className='flex w-full max-w-md items-center'
      >
        <input
          placeholder='Search...'
          value={searchQuery}
          onChange={(e: any) => setSearchQuery(e.target.value)}
          type='text'
          className='h-12 w-full rounded-l border border-gray-300 px-4 focus:outline-none'
        />
        <button
          type='submit'
          className='h-12 rounded-r bg-[#0DBFDF] px-6 text-white'
        >
          Subscribe
        </button>
      </form>
      <Link
        href={'/results?query=' + suggestion}
        className='ml-4 text-gray-400'
      >
        <span className='font-bold'>Suggestion:</span> {suggestion}
      </Link>
    </div>
  );
};
export default SearchBox2;

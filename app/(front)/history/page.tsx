'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const HistoryPage = () => {
  let [history, setHistory]: any = useState('');

  useEffect(() => {
    // Check if window and localStorage are available (browser-side check)
    if (typeof window !== 'undefined' && window.localStorage) {
      const x1 = localStorage.getItem('history');
      setHistory(x1);
    }
  }, []); // Empty dependency array means it runs once after the initial render

  const handleHistory = (no: any) => {
    if (typeof window !== 'undefined' && window.localStorage) {
      const x3 = JSON.parse(history);
      const updatedArray = x3.filter((item: { no: number }) => item.no !== no);
      localStorage.setItem('history', JSON.stringify(updatedArray));
      window.location.reload();
    }
  };

  if (history) {
    const x2 = JSON.parse(history);
    return (
      <>
            <div className='mx-auto max-w-screen-xl px-4 md:px-8'>
        <div className='max-w-lg'>
          <h3 className='text-xl font-bold text-gray-300 sm:text-2xl'>
            History
          </h3>
        </div>
        <div className='mt-12 overflow-x-auto rounded-lg border shadow-sm'>
          <table className='w-full table-auto text-left text-sm'>
            <thead className='border-b bg-gray-50 font-medium text-gray-600'>
              <tr>
                <th className='px-6 py-3'>No.</th>
                <th className='px-6 py-3'>Query</th>
                <th className='px-6 py-3'>Date</th>
                <th className='px-6 py-3'>Time</th>
                <th className='px-6 py-3'>Action</th>
              </tr>
            </thead>
            <tbody className='divide-y text-gray-600'>
              {x2.map((item: any, idx: any) => (
                <tr key={idx}>
                  <td className='whitespace-nowrap px-6 py-4'>{item.no}</td>
                  <td className='whitespace-nowrap px-6 py-4'>
                    {item.searchQuery}
                  </td>
                  <td className='whitespace-nowrap px-6 py-4'>{item.date}</td>
                  <td className='whitespace-nowrap px-6 py-4'>{item.time}</td>
                  <td
                    className='cursor-pointer whitespace-nowrap px-6 py-4'
                    onClick={() => handleHistory(item.no)}
                  >
                    {'Delete'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      </>
    );
  } else {
    return (
      <div className='grid flex-1 place-items-center'>
        <div className='flex flex-col justify-center'>
          <h1 className='mb-4 text-xl font-semibold'>No history recorded.</h1>
          <Link href='/' className='btn'>
            Back Home
          </Link>
        </div>
      </div>
    );
  }
};

export default HistoryPage;

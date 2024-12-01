import Link from 'next/link';
import React from 'react';

const ResultCards = ({ results }: any) => {
  return (
    <div className='container mx-auto grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-3'>
      {results
        ? results.map((item: any) => (
            <Link
              href={item.url}
              target='_blank'
              key={item.position}
              className='max-w-2xl rounded-lg bg-purple-500 px-8 py-4 shadow-md'
            >
              <div className='mt-2'>
                <Link
                  target='_blank'
                  href={item.url}
                  className='text-xl font-bold text-gray-100 hover:text-blue-600 hover:underline dark:text-white dark:hover:text-gray-200'
                  role='link'
                >
                  {item.title}
                </Link>
                <p className='mt-2 text-gray-300 dark:text-gray-300'>
                  {item.description}
                </p>
              </div>

              <div className='mt-4 flex items-center justify-between'>
                <Link
                  href={item.url}
                  className='text-indigo-900 hover:underline dark:text-blue-400'
                  role='link'
                  target='_blank'
                >
                  {item.url}
                </Link>
              </div>
            </Link>
          ))
        : ''}
    </div>
  );
};

export default ResultCards;

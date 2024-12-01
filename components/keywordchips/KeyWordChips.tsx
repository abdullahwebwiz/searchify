import Link from 'next/link';
import React from 'react';

const KeywordChips: React.FC = ({ keywords }: any) => {
  return (
    <div className='mx-auto mt-4 max-w-fit'>
      <div className='inline-flex flex-wrap gap-2 justify-center'>
        {keywords
          ? keywords.map((item: any) => (
              <Link
                href={'/results?query=' + item.keyword}
                key={item.position}
                className='inline-block rounded-full border border-gray-300 bg-blue-500 px-3 py-1 text-sm font-medium text-gray-700 shadow-sm'
                dangerouslySetInnerHTML={{ __html: item.keyword_html }}
              ></Link>
            ))
          : ''}
      </div>
    </div>
  );
};

export default KeywordChips;

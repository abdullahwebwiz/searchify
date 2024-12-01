'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const AiPanel = ({ answer }: any) => {
  return (
    <div className='flex justify-center'>
      <div className='max-w-2xl rounded-lg bg-gradient-to-r from-blue-500 via-[#0DBFDF] via-indigo-500 to-purple-500 px-8 py-4 shadow-md'>
        <div className='mt-2'>
          <p className='mt-2 text-white'>{answer ? answer?.replace(/\*/g, '').slice(0,300) + "..." : 'wait..'}</p>
        </div>
        {answer && (
          <div className='mt-4 flex items-center justify-between'>
            <div className='text-white hover:underline'>Ai Powered</div>
            <div
              onClick={() => Swal.fire({ icon: 'info', text: answer?.replace(/\*/g, '') })}
              className='cursor-pointer text-white hover:underline'
            >
              Read more
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AiPanel;

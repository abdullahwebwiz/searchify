'use client';

import { ChevronDown, Moon, ShoppingCart, Sun } from 'lucide-react';
import Link from 'next/link';
import { signOut, signIn, useSession } from 'next-auth/react';


import useLayoutService from '@/lib/hooks/useLayout';

import { SearchBox } from './SearchBox';
import { useEffect } from 'react';

const Menu = () => {
  const { data: session } = useSession();
  const { theme, toggleTheme } = useLayoutService();

  const signOutHandler = () => {
    signOut({ callbackUrl: '/signin' });
  };

  const handleClick = () => {
    (document.activeElement as HTMLElement).blur();
  };

  return (
    <>
      <ul className='flex gap-2'>
        <li className='flex items-center gap-2 md:gap-4'>
          <label className='swap swap-rotate'>
            {/* this hidden checkbox controls the state */}
            <input
              type='checkbox'
              checked={theme === 'light'}
              onChange={toggleTheme}
            />
            <Sun className='swap-on' />
            <Moon className='swap-off' />
          </label>
          
        </li>
        {session && session.user ? (
          <li>
            <div className='dropdown dropdown-end dropdown-bottom'>
              <label tabIndex={0} className='btn btn-ghost rounded-btn'>
                {session.user.name}
                <ChevronDown />
              </label>
              <ul
                tabIndex={0}
                className='menu dropdown-content z-[1] w-52 rounded-box bg-base-300 p-2 shadow '
              >
                <li onClick={handleClick}>
                  <Link href='/history'>History</Link>
                </li>
                <li onClick={handleClick}>
                  <button type='button' onClick={signOutHandler}>
                    Sign out
                  </button>
                </li>
              </ul>
            </div>
          </li>
        ) : (
          <li>
            <button
              className='btn btn-ghost rounded-btn'
              type='button'
              onClick={() => signIn()}
            >
              Sign in
            </button>
          </li>
        )}
      </ul>
    </>
  );
};

export default Menu;

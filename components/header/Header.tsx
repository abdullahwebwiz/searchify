import Link from 'next/link';
import Menu from './Menu';
import Image from 'next/image';

const Header = () => {
  return (
    <header>
      <nav>
        <div className='navbar justify-between bg-base-300'>
          <div>
            
            <Link
              href='/'
              className='ml-2 text-base font-semibold sm:ml-4 sm:text-lg'
            >
              <Image
                src={'/logo.png'}
                width={60*3}
                height={60}
                alt={'logo'}
                priority
              />
            </Link>
          </div>
          <Menu />
        </div>

      </nav>
    </header>
  );
};

export default Header;

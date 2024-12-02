import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className='bg-white dark:bg-gray-900'>
      <div className='container mx-auto flex flex-col items-center justify-between space-y-4 p-6 sm:flex-row sm:space-y-0'>
        <a href='#'>
        <Image
          src='/logo.png'
          width={250}
          height={106}
          alt='logo'
        />
        </a>

        <p className='text-sm text-gray-600 dark:text-gray-300'>
          © Copyright 2021. All Rights Reserved. Made with ❤️ in Pakistan.
        </p>

        <div className='-mx-2 flex'>
          <a
            href='https://www.instagram.com/adullahwebwiz/'
            className='mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400'
            aria-label='Facebook'
          >
            <Image
              src={'/instagram.svg'}
              width={30}
              height={30}
              alt='instagram profile icon'
            />
          </a>

          <a
            href='https://github.com/abdullahwebwiz'
            className='mx-2 text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400'
            aria-label='Github'
          >
            <Image
              src={'/github.svg'}
              width={30}
              height={30}
              alt='github profile icon'
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

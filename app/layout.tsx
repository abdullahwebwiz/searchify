import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Providers from '@/components/Providers';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME,
  description: process.env.NEXT_PUBLIC_APP_DESC,
};              


const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <Header/>
          <div className='flex min-h-screen flex-col'>{children}</div>
          <Footer/>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;

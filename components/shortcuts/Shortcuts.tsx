import Image from 'next/image';
import Link from 'next/link';
const data = [
  { link: 'https://instagram.com', image: 'instagram' },
  { link: 'https://amazon.com', image: 'amazon' },
  { link: 'https://facebook.com', image: 'facebook' },
  { link: 'https://youtube.com', image: 'youtube2' },
  { link: 'https://chatgpt.com', image: 'chatgpt' },
];
const ImageBox = ({ d }: any) => (
  <Link
    href={d.link}
    target='_blank'
    className='h-[100px] w-[100px] cursor-pointer overflow-hidden rounded-md'
  >
    <div className='relative h-full w-full'>
      <Image
        src={'/' + d.image + '.png'}
        width={100}
        height={100}
        alt='icon'
        className='transform transition-transform hover:scale-110'
      />
    </div>
  </Link>
);

const ImageGallery: any = () => (
  <div className='flex items-center justify-center space-x-4'>
    {data.map((d: any, index: any) => (
      <ImageBox key={index} d={d} />
    ))}
  </div>
);

export default ImageGallery;

import dynamic from 'next/dynamic';

const SearchBox = dynamic(() => import('@/components/searchBox/searchBox'));
const ShortCuts = dynamic(() => import('@/components/shortcuts/Shortcuts'));

const HomePage = () => {
  return (
    <>
      <SearchBox />
      <ShortCuts />
    </>
  );
};

export default HomePage;

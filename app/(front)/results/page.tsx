'use client';
import AiPanel from '@/components/aiPanel/AiPanel';
import Header from '@/components/header/Header';
import KeywordChips from '@/components/keywordchips/KeyWordChips';
import ResultCards from '@/components/resultcards/ResultCards';
import SearchBox2 from '@/components/searchbox2/SearhBox2';
import axios from 'axios';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

const ResultPage = () => {
  const searchParams = useSearchParams();
  const query: any = searchParams.get('query');
  const [answer, setAnswer] = useState('');
  const [suggestion, setSuggestion] = useState('none');
  const [keywords, setKeywords]: any = useState(null);
  const [results, setResults] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/ai-result', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ body: query }),
        });

        // Waits for the response to be converted to JSON format and stores it in the data variable
        const data = await response.json();
        setAnswer(data.output);
      } catch (error) {
        console.error('Error fetching data:', error);
        setAnswer('Something went wrong');
      }
    };

    fetchData();
  }, [query]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: 'GET',
          url: 'https://google-web-search1.p.rapidapi.com/',
          params: {
            query: query,
            limit: '10',
            related_keywords: 'true',
          },
          headers: {
            'x-rapidapi-key':
              '49e5deb775msh9d6dff18330e707p1924e0jsnacf093a432ed',
            'x-rapidapi-host': 'google-web-search1.p.rapidapi.com',
          },
        };

        const response = await axios.request(options);

        let x: any = response?.data;
        console.log(x?.related_keywords?.spelling_suggestion);
        setSuggestion(
          x?.related_keywords?.spelling_suggestion
            ? x?.related_keywords?.spelling_suggestion
            : 'none',
        );
        setKeywords(x?.related_keywords?.keywords);
        setResults(x?.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [query]);

  return (
    <>
      <Header />
      <SearchBox2 query={query} suggestion={suggestion} />
      <AiPanel answer={answer} />
      {/* @ts-ignore */}
      <KeywordChips keywords={keywords} />
      <ResultCards results={results} />
    </>
  );
};
export default ResultPage;

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
    console.log(process.env.NEXT_PUBLIC_GOOGLE_WEB_SEARCH_URL);
    console.log(process.env.NEXT_PUBLIC_GOOGLE_WEB_SEARCH_KEY);
    console.log(process.env.NEXT_PUBLIC_GOOGLE_WEB_SEARCH_HOST);

    const fetchData = async () => {
      try {
        const options = {
          method: 'GET',
          url: process.env.NEXT_PUBLIC_GOOGLE_WEB_SEARCH_URL,
          params: {
            query: query,
            limit: '20',
            related_keywords: 'true',
          },
          headers: {
            'x-rapidapi-key':
            process.env.NEXT_PUBLIC_GOOGLE_WEB_SEARCH_KEY,
            'x-rapidapi-host': process.env.NEXT_PUBLIC_GOOGLE_WEB_SEARCH_HOST,
          },
        };

        const response = await axios.request(options);

        let x: any = response?.data;
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
      <SearchBox2 query={query} suggestion={suggestion} />
      <AiPanel answer={answer} />
      {/* @ts-ignore */}
      <KeywordChips keywords={keywords} />
      <ResultCards results={results} />
    </>
  );
};
export default ResultPage;

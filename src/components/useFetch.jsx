import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(async() => {
        try{
        const response = await fetch(url, { signal: abortCont.signal });
        if (!response.ok) { 
          throw Error('could not fetch the data for that resource');
        } 
        const data= await response.json();
        setIsLoading(false);
        setData(data);
        setError(null);
      }
    
      catch(err){
        if (err.name === 'AbortError') {
          console.log('fetch aborted')
        } else {
          setIsLoading(false);
          setError(err.message);
        }
      }
    }, 500);

    return () => abortCont.abort();
  }, [url])

  return { data, isLoading, error };
}
 
export default useFetch;
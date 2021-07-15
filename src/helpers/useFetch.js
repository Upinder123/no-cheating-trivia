import axios from 'axios'
import { useEffect, useState } from 'react'

export default function useFetch(URL) {
  const [result, setResult] = useState({data: null, loading: true, error: false});

  useEffect(() => {
    setResult({data: null, loading: true, error: false})
    axios.get(URL)
      .then(data => {
        setResult({data: data.data, loading: false, error: false})
      })
      .catch(err => {
        console.log(err);
        setResult({data: null, loading: false, error: true})
      });
  }, [URL]);

  return result;
}

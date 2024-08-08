import { useEffect, useState } from 'react';

const Character = ({ id }) => {
  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const abortController = new AbortController();
    setLoading(true);
    async function getData() {
      try {
        const response = await fetch(`https://swapi.dev/api/peopl/${id}`, {
          signal: abortController.signal,
        });
        const data = await response.json();
        setCharacter(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getData();

    // useEffect cleanup function
    return () => abortController.abort();
  }, [id]);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return <h2>Hello there, I am {character.name}</h2>;
};

export default Character;

import { useState } from 'react';
import './App.css';
import Character from './Character';

function App() {
  const [id, setId] = useState(1);
  const loadRandomSWCharacter = () => {
    const random = Math.floor(Math.random() * 10) + 1;
    setId(random);
  };
  return (
    <section>
      <h1>Star Wars Characters</h1>
      <button onClick={loadRandomSWCharacter}>Load Character</button>
      <Character id={id} />
    </section>
  );
}

export default App;

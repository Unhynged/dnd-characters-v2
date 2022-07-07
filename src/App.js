import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const [character, setCharacter] = useState(data)
  return (
    <main>
      <section className='container'>
        <h3>{character.length} of Today's Heroes!</h3>
        <List character={character} />
        <button onClick={() => setCharacter([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;
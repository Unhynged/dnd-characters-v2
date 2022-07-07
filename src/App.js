import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {
  const [character, setCharacter] = useState(data)
  return (
    <main>
      <section className='container'>
        <h2 className='heading'>{character.length} of Today's Heroes!</h2>
        <List character={character} />
        <button className='clear' onClick={() => setCharacter([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;
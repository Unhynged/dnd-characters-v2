import React from 'react';

function sayHello() {
  console.log('clicked')
}

const List = ({character}) => {
  return (
    <>
      {character.map((toon) => { 
        const {id, name, race, image, classGroup, description, specialist} = toon; 
        return (
          <article key={id} className='toon'>
            <img src={image} alt={name} /> 
            <div>
              <h4>{name}</h4>
              <p><b>Race</b> {race} </p>
              <p><b>Class</b> {classGroup} </p>
              <p>{description}</p>
              <p><b>Specialisation:</b> {specialist}</p>
              <button className='about' onClick={sayHello}>About</button>
            </div>
          </article>
        )
      })}
    </>
  );
};

export default List;
import React from 'react';

const List = ({character}) => {
  return (
    <>
      {character.map((toon) => { 
        const {id, name, race, image, description, classGroup, specialist} = toon; 
        return (
          <article key={id} className='toon'>
            <img src={image} alt={name} /> 
            <div>
              <h4>{name}</h4>
              <p><b>Race</b> {race} </p>
              <p><b>Class</b> {classGroup} </p>
              <p><b>Description:</b> {description}</p>
              <p><b>Specialisation:</b> {specialist}</p>
              <button>About</button>
            </div>
          </article>
        )
      })}
    </>
  );
};

export default List;
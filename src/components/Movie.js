import React from 'react';

const Movie = () => {
  return(
    <li>
      {title}
      <button type="button" onClick={props.handleButtonClick}>Delete</button>
    </li>
  )
}

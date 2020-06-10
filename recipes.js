import React from 'react';

const singleRecipe = (props) => {
  return(
    <div className='singleRecipe'>
      <h3>{props.name}</h3>
      <ul>
      <li>{props.ingredients}</li>
      <li>{props.describtion}</li>
      </ul>
      <img src='${props.picture}'></img>
    </div>
  )
}
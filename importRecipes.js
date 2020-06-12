import React from 'react'
import Data from './json/recipes_2.json'

console.log(Data)

const ImportRecipe = (props) => {
  return (
    <div className='Rezept'>
      {Data.map(Data => (
        <h3 key={Data}>{props.name}</h3>
      )}

    </div>
  )
}

export default ImportRecipe



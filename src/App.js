import React, {useState} from 'react';
import Modal from "./Modal";
import useModal from './useModal';
import './App.css';
import Data from './json/recipes_2.json'

//const Recipes = Data

//console.log(Data[0])

const App = props => {
  const {isShowing, toggle} = useShowEdit();        //Setup for creating the ShowEdit Div
  const [dataState, setdataState] = useState({  //Setup for creating the Recipe Divs
    Data
  });


  // ++++++ Create the Show/Edit Div when clicking on recipe
  const useShowEdit = () => {
    const [isShowing, setIsShowing] = useState(false); 
    function toggle() {
      setIsShowing(!isShowing);
    } 
    return {
      isShowing,
      toggle,
    }
  };

  const ShowEdit = ({ isShowing, hide, value }) => {
    return React.createElement(
      'div',
      {id: `${value}`, className: 'ShowEditDiv'}
    )
  }




  // +++++ Work in Progress starts here: setdataState not working with filtered list.... ++++++ 

  const filterNameHandler = value => () => {
    if (value == 'TippDesTages') {
      const hauptRecipes = Data.filter(dish => dish.type === 'haupt')
      const firstRecipes = Data.filter(dish => dish.type === 'first')
      const dessertRecipes = Data.filter(dish => dish.type === 'dessert')
      const drinkRecipes = Data.filter(dish => dish.type === 'drink') 
      
      //console.log(hauptRecipes.length)
      //console.log(Math.floor(Math.random() * (hauptRecipes.length+1)))
      //console.log(hauptRecipes[Math.floor(Math.random() * (hauptRecipes.length))])

      const TippDesTages = [];
      TippDesTages.push(hauptRecipes[Math.floor(Math.random() * (hauptRecipes.length))])
      TippDesTages.push(firstRecipes[Math.floor(Math.random() * (firstRecipes.length))])
      TippDesTages.push(dessertRecipes[Math.floor(Math.random() * (dessertRecipes.length))])
      TippDesTages.push(drinkRecipes[Math.floor(Math.random() * (drinkRecipes.length))])

      console.log(TippDesTages)

      // HOW TO UPDATE STATE ???? 
      //Data = TippDesTages
      setdataState({
        Data
      })
    }

    else {
    // console log shows right array
      console.log(Data.filter(dish => dish.type === value));
      const filteredRecipes = Data.filter(dish => dish.type === value)  
      // HOW TO UPDATE STATE ???? 
    setdataState({
      Data
    });

   }
  }



  return (
     <div className="App">
       <header className="App-header">
         <h1>Food4Life2</h1>
       </header>

        <nav>
         <button onClick={filterNameHandler('TippDesTages')}>Gericht des tages</button>
         <button onClick={filterNameHandler('haupt')}>Hauptspeisen</button>
         <button onClick={filterNameHandler('first')}>Vorspeisen</button>
         <button onClick={filterNameHandler('dessert')}>Dessert</button>
         <button onClick={filterNameHandler('drink')}>Drink</button>
       </nav>

        <div className="MainBody">




          {/* ++++ ADD FILTER FUNCTION TO MAP FROM BUTTONS: {this.state.Data.filter().map(Data  => (...   */}
          {dataState.Data.map((Data, index)  => (
            // ++++ Only creates the ShowEdit Div when clicked 
           
            <ShowEdit
            isShowing={isShowing}
            hide={toggle}
            value={index}
            /> 
           
           /* +++++ <a href={}> a href Element to open the recipe page/window */
           <a onClick={toggle}>
              <div className='Rezept' style={{backgroundImage: `url(${Data.picture})`, 
                                              backgroundSize: 'cover', 
                                              backgroundPosition: 'center',
                                              width: '20%',
                                              height: '15%',
                                              margin: '30px',
                                              padding: '50px',
                                              display: 'flex',
                                              }}>
                <h3 style={{color: 'white', backgroundColor: 'black', padding: '10px'}}>{Data.name} </h3>
                <Modal
                isShowing={isShowing}
                hide={toggle}
                value={index}
                />              
                
                
              </div>
            </a>                          
         ))}
       </div>     
     </div>
  );
 }


export default App;

import React, {useState} from 'react';
import './App.css';
import Data from './json/recipes_2.json'

const App = props => {
  const [dataState, setdataState] = useState({
    Data
  });

  // +++++ Work in Progress starts here: setdataState not working with filtered list.... ++++++ 

  const filterNameHandler = value => () => 
  
    console.log(Data.filter(dish => dish.type === value))
    
    setdataState({
      filteredData = Data.filter(dish => dish.type === value)
    });



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
         <button onClick={filterNameHandler('haupt')}>Drink</button>
       </nav>
        <div className="MainBody">
          {/* ADD FILTER FUNCTION TO MAP FROM BUTTONS: {this.state.Data.filter().map(Data  => (...   */}
          {dataState.Data.map(Data  => (
           <div className='Rezept' style={{backgroundImage: `url(${Data.picture})`, 
                                           backgroundSize: 'cover', 
                                           backgroundPosition: 'center',
                                           width: '20%',
                                           height: '15%',
                                           margin: '30px',
                                           padding: '50px',
                                           display: 'flex'}}>
             <h3 style={{color: 'white', backgroundColor: 'black', padding: '10px'}}>{Data.name} </h3>
           </div>
         ))}
       </div>     
     </div>
  );
 }


export default App;

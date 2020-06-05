import React, {Component} from 'react';
import './App.css';
//import ImportRecipe from './importRecipes'
import Data from './json/recipes_2.json'

console.log(Data)

class App extends Component {
  state = {
    Data
  }


  filterNameHandler = () => {
    console.log('clicked')
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Food4Life2</h1>
        </header>

        <nav>
          <button onClick={this.filterNameHandler}>Gericht des tages</button>
          <button onClick={this.filterNameHandler}>Hauptspeisen</button>
          <button onClick={this.filterNameHandler}>Vorspeisen</button>
          <button onClick={this.filterNameHandler}>Dessert</button>
          <button onClick={this.filterNameHandler}>Drink</button>
        </nav>

        <div className="MainBody">
          {this.state.Data.map(Data => (
            <div className='Rezept' style={{backgroundImage: `url(${Data.picture})`, 
                                            backgroundSize: 'cover', 
                                            width: '20%',
                                            height: '15%',
                                            margin: '50px',
                                            padding: '50px',
                                            display: 'flex'}}>
              <h3>{Data.name}</h3>
            </div>
          ))}
        </div>     
      </div>
    );
  }
}

export default App;

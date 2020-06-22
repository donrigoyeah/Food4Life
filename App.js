import React, { useState } from "react";

import { Route, Link } from "react-router-dom";

import "./App.css";
import recipeData from "./json/recipes_2.json";

import Modal from "./Modal";
import useModal from "./useModal";

const recipes = localStorage.getItem("recipes");

console.log(recipeData);

const App = (props) => {
  const [recipes, setRecipes] = useState(recipeData);
  const { isShowing, toggle } = useModal();

  // ++++++
  // Filter Function for Nav Bar
  // ++++++
  const filterNameHandler = (value) => () => {
    if (value == "TippDesTages") {
      const hauptRecipes = recipeData.filter((dish) => dish.type === "haupt");
      const firstRecipes = recipeData.filter((dish) => dish.type === "first");
      const dessertRecipes = recipeData.filter(
        (dish) => dish.type === "dessert"
      );
      const drinkRecipes = recipeData.filter((dish) => dish.type === "drink");

      const TippDesTages = [];
      TippDesTages.push(
        hauptRecipes[Math.floor(Math.random() * hauptRecipes.length)]
      );
      TippDesTages.push(
        firstRecipes[Math.floor(Math.random() * firstRecipes.length)]
      );
      TippDesTages.push(
        dessertRecipes[Math.floor(Math.random() * dessertRecipes.length)]
      );
      TippDesTages.push(
        drinkRecipes[Math.floor(Math.random() * drinkRecipes.length)]
      );
      setRecipes(TippDesTages);
    } else if (Number.isInteger(value)) {
      const filteredRecipes = recipeData.filter(
        (recipe) => recipe.id === value
      );
      setRecipes(filteredRecipes);
    } else if (value === "alle") {
      const filteredRecipes = recipeData;
      setRecipes(filteredRecipes);
    } else {
      const filteredRecipes = recipeData.filter(
        (recipe) => recipe.type === value
      );
      setRecipes(filteredRecipes);
    }
  };
  //console.log("currentRecipes", recipes);

  // ++++++
  // Form Function for Edit Recipe Page
  // ++++++
  const formHandler = (event) => {
    this.setState({ username: event.target.value });
  };

  // +++++
  // +++++     Single Page Recipe Display
  // +++++

  //const zubereitung_array = recipe.description.split(",");

  if (recipes.length === 1) {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Food4Life2</h1>
        </header>
        <nav>
          <button onClick={filterNameHandler("TippDesTages")}>
            Gericht des tages
          </button>
          <button onClick={filterNameHandler("haupt")}>Hauptspeisen</button>
          <button onClick={filterNameHandler("first")}>Vorspeisen</button>
          <button onClick={filterNameHandler("dessert")}>Dessert</button>
          <button onClick={filterNameHandler("drink")}>Drink</button>
          <button onClick={filterNameHandler("alle")}>Alle Rezepte</button>
        </nav>
        <div className="MainBody" style={{ justifyContent: "center" }}>
          {recipes.map((recipe, index) => (
            <div className="SingleRezept">
              <h3
                style={{
                  color: "white",
                  backgroundColor: "black",
                  padding: "10px",
                }}
              >
                {recipe.name}{" "}
              </h3>
              <div className="SingleRezeptItem">
                <h4>Zutaten:</h4>
                {recipe.ingredients.map((ingredients) => (
                  <p>{ingredients}</p>
                ))}
              </div>
              <div className="SingleRezeptItem">
                <h4>Zubereitung:</h4>
                {recipe.description.map((describtion) => (
                  <p>{describtion}</p>
                ))}
              </div>
              <div className="SingleRezeptItem">
                <h4>Bewertung:</h4>
                <p>{recipe.rating}/5</p>
              </div>
              <div className="SingleRezeptItem">
                <h4>Severity:</h4>
                <p>{recipe.severity}/5</p>
              </div>
              <div className="SingleRezeptItem">
                <h4>Zeit:</h4>
                <p>{recipe.time} Minuten</p>
              </div>
              <button
                className="button-default"
                onClick={toggle}
                style={{ margin: "50px" }}
              >
                Rezept Bearbeiten
              </button>
              <Modal isShowing={isShowing} hide={toggle} recipe={recipe} />
              <div className="SingleRecipeImage">
                <img src={recipe.picture}></img>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    // +++++
    // +++++     Overview of Recipes
    // +++++
    return (
      <div className="App">
        <header className="App-header">
          <h1>Food4Life2</h1>
        </header>

        <nav>
          <button onClick={filterNameHandler("TippDesTages")}>
            Gericht des tages
          </button>
          <button onClick={filterNameHandler("haupt")}>Hauptspeisen</button>
          <button onClick={filterNameHandler("first")}>Vorspeisen</button>
          <button onClick={filterNameHandler("dessert")}>Dessert</button>
          <button onClick={filterNameHandler("drink")}>Drink</button>
          <button onClick={filterNameHandler("alle")}>Alle Rezepte</button>
        </nav>

        <div className="MainBody" style={{ justifyContent: "center" }}>
          {recipes.map((recipe, index) => (
            //   ++++  Eric added this "link to" element which is supposed to work as a rout to recipe
            //         <Link to={`/recipes/${recipe.id}`}>
            <div
              className="Rezept"
              onClick={filterNameHandler(recipe.id)}
              style={{
                backgroundImage: `url(${recipe.picture})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "20%",
                height: "15%",
                margin: "30px",
                padding: "50px",
                display: "flex",
              }}
            >
              <h3
                style={{
                  color: "white",
                  backgroundColor: "black",
                  padding: "10px",
                }}
              >
                {recipe.name}{" "}
              </h3>
            </div>
            //</Link>
          ))}
        </div>

        <div className="Loader">
          <button
            onClick={localStorage.setItem(
              "recipes",
              JSON.stringify(recipeData)
            )}
          >
            Load JSON to local Storage
          </button>
        </div>
      </div>
    );
  }
}; // closes <div> App

export default App;

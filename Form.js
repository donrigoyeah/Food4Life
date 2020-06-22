import React from "react";

const FormRecipe = ({ recipe }) => {
  const [RecipeItem, setRecipeItem] = React.useState(
    localStorage.getItem(`${recipe}`) || ""
  );

  React.useEffect(() => {
    localStorage.setItem(`${recipe}`, RecipeItem);
  }, [RecipeItem]);

  const onChange = (event) => setRecipeItem(event.target.value);

  return (
    <div>
      {console.log(recipe)}
      <h3>Test Area of Form.js</h3>

      <input
        value={RecipeItem}
        placeholder={recipe.name}
        type="text"
        onChange={onChange}
      />

      <p>{RecipeItem}</p>
    </div>
  );
};

export default FormRecipe;

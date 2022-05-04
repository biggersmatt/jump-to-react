// CSS
require('./myRecipes.css');

export default function MyRecipes() {
  return (
    <div className='my-recipes-wrapper'>
      <div className='my-recipes-header'>
        <p className='my-recipes-new'>+ New Recipe</p>
        <h2>My Recipes</h2>
        <p className='my-recipes-description'>A collection of recipes you've created.</p>
        <label htmlFor="cuisine" className='my-recipes-label'>Cuisine</label>
        <select name="cuisine" id="cuisine">
          <option value="vegan">Vegan</option>
          <option value="italian">Italian</option>
          <option value="asian">Asian</option>
        </select>
      </div>
      <div className='my-recipes-content'>
        <ul>
          <li>Tofu Scramble</li>
          <li>Peanut Sauce Tofu</li>
          <li>Lemon Broccolini</li>
          <li>Cardamon Star Anise Steamed White Rice</li>
          <li>Spicy Garlic Green Beans</li>
          <li>Baked Breakfast Beans</li>
          <li>Oatmeal</li>
          <li>Vegan Street Tacos</li>
          <li>The Stew</li>
          <li>Chipotle Cripsy Tater Tots</li>
        </ul>
      </div>
    </div>
    )
}
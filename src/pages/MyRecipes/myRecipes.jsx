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
        <ul className='my-recipes-list'>
          <li className='my-recipes-list-item'>Tofu Scramble</li>
          <li className='my-recipes-list-item'>Peanut Sauce Tofu</li>
          <li className='my-recipes-list-item'>Lemon Broccolini</li>
          <li className='my-recipes-list-item'>Cardamon Star Anise Steamed White Rice</li>
          <li className='my-recipes-list-item'>Spicy Garlic Green Beans</li>
          <li className='my-recipes-list-item'>Baked Breakfast Beans</li>
          <li className='my-recipes-list-item'>Oatmeal</li>
          <li className='my-recipes-list-item'>Vegan Street Tacos</li>
          <li className='my-recipes-list-item'>The Stew</li>
          <li className='my-recipes-list-item'>Chipotle Cripsy Tater Tots</li>
        </ul>
      </div>
    </div>
    )
}
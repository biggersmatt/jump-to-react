// React
import { Link } from 'react-router-dom';

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
          <li className='my-recipes-list-item'>
            <Link to='/:userId/:recipeId' className='no-link-styles'>Tofu Scramble</Link>
          </li>
          <li className='my-recipes-list-item'>
            <Link to='/:userId/:recipeId' className='no-link-styles'>Peanut Sauce Tofu</Link>
          </li>
          <li className='my-recipes-list-item'>
            <Link to='/:userId/:recipeId' className='no-link-styles'>Lemon Broccolini</Link>
          </li>
          <li className='my-recipes-list-item'>
            <Link to='/:userId/:recipeId' className='no-link-styles'>Cardamon Star Anise Steamed White Rice</Link>
          </li>
          <li className='my-recipes-list-item'>
            <Link to='/:userId/:recipeId' className='no-link-styles'>Spicy Garlic Green Beans</Link>
          </li>
          <li className='my-recipes-list-item'>
            <Link to='/:userId/:recipeId' className='no-link-styles'>Baked Breakfast Beans</Link>
          </li>
          <li className='my-recipes-list-item'>
            <Link to='/:userId/:recipeId' className='no-link-styles'>Oatmeal</Link>
          </li>
          <li className='my-recipes-list-item'>
            <Link to='/:userId/:recipeId' className='no-link-styles'>Vegan Street Tacos</Link>
          </li>
          <li className='my-recipes-list-item'>
            <Link to='/:userId/:recipeId' className='no-link-styles'>The Stew</Link>
          </li>
          <li className='my-recipes-list-item'>
            <Link to='/:userId/:recipeId' className='no-link-styles'>Chipotle Cripsy Tater Tots</Link>
          </li>
        </ul>
      </div>
    </div>
    )
}
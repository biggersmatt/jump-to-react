// React
import { Link } from 'react-router-dom';

// CSS
require('./home.css');

export default function Homepage() {
  return (
    <div className="dashboard-wrapper">
    <div className='dashboard-header'>
      <h1>Jump to Recipe</h1>
      <p>Recipes without ads or stories.</p>
    </div>
    <div className="dashboard-cards">
      <Link to='/myrecipes' className='dashboard-link'>My Recipes</Link>
      <Link to='/newrecipe' className='dashboard-link'>New Recipe</Link>
      <Link to='/favorites' className='dashboard-link'>Favorite Recipes</Link>
      <Link to='/recipesbyothers' className='dashboard-link'>Recipes by Others</Link>
      <Link to='/everyonesrecipes' className='dashboard-link'>Everyones Recipes</Link>
    </div>
  </div>
  )
}
// React
import { Link } from 'react-router-dom';

// CSS
require('./dashboard.css');

export default function Dashboard() {
  return (
    <div className="dashboard-wrapper">
      <div className='dashboard-header'>
        <h1>Welcome User!</h1>
        <p>Jump straight to a recipe.</p>
      </div>
      <div className="dashboard-cards">
        <Link to='/myrecipes' className='dashboard-link'>My Recipes</Link>
        <Link to='/newrecipe' className='dashboard-link'>New Recipe</Link>
        <Link to='/favorites' className='dashboard-link'>Favorite Recipe</Link>
        <Link to='/recipesbyothers' className='dashboard-link'>Recipes by Others</Link>
        <Link to='/everyonesrecipes' className='dashboard-link'>Everyones' Recipes</Link>
      </div>
    </div>
  )
}
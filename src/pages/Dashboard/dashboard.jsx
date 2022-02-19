// React
import { Link } from 'react-router-dom';

// CSS
require('./dashboard.css');

export default function Dashboard() {
  return (
    <div className="dashboard-wrapper">
      <div>
        <h1>Welcome User!</h1>
        <p>Jump straight to a recipe.</p>
      </div>
      <div className="dashboard-cards">
        <Link to='/myrecipes'>
          <button>My Recipes</button>
        </Link>
        <Link to='/newrecipes'>
          <button>Create New Recipe</button>
        </Link>
        <Link to='/favorites'>
          <button>Favorite Recipes</button>
        </Link>
        <Link to='/recipesbyothers'>
          <button>Recipes by Others</button>
        </Link>
        <Link to='/everyonesrecipes'>
          <button>Everyones' Recipes</button>
        </Link>
      </div>
    </div>
  )
}
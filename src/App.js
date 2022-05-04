// React
import { Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home/home';
import Signup from './pages/Signup/signup';
import Login from './pages/Login/login';
import MyRecipes from './pages/MyRecipes/myRecipes';
import NewRecipe from './pages/NewRecipe/newRecipe';
import FavoriteRecipes from './pages/FavoriteRecipes/favoriteRecipes';

// Components
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';

// CSS
require('./App.css');

export default function App() {
  return (
    <div className='app-wrapper'>
      <Navbar/>
      <div className='app-content'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/myrecipes' element={<MyRecipes/>}/>
          <Route path='/newrecipe' element={<NewRecipe/>}/>
          <Route path='/favorites' element={<FavoriteRecipes/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}
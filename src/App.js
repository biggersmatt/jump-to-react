// React
import { Routes, Route } from 'react-router-dom';

// Material UI

// Pages
import Home from './pages/Home/home';
import Signup from './pages/Signup/signup';
import Login from './pages/Login/login';

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
          <Route path='/signup' element={<Signup/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}
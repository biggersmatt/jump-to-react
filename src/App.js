// React
import { Routes, Route } from 'react-router-dom';

// Material UI

// Pages
import Homepage from './pages/Homepage/homepage';
import Signup from './pages/Signup/signup';

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
          <Route path='/' element={<Homepage/>} />
          <Route path='/signup' element={<Signup/>} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}
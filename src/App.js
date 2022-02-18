//Material UI

// Pages
import Homepage from './pages/Homepage/homepage';

// Components
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';

require('./App.css');

export default function App() {
  return (
    <div className='app-wrapper'>
      <Navbar/>
      <div className='app-content'>
        <Homepage/>
      </div>
      <Footer/>
    </div>
  );
}
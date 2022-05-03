// React
import { Link } from 'react-router-dom';

// Images and CSS
import Chef from '../../images/chef.jpeg';
require('./navbar.css');

export default function Navbar() {
  return (
    <div className='navbar-wrapper shadow'>
      <div className="logo-wrapper">
        <img src={Chef} alt="chef" className='chef-image' />
      </div>
      <div className="buttons">
          <Link 
            to='/'
            className='nav-links'
            onClick={() => {
              console.log("Home Pressed");
            }}
          >Home
          </Link>
          <Link 
            to='/login'
            className='nav-links'
            onClick={() => {
              console.log("Login Pressed");
            }}
          >Login
          </Link>
          <Link 
            to='/signup'
            className='nav-links'
            onClick={() => {
              console.log('Signup Pressed');
            }}
          >Signup
          </Link>
      </div>
    </div>
  )
}
import Button from '@mui/material/Button';
import Chef from '../../images/chef.jpeg';
require('./navbar.css');

export default function Navbar() {
  return (
    <div className='navbar-wrapper shadow'>
      <img src={Chef} alt="chef" className='chef-image' />
      <div className="buttons">
        <Button>Login</Button>
        <Button>Signup</Button>
      </div>
    </div>
  )
}
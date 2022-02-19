// React
import { Link } from 'react-router-dom';

// Material UI
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

// Images and CSS
import Chef from '../../images/chef.jpeg';
require('./navbar.css');

export default function Navbar() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#d7cec7',
      }
    }
  });

  return (
    <div className='navbar-wrapper shadow'>
      <div className="logo-wrapper">
        <img src={Chef} alt="chef" className='chef-image' />
      </div>
      <div className="buttons">
        <ThemeProvider theme={theme}>
          <Link to='/'>
            <Button 
              variant='contained' 
              size='small' 
              onClick={() => {
                console.log("Home Pressed");
              }}
            >
              Home
            </Button>
          </Link>
          <Link to='/login'>
            <Button 
              variant='contained' 
              size='small' 
              onClick={() => {
                console.log("Login Pressed");
              }}
            >
              Login
            </Button>
          </Link>
          <Link to='/signup'>
            <Button
              variant='contained'
              size='small'
              onClick={() => {
                console.log('Signup Pressed');
              }}
            >
              Signup
            </Button>
          </Link>
        </ThemeProvider>
      </div>
    </div>
  )
}
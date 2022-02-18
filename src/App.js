

import Button from '@mui/material/Button';

import Homepage from './Homepage/homepage';

require ('./App.css');

export default function App() {
  return (
    <div className='app-wrapper'>
      <Button variant='contained'>Hello World</Button>
      {/* <Homepage></Homepage> */}
    </div>
  );
}
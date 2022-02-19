// Material UI

// CSS
require('./signup.css');

export default function Signup() {
  return (
    <div className='signup-wrapper'>
      <div className="signup-container">
        <h1>Create an Account</h1>
        <p>With an account, you'll be able to:</p>
        <ol>
          <li>Create Recipes</li>
          <li>Store Recipes on your Account</li>
          <li>Take Notes on Recipes</li>
          <li>Comment on others' Recipes</li>
        </ol>
        <div className='signup-input'>
          <h5>Name</h5>
          <input type="text" />
        </div>
        <div className='signup-input'>
          <h5>Password</h5>
          <input type="text" />
        </div>
        <button>Create</button>
      </div>
    </div>
  )
}
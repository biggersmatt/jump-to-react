// CSS
require('./login.css');

export default function Login() {
  return(
    <div className='login-wrapper'>
      <div className="login-container">
        <h1>Login</h1>
        <p>With an account, you'll be able to:</p>
        <ol>
          <li>Create Recipes</li>
          <li>Store Recipes on your Account</li>
          <li>Take Notes on Recipes</li>
          <li>Comment on others' Recipes</li>
        </ol>
        <div className='login-input'>
          <h5>Name</h5>
          <input type="text" />
        </div>
        <div className='login-input'>
          <h5>Password</h5>
          <input type="text" />
        </div>
        <button>Create</button>
      </div>
    </div>
  )
}
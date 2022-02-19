// CSS
require('./login.css');

export default function Login() {
  return(
    <div className='login-wrapper'>
      <div className="login-container">
        <h1>Jump to Recipe</h1>
        <p>Review notes from last time.</p>
        <p>Take notes this time.</p>
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
import "./login.scss";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='login'>
      <div className="card">
        <div className="left">
            <h1>TEK-UPERS.</h1>
            <p>A deeper understanding of the engineering role will be developed allowing our students to identify the needs of today's world and design the best technological solutions.</p>
            <span>Don't you have an account?</span>
            <Link to="/register">
            <button>Register</button>
            </Link>
            
        </div>
        <div className="right">
            <h1>Login</h1>
            <form>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button>Login</button>
            </form>
        </div>
        
      </div>
    </div>
  )
}

export default Login

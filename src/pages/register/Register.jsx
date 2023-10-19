import "./register.scss";
import { Link } from 'react-router-dom';


const Register = () => {
  return (
    <div className='register'>
      <div className="card">
        <div className="left">
            <h1>TEK-UPERS.</h1>
            <p>A deeper understanding of the engineering role will be developed allowing our students to identify the needs of today's world and design the best technological solutions.</p>
            <span>Do you have an account?</span>
            <Link to="/login">
            <button>Login</button>
            </Link>
        </div>
        <div className="right">
            <h1>Register</h1>
            <form>
                <input type="text" placeholder="Username" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="text" placeholder="Phone number" />
                <button>Register</button>
            </form>
        </div>
        
      </div>
    </div>
  )
}

export default Register;

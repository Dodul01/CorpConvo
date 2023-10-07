import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { AppContext } from '../../AppContext/AppProvider';

const Login = () => {
  const {logIn} = useContext(AppContext);

  const handleLogin = (e) =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    logIn(email, password);
  }

  return (
    <div className="hero min-w-screen">
      <div className="card lg:w-[500px] md:w-[400px] w-full shadow-xl lg:border-2 md:border-2 bg-base-100">
        <form onSubmit={handleLogin} className="card-body">
          <h1 className='text-xl font-bold'>Login </h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input name='email' type="email" placeholder="example@gmail.com" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input name='password' type="password" placeholder="Password" className="input input-bordered" required />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-red-500 hover:bg-red-400 text-white">Login</button>
          </div>
          <p className='my-2'>Dont Have an accout ? <Link className='underline font-semibold text-red-500' to='/register'>Register</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Login

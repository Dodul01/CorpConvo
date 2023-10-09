import { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../../AppContext/AppProvider';
import {FcGoogle} from 'react-icons/fc'

const Login = () => {
  const { logIn, errorMessage, setErrorMessage, user, googleRegistration } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setErrorMessage(null)
    const email = e.target.email.value;
    const password = e.target.password.value;
    logIn(email, password);
  }

  const handleGoogleRegistration = () => {
    googleRegistration()
  }

  useEffect(()=>{
    if(user){
      navigate('/')
    }
  },[user])

  return (
    <div className="hero min-w-screen mb-4">
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
          {errorMessage && <p className='text-red-800'>{errorMessage}</p>}
          <div className="form-control mt-6">
            <button className="btn bg-red-500 hover:bg-red-400 text-white">Login</button>
          </div>
          <p className='my-2'>Dont Have an accout ? <Link className='underline font-semibold text-red-500' to='/register'>Register</Link></p>
        </form>
        <div className='mx-10 mb-6'>
          <p className='font-bold text-center'>Continue With</p>
          <hr />
          <button onClick={handleGoogleRegistration} className='border-2 mt-2 flex items-center justify-between w-[100px] rounded-lg p-2'><FcGoogle className='text-xl'></FcGoogle> <span className='font-bold'>Google</span></button>
        </div>
      </div>
    </div>
  )
}

export default Login

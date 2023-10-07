import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../AppContext/AppProvider';

const Register = () => {
  const [message, setMessage] = useState(null);
  const { createAccount } = useContext(AppContext);

  const handleRegistration = (e) => {
    e.preventDefault();
    setMessage(null)

    const imageUrl = e.target.imageURL.value;
    const userName = e.target.userName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      return setMessage("Password cannot be less than 6 characters.");
    }

    if (!/[A-Z]/.test(password)) {
      return setMessage("Password must have at least 1 capital letter.");
    }

    if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
      return setMessage("Password must have at least 1 special character.");
    }

    createAccount(email, password, userName, imageUrl)
  }


  return (
    <div className="hero min-w-screen">
      <div className="card lg:w-[500px] md:w-[400px] w-full shadow-xl lg:border-2 md:border-2 bg-base-100">
        <form onSubmit={handleRegistration} className="card-body">
          <h1 className='text-xl font-bold'>Register</h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input name='imageURL' type="text" placeholder="Image URL" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input name='userName' type="text" placeholder="Your Name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input name='email' type="email" placeholder="example@gmai.com" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input name='password' type="password" placeholder="Password" className="input input-bordered" required />
          </div>
          {message && <p>{message}</p>}
          <div className="form-control mt-6">
            <button className="btn bg-red-500 hover:bg-red-400 text-white">Register</button>
          </div>
          <hr />
          <p className='font-bold underline'>Continue With Google</p>
          <p className='mt-1'>Already Have an accout ? <Link className='underline font-semibold text-red-500' to='/login'>Login</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Register

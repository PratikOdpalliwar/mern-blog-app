import React,{ useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const [error, setError]= useState('')
  const navigate = useNavigate()

  const changeInputHandler = (e) => {
    setUserData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const registerUSer= async (e)=>{
e.preventDefault()
setError('')
try{
const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/users/register`, userData)
const newUser = await response.data;
console.log(newUser)
if(!newUser){
  setError("Couldn't register user. Please try again.")
}
navigate('/login')
}catch (err) {
  setError(err.response.data.message)
}
  }

  return (
    <section className="flex justify-center mx-10 items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full md:w-96">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form onSubmit={registerUSer}>
        {error && <p className="w-full mb-4 px-3 py-2 rounded bg-red-500 text-white">{error}</p>}
          <input
            type="text"
            placeholder="Full Name"
            name="name"
            value={userData.name}
            onChange={changeInputHandler}
            autoFocus
            className="w-full mb-4 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={userData.email}
            onChange={changeInputHandler}
            className="w-full mb-4 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={userData.password}
            onChange={changeInputHandler}
            className="w-full mb-4 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <input
            type="password"
            placeholder="Confirm password"
            name="password2"
            value={userData.password2}
            onChange={changeInputHandler}
            className="w-full mb-4 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-900 hover:text-white transition-all ease-in-out duration-150 focus:outline-none focus:shadow-outline-blue"
          >
            Register
          </button>
        </form>
        <small>
          Already have an account? <Link className="text-blue-600" to="/login">Sign In</Link>
        </small>
      </div>
    </section>
  );
};

export default Register;





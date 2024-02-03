import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const changeInputHandler = (e) => {
    setUserData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  return (
    <section className="flex justify-center mx-10 items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full md:w-96">
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        <form>
          <p className="w-full mb-4 px-3 py-2 rounded bg-red-500 text-white">This is an error message</p>
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
          <button
            type="submit"
            className="w-full px-4 py-2 rounded bg-gray-200 text-gray-700 hover:bg-gray-900 hover:text-white transition-all ease-in-out duration-150 focus:outline-none focus:shadow-outline-blue"
          >
            Register
          </button>
        </form>
        <small>
          Don't have an account? <Link className="text-blue-600" to="/register">Sign Up</Link>
        </small>
      </div>
    </section>
  );
};

export default Login;





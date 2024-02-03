import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const changeInputHandler = (e) => {
    setUserData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  return (
    <section className="flex justify-center mx-10 items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full md:w-96">
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <form>
          <p className="text-black mb-4">This is an error message</p>
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





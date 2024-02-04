import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../assets/avatar12.jpg';
import { FaEdit, FaCheck } from 'react-icons/fa';

const UserProfile = () => {
  const [avatar, setAvatar] = useState(Avatar);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="bg-gray-200 p-4 flex flex-col justify-around">
      <div className="max-w-md mx-auto bg-white rounded-md p-6 shadow-md">
        <Link to="/myposts/sdfsdf" className="flex justify-center">
          My posts
        </Link>

        <div className="flex items-center justify-center mt-4">
          <div className="mr-4">
            <img src={Avatar} alt="" className="w-36 h-36 rounded-full" />
          </div>

          <form className="flex items-center space-x-4">
  <label htmlFor="avatar" className="cursor-pointer">
    <input
      type="file"
      name="avatar"
      id="avatar"
      onChange={(e) => setAvatar(e.target.files[0])}
      accept="png, jpg, jpeg"
      className="hidden"
    />
    <div className="bg-gray-200 p-2 rounded-md">
      <FaEdit className="text-gray-500" />
    </div>
  </label>

  <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
    <FaCheck className="" />
  </button>
</form>

          
        </div> 

        <h1 className="text-2xl font-bold mt-4 text-center">Ernest Achiever</h1>

        <form className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
  <p className="bg-red-500 p-2 rounded text-white text-center mb-4">This is an error message</p>

  <input
    type="text"
    placeholder="Full Name"
    value={name}
    onChange={(e) => setName(e.target.value)}
    className="w-full px-3 py-2 border rounded-md mb-3 focus:outline-none focus:ring focus:border-blue-300"
  />

  <input
    type="email"
    placeholder="Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="w-full px-3 py-2 border rounded-md mb-3 focus:outline-none focus:ring focus:border-blue-300"
  />

  <input
    type="password"
    placeholder="Current password"
    value={currentPassword}
    onChange={(e) => setCurrentPassword(e.target.value)}
    className="w-full px-3 py-2 border rounded-md mb-3 focus:outline-none focus:ring focus:border-blue-300"
  />

  <input
    type="password"
    placeholder="New password"
    value={newPassword}
    onChange={(e) => setNewPassword(e.target.value)}
    className="w-full px-3 py-2 border rounded-md mb-3 focus:outline-none focus:ring focus:border-blue-300"
  />

  <input
    type="password"
    placeholder="Confirm new password"
    value={confirmNewPassword}
    onChange={(e) => setConfirmNewPassword(e.target.value)}
    className="w-full px-3 py-2 border rounded-md mb-3 focus:outline-none focus:ring focus:border-blue-300"
  />

  <button
    type="submit"
    className="px-4 py-2 rounded bg-gray-300 text-gray-700 hover:bg-gray-900 hover:text-white transition-all ease-in-out duration-150 focus:outline-none focus:shadow-outline-blue"
  >
    Update details
  </button>
</form>

      </div>

    </section>
  );
};

export default UserProfile;

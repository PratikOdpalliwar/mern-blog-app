import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEdit, FaCheck } from "react-icons/fa";
import { UserContext } from "../context/userContext";
import axios from "axios";

const UserProfile = () => {
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [error, setError] = useState("");

  const [isAvatarTouched, setIsAvatarTouched] = useState(false);

  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/users/${currentUser.id}`,
        { withCredentials: true, headers: { Authorization: `Bearer ${token}` } }
      );
      const { name, email, avatar } = response.data;
      setName(name);
      setEmail(email);
      setAvatar(avatar);
    };
    getUser();
  }, [currentUser.id, token]);

  const changeAvatarHandler = async () => {
    setIsAvatarTouched(false);
    try {
      const postData = new FormData();
      postData.set("avatar", avatar);
      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/users/change-avatar`,
        postData,
        { withCredentials: true, headers: { Authorization: `Bearer ${token}` } }
      );
      setAvatar(response.data.avatar);
    } catch (error) {
      console.log(error);
    }
  };

  const updateUserDetails = async (e) => {
    e.preventDefault();
    try {
      const userData = new FormData();
      userData.set("name", name);
      userData.set("email", email);
      userData.set("currentPassword", currentPassword);
      userData.set("newPassword", newPassword);
      userData.set("confirmNewPassword", confirmNewPassword);
      const response = await axios.patch(
        `${process.env.REACT_APP_BASE_URL}/users/edit-user`,
        userData,
        { withCredentials: true, headers: { Authorization: `Bearer ${token}` } }
      );
      if (response.status === 200) {
        navigate("/logout");
      }
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <section className="bg-gray-200 p-4 flex flex-col justify-around">
      <div className="max-w-md mx-auto bg-white rounded-md p-6 shadow-md">
        <Link to={`/myposts/${currentUser.id}`} className="flex justify-center">
          My posts
        </Link>

        <div className="flex items-center justify-center mt-4">
          <div className="relative">
            <img
              src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${avatar}`}
              alt=""
              className="w-36 h-36 rounded-full"
            />
            <form className="absolute bottom-0 right-0 flex flex-col items-end space-y-2 p-2">
              <label htmlFor="avatar" className="cursor-pointer">
                <input
                  type="file"
                  name="avatar"
                  id="avatar"
                  onChange={(e) => setAvatar(e.target.files[0])}
                  accept="png, jpg, jpeg"
                  className="hidden"
                />
                <div className="bg-gray-200 p-2 rounded-lg">
                  <FaEdit
                    onClick={() => setIsAvatarTouched(true)}
                    className="text-gray-500"
                  />
                </div>
              </label>
              {isAvatarTouched && (
                <button
                  onClick={changeAvatarHandler}
                  className="bg-blue-500 text-white p-2 rounded-lg"
                >
                  <FaCheck />
                </button>
              )}
            </form>
          </div>
        </div>

        <h1 className="text-2xl font-bold mt-4 text-center">
          {currentUser.name}
        </h1>

        <form
          onSubmit={updateUserDetails}
          className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md"
        >
          {error && (
            <p className="bg-red-500 p-2 rounded text-white text-center mb-4">
              {error}
            </p>
          )}

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

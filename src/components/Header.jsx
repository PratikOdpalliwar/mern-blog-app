import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { UserContext } from "../context/userContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser } = useContext(UserContext);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white bg-opacity-50 w-full p-4 shadow-2xl fixed top-0 left-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-black text-lg  font-bold italic">
          <Link to="/">ClearCutsBlogs</Link>
        </div>

        {(currentUser?.id || !isOpen) && (
          <ul className="hidden md:flex mx-5 space-x-4">
            {currentUser?.id && (
              <>
                <li>
                  <Link to={`/profile/${currentUser.id}`} onClick={closeMenu}>
                    {currentUser?.name}
                  </Link>
                </li>
                <li>
                  <Link to="/create" onClick={closeMenu}>
                    Create Post
                  </Link>
                </li>
                <li>
                  <Link to="/authors" onClick={closeMenu}>
                    Authors
                  </Link>
                </li>
                <li>
                  <Link to="/logout" onClick={closeMenu}>
                    Logout
                  </Link>
                </li>
              </>
            )}
            {!currentUser?.id && (
              <>
                <li>
                  <Link to="/authors" onClick={closeMenu}>
                    Authors
                  </Link>
                </li>
                <li>
                  <Link to="/login" onClick={closeMenu}>
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        )}

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black">
            {isOpen ? <IoMdClose /> : <FaBars />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-opacity-75  bg-gray-100 p-4">
          {currentUser?.id && (
            <>
              <Link
                to="/profile/sdfsdf"
                onClick={closeMenu}
                className="block text-black mb-2"
              >
                {currentUser.name}
              </Link>
              <Link
                to="/create"
                onClick={closeMenu}
                className="block text-black mb-2"
              >
                Create Post
              </Link>
            </>
          )}
          <Link
            to="/authors"
            onClick={closeMenu}
            className="block text-black mb-2"
          >
            Authors
          </Link>
          {!currentUser?.id && (
            <Link
              to="/login"
              onClick={closeMenu}
              className="block text-black mb-2"
            >
              Login
            </Link>
          )}
          {currentUser?.id && (
            <Link
              to="/logout"
              onClick={closeMenu}
              className="block text-black mb-2"
            >
              Logout
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Header;

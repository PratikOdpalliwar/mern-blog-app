import React from "react";
import { Link } from "react-router-dom";
import Avtar from "../assets/avatar1.jpg";

const PostAuthor = () => {
  return (
    <div className="flex items-center">
      <Link to={`/posts/users/sdfsdf`} className="flex items-center">
        <div>
          <img className="w-12 rounded-full" src={Avtar} alt="" />
        </div>
        <div className="px-2">
          <h5 className="text-sm font-semibold">By: Ernest Achiever</h5>
          <small className="text-gray-500">Just Now</small>
        </div>
      </Link>
    </div>
  );
};

export default PostAuthor;

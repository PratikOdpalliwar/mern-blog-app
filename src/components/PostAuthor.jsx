import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { formatDistanceToNow } from "date-fns";

const PostAuthor = ({ authorID, createdAt }) => {
  const [author, setAuthor] = useState({});

  useEffect(() => {
    const getAuthor = async () => {
      try {
        const response = await axios.get(
          `https://mern-blog-server-rmvk.onrender.com/api/users/${authorID}`
        );
        setAuthor(response?.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAuthor();
  }, [authorID]);

  return (
    <div className="flex items-center">
      <Link to={`/posts/users/${authorID}`} className="flex items-center">
        <div>
          <img
            className="w-12 h-12 rounded-full"
            src={`https://mern-blog-server-rmvk.onrender.com/uploads/${author?.avatar}`}
            alt=""
          />
        </div>
        <div className="px-2">
          <h5 className="text-sm font-semibold">By: {author?.name}</h5>
          <small className="text-gray-500">
            {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
          </small>
        </div>
      </Link>
    </div>
  );
};

export default PostAuthor;

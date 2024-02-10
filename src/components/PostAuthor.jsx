import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const PostAuthor = ({authorID, createdAt}) => {
 const [author, setAuthor] = useState({})
    
    useEffect(() => {
    const getAuthor = async () => {
    try {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/users/${authorID}`) 
    setAuthor(response?.data);
    } catch (error) {
    console.log(error)
    }
    }
     getAuthor();
      }, [])


  return (
    <div className="flex items-center">
      <Link to={`/posts/users/${authorID}`} className="flex items-center">
        <div>
          <img className="w-12 rounded-full" src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${author?.author}`}  alt="" />
        </div>
        <div className="px-2">
          <h5 className="text-sm font-semibold">By: {author?.name}</h5>
          <small className="text-gray-500">Just Now</small>
        </div>
      </Link>
    </div>
  );
};

export default PostAuthor;

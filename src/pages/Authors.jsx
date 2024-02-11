import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader"


const Authors = () => {
  const [authors, setAuthors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getAuthors = async () => {
    setIsLoading(true);
    try {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/users`)
    setAuthors(response.data)
    } catch (error) {
    console.log(error)
    }
    setIsLoading(false)
    }
    getAuthors()
    }, [])


    if(isLoading){
      return <Loader/>
    }

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8">
      {authors.length > 0 ? (
        authors.map(({_id:id, avatar, name, posts }) => (
          <Link
            key={id}
            to={`posts/users/${id}`}
            className="author-card flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out"
          >
            <div className="author-avatar overflow-hidden rounded-full mb-4">
              <img
                src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${avatar}`}
                alt={`Image of ${name}`}
                className="w-36 h-36 rounded-full"
              />
            </div>
            <div>
              <h4 className="text-lg font-bold">{name}</h4>
              <p className="text-gray-500">{posts} Posts</p>
            </div>
          </Link>
        ))
      ) : (
        <h1 className="text-2xl font-bold text-center">No users/authors found.</h1>
      )}
    </section>
  );
};

export default Authors;

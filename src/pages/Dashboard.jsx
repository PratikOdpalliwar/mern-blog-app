import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { DUMMY_POSTS } from "../data";
import { UserContext } from "../context/userContext";
import axios from "axios";
import Loader from "../components/Loader";
import DeletePost from "../pages/DeletePost"

const Dashboard = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `https://mern-blog-server-rmvk.onrender.com/api/posts/users/${id}`,
          {
            withCredentials: true,
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setPosts(response.data);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    };
    fetchPosts();
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section>
      {posts.length ? (
        <div className="flex flex-col">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-row m-5 shadow-2xl">
              <div>
                <img
                  className="w-16 sm:w-20 rounded m-2 flex justify-center"
                  src={`https://mern-blog-server-rmvk.onrender.com/uploads/${post.thumbnail}`}
                  alt=""
                />
              </div>

              <div className="mx-5 text-sm font-bold font-mono flex flex-row justify-center items-center flex-wrap">
                <h5>{post.title}</h5>
              </div>

              <div className="flex flex-row items-center ml-auto">
                <Link
                  className="p-2 h-6 mx-2 flex items-center rounded text-black text-sm hover:bg-black hover:text-white"
                  to={`/posts/${post._id}`}
                >
                  View
                </Link>
                <Link
                  className="p-2 h-6 mx-2 flex items-center rounded text-white text-sm bg-blue-500 hover:bg-black hover:text-white"
                  to={`/posts/${post._id}/edit`}
                >
                  Edit
                </Link>
                 <DeletePost postId={post._id}/>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <h2 className="text-3xl m-10 p-2 font-bold font-mono flex justify-center items-center">
          You have no posts yet.
        </h2>
      )}
    </section>
  );
};

export default Dashboard;

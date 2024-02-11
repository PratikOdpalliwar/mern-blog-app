import React, { useState, useContext, useEffect } from "react";
import PostAuthor from "../components/PostAuthor";
import { Link, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import DeletePost from "./DeletePost";
import { UserContext } from "../context/userContext";
import axios from "axios";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    const getPost = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/posts/${id}`
        );
        setPost(response.data);
      } catch (error) {
        setError(error);
      }
      setIsLoading(false);
    };
    getPost();
  }, [id]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="container mx-auto p-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
      {error && (
        <p className="w-full mb-4 px-4 py-2 rounded bg-red-500 text-white">
          {error}
        </p>
      )}
      {post && (
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <PostAuthor authorID={post.creator} createdAt={post.createdAt} />
          <div className="flex flex-col md:flex-row justify-between items-center mt-4">
            {currentUser?.id === post.creator && (
              <div className="mb-4 md:mb-0">
                <Link to={`/posts/${post._id}/edit`} className="text-blue-500 mr-2">
                  Edit
                </Link>
                <span className="mx-2">|</span>
                <DeletePost postId={id} />
                <h1 className="text-2xl font-bold my-7 md:ml-4">{post.title}</h1>
              </div>
            )}

           
          </div>

          <div className="mt-4">
            <img
              src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${post.thumbnail}`}
              alt=""
              className="w-full h-auto rounded-lg"
            />
          </div>
          <p className="mt-5" dangerouslySetInnerHTML={{ __html: post.description }}></p>
        </div>
      )}
    </section>
  );
};

export default PostDetail;

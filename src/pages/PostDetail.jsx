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
    <section className="container mx-auto mt-8">
      {error && (
        <p className="w-full mb-4 px-3 py-2 rounded bg-red-500 text-white">
          {error}
        </p>
      )}
      {post && (
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <PostAuthor authorID={post.creator} createdAt={post.createdAt} />
          <div className="flex justify-between items-center mt-4">
            <div>
              {currentUser?.id === post.creator && (
                <div>
                  <Link to={`/posts/${post._id}/edit`} className="text-blue-500">
                    Edit
                  </Link>
                  <span className="mx-2">|</span>
                  <DeletePost postId={id} />
                </div>
              )}
            </div>
            <h1 className="text-4xl font-bold mt-4">{post.title}</h1>
            <div className="mt-4">
              <img
                src={`${process.env.REACT_APP_ASSETS_URL}/uploads/${post.thumbnail}`}
                alt=""
                className="w-full h-auto rounded-lg"
              />
            </div>
            <p dangerouslySetInnerHTML={{ __html: post.desc }}></p>
          </div>
        </div>
      )}
    </section>
  );
};

export default PostDetail;

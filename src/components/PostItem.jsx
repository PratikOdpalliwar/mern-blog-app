import React from "react";
import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";

const PostItem = ({
  postID,
  category,
  title,
  desc,
  authorID,
  thumbnail,
  createdAt,
}) => {
  const shortDesc = desc.length > 100 ? desc.substr(0, 100) + "....." : desc;
  const postTitle = title.length > 100 ? title.substr(0, 100) + "....." : title;

  return (
    <article className="w-80 bg-white rounded-lg overflow-hidden shadow-2xl m-4">
      <div>
        <img
          className="w-full p-2"
          src={`https://mern-blog-server-rmvk.onrender.com/uploads/${thumbnail}`}
          alt={title}
        />
      </div>
      <div className="p-2">
        <Link
          to={`/posts/${postID}`}
          className="text-lg font-bold text-black hover:text-blue-500 hover:underline"
        >
          {postTitle}
        </Link>

        <p className="px-2 text-sm text-justify text-gray-700 w-full h-16 mt-2"
        dangerouslySetInnerHTML={{__html:shortDesc}}/>


        <div className="mt-2 flex flex-row">
          <div className="w-9/12">
            <PostAuthor authorID={authorID} createdAt={createdAt} />
          </div>

          <div className="flex justify-end items-center place-content-centerh-8">
            <Link
              to={`/posts/categories/${category}`}
              className="inline-block  bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 hover:bg-gray-900 hover:text-white transition-all ease-in-out duration-150"
            >
              {category}
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostItem;

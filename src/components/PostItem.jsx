import React from 'react';
import { Link } from 'react-router-dom';
import PostAuthor from './PostAuthor';

const PostItem = ({ postID, category, title, desc, authorID, thumbnail }) => {
  return (
    <article className="max-w-md bg-white rounded overflow-hidden shadow-lg m-4">
      <div>
        <img className="w-full" src={thumbnail} alt={title} />
      </div>
      <div className="px-6 py-4">
        <Link to={`/posts/${postID}`} className="text-xl font-bold text-blue-500 hover:underline">
          {title}
        </Link>
        <p className="text-gray-700 mt-2">{desc}</p>
        <div className="mt-4">
          <PostAuthor authorID={authorID} />
          <Link
            to={`/posts/categories/${category}`}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            {category}
          </Link>
        </div>
      </div>
    </article>
  );
};

export default PostItem;

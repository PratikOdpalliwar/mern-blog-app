import React from 'react';
import { Link } from 'react-router-dom';
import PostAuthor from './PostAuthor';

const PostItem = ({ postID, category, title, desc, authorID, thumbnail }) => {
  return (
    <article className="w-80 bg-white rounded-lg overflow-hidden shadow-2xl m-4">
      <div>
        <img className="w-full p-2" src={thumbnail} alt={title} />
      </div>
      <div className="p-2">
        <Link to={`/posts/${postID}`} className="text-lg font-bold text-black hover:text-blue-500 hover:underline">
          {title}
        </Link>
        <p className="text-sm text-gray-700 w-full mt-2">{desc}</p>
        <div className="mt-2 flex flex-row">
          <div className='w-9/12'>
          <PostAuthor authorID={authorID} />
            </div>
         
          <div className='flex justify-end items-center place-content-centerh-8'>
          <Link
            to={`/posts/categories/${category}`}
            className="inline-block  bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
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
